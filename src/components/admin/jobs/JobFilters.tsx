"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { JobType, JobStatus } from "@/validation/job";
import { useDebounce } from "@/hooks/use-debounce";

interface JobFiltersProps {
    departments: { id: number; name: string }[];
}

export function JobFilters({ departments }: JobFiltersProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("search") || "");
    const debouncedSearch = useDebounce(search, 500);



    const handleFilterChange = useCallback((key: string, value: string) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        if (value === null || value === "all") {
            newSearchParams.delete(key);
        } else {
            newSearchParams.set(key, value);
        }
        newSearchParams.set("page", "1");

        const newQueryString = newSearchParams.toString();
        const currentQueryString = searchParams.toString();

        if (newQueryString !== currentQueryString) {
            router.push(`${pathname}?${newQueryString}`);
        }
    }, [searchParams, pathname, router]);

    useEffect(() => {
        const currentSearch = searchParams.get("search") || "";
        if (debouncedSearch !== currentSearch) {
            const newSearchParams = new URLSearchParams(searchParams.toString());
            if (debouncedSearch) {
                newSearchParams.set("search", debouncedSearch);
            } else {
                newSearchParams.delete("search");
            }
            newSearchParams.set("page", "1");
            router.push(`${pathname}?${newSearchParams.toString()}`);
        }
    }, [debouncedSearch, pathname, router, searchParams]);

    return (
        <div className="p-4 border-b border-gray-100 dark:border-gray-800 space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
                {/* Search */}
                <div className="relative flex-1 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-brand transition-colors" />
                    <input
                        type="text"
                        placeholder="Search jobs by title or location..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-xl text-sm font-medium focus:ring-1 focus:ring-brand outline-none transition-all"
                    />
                    {search && (
                        <button
                            onClick={() => setSearch("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            <X className="size-3" />
                        </button>
                    )}
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                    {/* Department Filter */}
                    <div className="w-full md:w-[180px]">
                        <Select
                            value={searchParams.get("departmentId") || "all"}
                            onValueChange={(val) => handleFilterChange("departmentId", val)}
                        >
                            <SelectTrigger className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800 text-xs font-bold uppercase tracking-wider">
                                <SelectValue placeholder="Department" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="all">All Departments</SelectItem>
                                {departments.map((dept) => (
                                    <SelectItem key={dept.id} value={String(dept.id)}>
                                        {dept.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Job Type Filter */}
                    <div className="w-full md:w-[150px]">
                        <Select
                            value={searchParams.get("type") || "all"}
                            onValueChange={(val) => handleFilterChange("type", val)}
                        >
                            <SelectTrigger className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800 text-xs font-bold uppercase tracking-wider">
                                <SelectValue placeholder="Job Type" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="all">All Types</SelectItem>
                                {Object.keys(JobType).map((type) => (
                                    <SelectItem key={type} value={type}>
                                        {type.replace("_", " ")}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Status Filter */}
                    <div className="w-full md:w-[150px]">
                        <Select
                            value={searchParams.get("status") || "all"}
                            onValueChange={(val) => handleFilterChange("status", val)}
                        >
                            <SelectTrigger className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800 text-xs font-bold uppercase tracking-wider">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="all">All Status</SelectItem>
                                {Object.keys(JobStatus).map((status) => (
                                    <SelectItem key={status} value={status}>
                                        {status}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Clear Filters */}
                    {Array.from(searchParams.keys()).some(k => k !== 'page') && (
                        <button
                            onClick={() => router.push(pathname)}
                            className="flex items-center gap-2 px-4 h-10 rounded-xl text-sm font-medium text-gray-500 hover:text-red-500 hover:bg-red-50 dark:text-gray-400 dark:hover:bg-red-900/10 transition-all"
                        >
                            <X className="size-4" />
                            Clear
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
