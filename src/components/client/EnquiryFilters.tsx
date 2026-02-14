"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect, useMemo } from "react";
import { useDebouncedCallback } from "use-debounce";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Filter, Search, X } from "lucide-react";
import { startOfMonth, endOfMonth } from "date-fns";

export function EnquiryFilters() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("search") || "");
    const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
        const startStr = searchParams.get("startDate");
        return startStr ? new Date(startStr) : null;
    });

    useEffect(() => {
        setSearch(searchParams.get("search") || "");
        const startStr = searchParams.get("startDate");
        if (startStr) {
            setSelectedDate(new Date(startStr));
        } else {
            setSelectedDate(null);
        }
    }, [searchParams]);

    const updateFilters = useCallback(
        (updates: Record<string, string | null>) => {
            const params = new URLSearchParams(searchParams.toString());

            Object.entries(updates).forEach(([name, value]) => {
                if (value === null || value === "") {
                    params.delete(name);
                } else {
                    params.set(name, value);
                }
            });

            params.set("page", "1");
            router.push(`${pathname}?${params.toString()}`);
        },
        [searchParams, pathname, router]
    );

    const handleSearch = useDebouncedCallback((term: string) => {
        updateFilters({ search: term });
    }, 400);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        if (date) {
            const startDate = startOfMonth(date).toISOString();
            const endDate = endOfMonth(date).toISOString();
            updateFilters({ startDate, endDate });
        } else {
            updateFilters({ startDate: null, endDate: null });
        }
    };

    const currentStatus = useMemo(() => {
        const isRead = searchParams.get("isRead");
        if (isRead === "true") return "read";
        if (isRead === "false") return "unread";
        return "all";
    }, [searchParams]);

    const handleStatusChange = (value: string) => {
        if (value === "read") {
            updateFilters({ isRead: "true" });
        } else if (value === "unread") {
            updateFilters({ isRead: "false" });
        } else {
            updateFilters({ isRead: null });
        }
    };

    const clearAll = () => {
        setSearch("");
        setSelectedDate(null);
        router.push(pathname);
    };

    const hasFilters = search || selectedDate || searchParams.get("isRead");

    return (
        <div className="flex flex-col lg:flex-row gap-4 mb-6 bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300">
            {/* Search Input */}
            <div className="flex-1 relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-brand transition-colors" />
                <input
                    type="text"
                    placeholder="Search name, email, or phone..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        handleSearch(e.target.value);
                    }}
                    className="w-full pl-10 pr-4 py-2 h-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-brand/50 focus:border-brand outline-none transition-all text-sm"
                />
            </div>

            <div className="flex flex-wrap gap-3">
                {/* Month Picker */}
                <div className="relative group">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10 pointer-events-none group-focus-within:text-brand transition-colors" />
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="MMMM yyyy"
                        showMonthYearPicker
                        placeholderText="Select Month"
                        className="w-full md:w-48 pl-10 pr-4 py-2 h-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-brand/50 focus:border-brand outline-none transition-all text-sm cursor-pointer"
                        autoComplete="off"
                        portalId="root-portal"
                    />
                </div>

                {/* Status Select */}
                <div className="w-full md:w-40">
                    <Select value={currentStatus} onValueChange={handleStatusChange}>
                        <SelectTrigger className="h-10 rounded-xl bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-brand/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <div className="flex items-center gap-2">
                                <Filter className="h-4 w-4 text-gray-400" />
                                <SelectValue placeholder="Status" />
                            </div>
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-gray-100 dark:border-gray-800 shadow-2xl">
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="unread">Unread</SelectItem>
                            <SelectItem value="read">Read</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Clear Filters */}
                {hasFilters && (
                    <button
                        onClick={clearAll}
                        className="flex items-center gap-2 px-4 h-10 rounded-xl text-sm font-medium text-gray-500 hover:text-red-500 hover:bg-red-50 dark:text-gray-400 dark:hover:bg-red-900/10 transition-all"
                    >
                        <X className="h-4 w-4" />
                        Clear
                    </button>
                )}
            </div>

            <style jsx global>{`
        /* Root container fix */
        .react-datepicker-wrapper {
          display: block;
        }

        /* The Popped Container */
        .react-datepicker {
          background-color: #ffffff !important;
          border-radius: 1.25rem !important;
          border: 1px solid #e5e7eb !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
          font-family: inherit !important;
          padding: 0.5rem !important;
          margin-top: 0.5rem !important;
          z-index: 9999 !important; /* Ensure it stays above sticky headers */
        }
        
        /* Ensure the portal container also has high z-index */
        .react-datepicker__portal {
          z-index: 9999 !important;
        }

        .react-datepicker-popper {
          z-index: 9999 !important;
        }

        .dark .react-datepicker {
          background-color: #1a1a24 !important;
          border-color: #2e2e3a !important;
          color: #ffffff !important;
        }

        /* Header (Year + Buttons) */
        .react-datepicker__header {
          background: transparent !important;
          border-bottom: none !important;
          padding-top: 0.75rem !important;
          margin-bottom: 0.5rem !important;
        }

        .react-datepicker__current-month {
          color: #111827 !important;
          font-weight: 700 !important;
          font-size: 1rem !important;
          margin-bottom: 0.5rem !important;
        }

        .dark .react-datepicker__current-month {
          color: #ffffff !important;
        }

        /* Navigation Arrows */
        .react-datepicker__navigation {
          top: 1rem !important;
        }
        
        .react-datepicker__navigation--previous { left: 1rem !important; }
        .react-datepicker__navigation--next { right: 1rem !important; }

        /* Month Grid Fixes */
        .react-datepicker__month-container {
          float: none !important;
        }

        .react-datepicker__month {
          margin: 0 !important;
          padding: 0.5rem !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 0.25rem !important;
        }

        .react-datepicker__month-wrapper {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 0.5rem !important;
          margin-bottom: 0.5rem !important;
        }

        /* Individual Month Button */
        .react-datepicker__month-text {
          width: auto !important;
          padding: 0.75rem 0.5rem !important;
          margin: 0 !important;
          border-radius: 0.75rem !important;
          font-weight: 500 !important;
          font-size: 0.875rem !important;
          transition: all 0.2s ease !important;
          color: #4b5563 !important;
        }

        .dark .react-datepicker__month-text {
          color: #9ca3af !important;
        }

        /* Hover State */
        .react-datepicker__month-text:hover {
          background-color: #f3f4f6 !important;
          color: #111827 !important;
          transform: translateY(-1px) !important;
        }

        .dark .react-datepicker__month-text:hover {
          background-color: #2d2d3a !important;
          color: #ffffff !important;
        }

        /* Selected State */
        .react-datepicker__month--selected,
        .react-datepicker__month-text--selected,
        .react-datepicker__month-text--keyboard-selected {
          background-color: #4b2bee !important; /* Brand Purple */
          color: #ffffff !important;
          box-shadow: 0 4px 12px rgba(75, 43, 238, 0.3) !important;
        }

        .react-datepicker__month-text--selected:hover {
          background-color: #3b22c4 !important;
          color: #ffffff !important;
        }

        /* Triangle / Pointer */
        .react-datepicker__triangle {
          display: none !important;
        }
      `}</style>
        </div>
    );
}
