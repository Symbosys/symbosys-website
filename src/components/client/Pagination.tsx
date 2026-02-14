"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-between px-2 py-3">
            {/* Mobile view */}
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    onClick={() => router.push(createPageURL(currentPage - 1))}
                    disabled={currentPage <= 1}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                >
                    Previous
                </button>
                <button
                    onClick={() => router.push(createPageURL(currentPage + 1))}
                    disabled={currentPage >= totalPages}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                >
                    Next
                </button>
            </div>

            {/* Desktop view */}
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                        Showing Page <span className="font-medium text-text-main dark:text-white">{currentPage}</span> of{" "}
                        <span className="font-medium text-text-main dark:text-white">{totalPages}</span>
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-lg shadow-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700" aria-label="Pagination">
                        <button
                            onClick={() => router.push(createPageURL(currentPage - 1))}
                            disabled={currentPage <= 1}
                            className="relative inline-flex items-center px-3 py-2 text-gray-400 hover:text-brand focus:z-20 focus:outline-offset-0 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-gray-400 transition-colors border-r border-gray-200 dark:border-gray-700"
                        >
                            <span className="sr-only">Previous</span>
                            <span className="material-symbols-outlined text-xl">chevron_left</span>
                        </button>

                        <span className="relative z-10 inline-flex items-center bg-brand/5 px-6 py-2 text-sm font-semibold text-brand focus:z-20">
                            {currentPage}
                        </span>

                        <button
                            onClick={() => router.push(createPageURL(currentPage + 1))}
                            disabled={currentPage >= totalPages}
                            className="relative inline-flex items-center px-3 py-2 text-gray-400 hover:text-brand focus:z-20 focus:outline-offset-0 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-gray-400 transition-colors border-l border-gray-200 dark:border-gray-700"
                        >
                            <span className="sr-only">Next</span>
                            <span className="material-symbols-outlined text-xl">chevron_right</span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
