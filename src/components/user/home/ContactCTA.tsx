export function ContactCTA() {
    return (
        <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="glass-panel rounded-4xl p-8 md:p-16 text-center relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-full h-full bg-linear-to-b from-brand/5 via-brand-blue/5 to-transparent -z-10 bg-opacity-50"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand/50 to-transparent"></div>

                <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-4 tracking-tight">
                    Ready to <span className="text-brand">flow?</span>
                </h2>
                <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto">
                    Let&apos;s construct a digital reality that surpasses your imagination.
                </p>

                <div className="max-w-2xl mx-auto text-left relative z-10">
                    <form className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label
                                    htmlFor="fullName"
                                    className="text-sm font-semibold text-text-main ml-1"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="fullName"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full rounded-2xl border-none bg-white/70 backdrop-blur-sm px-6 py-4 text-text-main placeholder:text-text-muted/60 focus:ring-2 focus:ring-brand/50 shadow-inner transition-all outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-text-main ml-1"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full rounded-2xl border-none bg-white/70 backdrop-blur-sm px-6 py-4 text-text-main placeholder:text-text-muted/60 focus:ring-2 focus:ring-brand/50 shadow-inner transition-all outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="project"
                                className="text-sm font-semibold text-text-main ml-1"
                            >
                                Project Type
                            </label>
                            <input
                                id="project"
                                type="text"
                                placeholder="e.g. Web Development, Mobile App"
                                className="w-full rounded-2xl border-none bg-white/70 backdrop-blur-sm px-6 py-4 text-text-main placeholder:text-text-muted/60 focus:ring-2 focus:ring-brand/50 shadow-inner transition-all outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="message"
                                className="text-sm font-semibold text-text-main ml-1"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Tell us a bit about your project..."
                                rows={4}
                                className="w-full rounded-2xl border-none bg-white/70 backdrop-blur-sm px-6 py-4 text-text-main placeholder:text-text-muted/60 focus:ring-2 focus:ring-brand/50 shadow-inner transition-all outline-none resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-brand text-white font-bold rounded-2xl px-8 py-4 hover:bg-brand-blue transition-all duration-300 shadow-lg shadow-brand/20 mt-6 flex items-center justify-center gap-2 group"
                        >
                            Send Message
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                send
                            </span>
                        </button>
                    </form>
                </div>

                {/* Background decoration for CTA */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-linear-to-t from-brand/10 to-transparent pointer-events-none"></div>
            </div>
        </section>
    );
}
