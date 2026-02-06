import Image from "next/image";

export function SymbosysTechnologies() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Image */}
                <div className="relative order-2 lg:order-1">
                    <div className="absolute inset-0 bg-brand/5 dark:bg-brand/10 rounded-4xl rotate-3 scale-95 blur-sm"></div>
                    <div className="relative glass-card rounded-4xl p-8 overflow-hidden group">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <Image
                                src="/home/Symbosys_Technologies.webp"
                                alt="Symbosys Technologies - IT Solutions"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-screen dark:opacity-90"
                                priority
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl"></div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="order-1 lg:order-2">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6">
                        <span className="material-symbols-outlined text-brand text-sm">
                            verified
                        </span>
                        <span className="text-xs font-bold text-brand">
                            ISO 9001:2015 Certified
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-4 leading-tight">
                        Symbosys Technologies
                    </h2>

                    <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-brand to-brand-blue mb-6">
                        THE BEST SOFTWARE COMPANY IN Jharkhand
                    </p>

                    <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed mb-8">
                        Introducing Symbosys Technologies Pvt. Ltd. – the beacon of
                        innovation in Ranchi&apos;s dynamic IT landscape. As an ISO
                        powerhouse, we design custom software, develop captivating
                        e-commerce platforms, and create seamless mobile applications. A
                        decade&apos;s worth of expertise pushes us further than others do by
                        merging cutting-edge technology with limitless creativity. Come and
                        be part of an odyssey where excellence knows no bounds. Welcome to
                        SYMBOSYS — where dreams take a digital form.
                    </p>

                    <button className="group h-14 px-8 rounded-full bg-brand text-white font-bold text-lg shadow-xl shadow-brand/30 hover:shadow-2xl hover:shadow-brand/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                        Read More
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
