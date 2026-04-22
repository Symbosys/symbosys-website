export default function AdminLoading() {
    return (
        <div className="flex items-center justify-center p-20">
            <div className="flex flex-col items-center gap-4">
                <div className="size-12 border-4 border-brand/20 border-t-brand rounded-full animate-spin"></div>
                <p className="text-text-muted dark:text-gray-400 font-medium animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
}
