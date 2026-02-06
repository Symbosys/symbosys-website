export function ContactHero() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 mb-16 text-center relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
                <span className="text-xs font-bold text-brand uppercase tracking-wider">
                    24/7 Support
                </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-main dark:text-white mb-6">
                Let&apos;s Start a <span className="text-brand">Conversation</span>
            </h1>
            <p className="text-xl text-text-muted dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Have a project idea? Want to join our team? Or just have a question? We
                are here to help you build your digital future.
            </p>
        </section>
    );
}
