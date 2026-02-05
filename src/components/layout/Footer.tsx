export function Footer() {
    return (
        <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-auto mb-10">
            <div className="bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl rounded-t-4xl p-12 md:p-16 border-b-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="size-8 bg-brand rounded-full flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-lg">
                                    all_inclusive
                                </span>
                            </div>
                            <span className="text-lg font-bold text-text-main">Symbosys</span>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Refracting ideas into digital reality. <br />
                            San Francisco, CA.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-text-main mb-4">Explore</h4>
                        <ul className="space-y-2 text-sm text-text-muted">
                            <li>
                                <a className="hover:text-brand transition-colors" href="#">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-brand transition-colors" href="#">
                                    Case Studies
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-brand transition-colors" href="#">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-brand transition-colors" href="#">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-text-main mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-text-muted">
                            <li>
                                <a className="hover:text-brand transition-colors" href="#">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-brand transition-colors" href="#">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-brand transition-colors" href="#">
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-text-main mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a
                                className="size-10 rounded-full bg-white flex items-center justify-center text-text-muted hover:text-white hover:bg-brand transition-all shadow-sm"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-xl">public</span>
                            </a>
                            <a
                                className="size-10 rounded-full bg-white flex items-center justify-center text-text-muted hover:text-white hover:bg-brand transition-all shadow-sm"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-xl">mail</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-text-muted text-center md:text-left">
                        © 2024 Symbosys Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-text-muted">
                        <span>Designed with Refractive Flow</span>
                        <span className="material-symbols-outlined text-sm">
                            water_drop
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}