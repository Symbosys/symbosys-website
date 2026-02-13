type Props = {
    title: string;
    value: string | number;
    icon: string;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    color?: string; // e.g., "brand", "blue", "purple", "emerald"
};

export function DashboardStats({ title, value, icon, trend, color = "brand" }: Props) {
    const colorClasses = {
        brand: "text-brand bg-brand/10",
        blue: "text-blue-500 bg-blue-500/10",
        purple: "text-purple-500 bg-purple-500/10",
        emerald: "text-emerald-500 bg-emerald-500/10",
        orange: "text-orange-500 bg-orange-500/10",
    }[color] || "text-brand bg-brand/10";

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${colorClasses}`}>
                    <span className="material-symbols-outlined text-2xl">{icon}</span>
                </div>
                {trend && (
                    <div className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${trend.isPositive ? "text-emerald-600 bg-emerald-50" : "text-rose-600 bg-rose-50"
                        }`}>
                        <span className="material-symbols-outlined text-sm mr-1">
                            {trend.isPositive ? "trending_up" : "trending_down"}
                        </span>
                        {trend.value}%
                    </div>
                )}
            </div>
            <div>
                <h3 className="text-sm font-medium text-text-muted dark:text-gray-400 mb-1">
                    {title}
                </h3>
                <p className="text-3xl font-bold text-text-main dark:text-white tracking-tight">
                    {value}
                </p>
            </div>
        </div>
    );
}
