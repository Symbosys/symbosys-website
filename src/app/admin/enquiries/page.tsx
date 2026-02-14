import { getAllEnquiries } from "@/actions/enquiry";
import Pagination from "@/components/client/Pagination";
import { EnquiryFilters } from "@/components/client/EnquiryFilters";
import { EnquiryActions } from "@/components/admin/enquiries/EnquiryActions";
import { notFound } from "next/navigation";

interface PageProps {
    searchParams: Promise<{
        page?: string;
        search?: string;
        isRead?: string;
        startDate?: string;
        endDate?: string;
    }>;
}

export default async function EnquiesPage({ searchParams }: PageProps) {
    // In Next.js 15+, searchParams is a Promise and MUST be awaited
    const resolvedSearchParams = await searchParams;

    const page = Number(resolvedSearchParams.page) || 1;
    const search = resolvedSearchParams.search;
    const isRead = resolvedSearchParams.isRead === "true" ? true : resolvedSearchParams.isRead === "false" ? false : undefined;
    const startDate = resolvedSearchParams.startDate;
    const endDate = resolvedSearchParams.endDate;

    const { data, pagination, error } = await getAllEnquiries({
        page,
        limit: 10,
        search,
        isRead,
        startDate,
        endDate,
    });

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-10 text-center">
                <span className="material-symbols-outlined text-6xl text-red-500 mb-4">error</span>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Something went wrong</h1>
                <p className="text-gray-600 dark:text-gray-400">{error.message}</p>
            </div>
        );
    }

    if (!data) return notFound();

    return (
        <div className="space-y-6 h-full flex flex-col">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-text-main dark:text-white">
                        Enquiries
                    </h1>
                    <p className="text-sm text-text-muted dark:text-gray-400 mt-1">
                        Manage and respond to customer questions.
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="shrink-0">
                <EnquiryFilters />
            </div>

            {/* Enquiries List */}
            <div className="flex-1 min-h-0 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
                <div className="overflow-x-auto custom-scrollbar flex-1">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 dark:bg-gray-800 sticky top-0 z-10">
                            <tr>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {data.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                                        <div className="flex flex-col items-center gap-3">
                                            <span className="material-symbols-outlined text-4xl text-gray-300">inbox</span>
                                            <p>No enquiries found matching your criteria.</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                data.map((enquiry) => (
                                    <tr key={enquiry.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xs uppercase shrink-0">
                                                    {enquiry.name.charAt(0)}
                                                </div>
                                                <span className="font-medium text-text-main dark:text-white">{enquiry.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex flex-col text-sm">
                                                <span className="text-text-main dark:text-white line-clamp-1">{enquiry.email}</span>
                                                <span className="text-xs text-text-muted dark:text-gray-400">{enquiry.phone}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${enquiry.isRead
                                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                                : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                                }`}>
                                                {enquiry.isRead ? "Read" : "Unread"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-text-muted dark:text-gray-400">
                                            {new Date(enquiry.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <EnquiryActions
                                                enquiryId={enquiry.id}
                                                enquiryName={enquiry.name}
                                                isRead={enquiry.isRead}
                                            />
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Footer */}
                <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 shrink-0">
                    <Pagination
                        currentPage={pagination?.page || 1}
                        totalPages={pagination?.totalPages || 1}
                    />
                </div>
            </div>
        </div>
    );
}