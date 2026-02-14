"use client";

import { useRef, useState, useEffect, useTransition } from "react";
import { createPortal } from "react-dom";
import { getAllJobs } from "@/actions/job";
import { toast } from "sonner";
import { JobApplicationForm } from "./JobApplicationForm";

// Define the Job type based on the action return type
type Job = {
    id: number;
    title: string;
    description: string;
    requirements: string;
    salaryRange: string | null;
    location: string;
    departmentId: number;
    type: string;
    status: string;
    slug: string;
    department: {
        name: string;
    };
    _count: {
        applications: number;
    };
    createdAt: Date;
    updatedAt: Date;
};

interface JobInfiniteListProps {
    initialJobs: Job[];
    initialTotalPages: number;
}

export function JobInfiniteList({ initialJobs, initialTotalPages }: JobInfiniteListProps) {
    const [jobs, setJobs] = useState<Job[]>(initialJobs);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(page < initialTotalPages);
    const [isPending, startTransition] = useTransition();
    const loadingRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const currentRef = loadingRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasMore]); // Re-attach if hasMore changes (though ref stays same, good practice)

    useEffect(() => {
        if (inView && hasMore && !isPending) {
            loadMoreJobs();
        }
    }, [inView, hasMore, isPending]);

    const loadMoreJobs = () => {
        startTransition(async () => {
            const nextPage = page + 1;
            const result = await getAllJobs({ page: nextPage, limit: 10, status: "PUBLISHED" });

            if (result.success && result.data) {
                const pagination = result.pagination;

                setJobs((prev) => {
                    const newJobs = result.data as Job[];
                    // Filter duplicates
                    const existingIds = new Set(prev.map(j => j.id));
                    const uniqueNewJobs = newJobs.filter(j => !existingIds.has(j.id));
                    return [...prev, ...uniqueNewJobs];
                });

                setPage(nextPage);
                if (pagination && nextPage >= pagination.totalPages) {
                    setHasMore(false);
                }
            } else {
                toast.error("Failed to load more jobs");
                setHasMore(false);
            }
        });
    };

    if (jobs.length === 0) {
        return (
            <div className="text-center py-12 text-text-muted dark:text-gray-400">
                <p>No open positions at the moment. Please check back later.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {jobs.map((job) => (
                <div
                    key={job.id}
                    className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-colors border border-transparent hover:border-brand/20 group animate-fade-in"
                >
                    <div>
                        <h3 className="text-xl font-bold text-text-main dark:text-white mb-2 group-hover:text-brand transition-colors">
                            {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-text-muted dark:text-gray-400">
                            <span className="flex items-center gap-1.5 bg-white/50 dark:bg-gray-900/50 px-2 py-1 rounded-md">
                                <span className="material-symbols-outlined text-base text-brand">
                                    domain
                                </span>
                                {job.department.name}
                            </span>
                            <span className="flex items-center gap-1.5 bg-white/50 dark:bg-gray-900/50 px-2 py-1 rounded-md">
                                <span className="material-symbols-outlined text-base text-brand">
                                    schedule
                                </span>
                                {job.type.replace("_", " ")}
                            </span>
                            <span className="flex items-center gap-1.5 bg-white/50 dark:bg-gray-900/50 px-2 py-1 rounded-md">
                                <span className="material-symbols-outlined text-base text-brand">
                                    location_on
                                </span>
                                {job.location}
                            </span>
                        </div>
                    </div>
                    {/* Placeholder for Apply Now button - could link to a job details page */}
                    <button
                        onClick={() => setSelectedJob(job)}
                        className="whitespace-nowrap px-6 py-3 rounded-xl bg-text-main dark:bg-gray-100 text-white dark:text-gray-900 font-semibold hover:bg-brand dark:hover:bg-brand dark:hover:text-white transition-colors shadow-lg active:scale-95 duration-200 cursor-pointer"
                    >
                        Apply Now
                    </button>
                </div>
            ))}

            {hasMore && (
                <div ref={loadingRef} className="flex justify-center py-8">
                    <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {/* Application Modal */}
            {selectedJob && mounted && createPortal(
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-3xl animate-fade-in">
                    <div className="bg-white dark:bg-gray-900 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in relative">
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-text-main dark:text-white">
                                        Apply for {selectedJob.title}
                                    </h3>
                                    <p className="text-text-muted dark:text-gray-400 text-sm mt-1">
                                        {selectedJob.department.name} • {selectedJob.location}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedJob(null)}
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-text-main dark:text-white">close</span>
                                </button>
                            </div>

                            <JobApplicationForm jobId={selectedJob.id} jobTitle={selectedJob.title} />
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}
