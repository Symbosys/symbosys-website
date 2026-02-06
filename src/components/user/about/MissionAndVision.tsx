import Image from "next/image";

export function MissionAndVision() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            {/* Mission Section */}
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-32">
                {/* Image Left */}
                <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                    <div className="absolute inset-0 bg-brand-blue/5 dark:bg-brand-blue/10 rounded-4xl rotate-3 scale-95 blur-sm"></div>
                    <div className="relative glass-card rounded-4xl p-8 overflow-hidden group">
                        <div className="relative w-full aspect-video">
                            <Image
                                src="/about/mission.webp"
                                alt="Our Mission"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-screen dark:opacity-90"
                            />
                        </div>
                        {/* Decors */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
                {/* Content Right */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold mb-4">
                        Purpose
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6">
                        Our <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-cyan-500">Mission</span>
                    </h2>
                    <div className="space-y-4 text-text-muted dark:text-gray-400 text-lg leading-relaxed">
                        <p>
                            Welcome to Symbosys, where innovation meets expertise in the realm
                            of Information Technology. We're your go-to IT partner, dedicated
                            to delivering top-notch solutions tailored to your business needs.
                        </p>
                        <p>
                            We, here at Symbosys, ensure the sharing of all software knowledge
                            widely and deliver high-quality software solutions in effectively
                            meeting real-life challenges. We aim to become the prime global
                            software solutions provider for education, travel, and e-commerce.
                        </p>
                        <p>
                            Our main focus is on creating tailor-made software applications
                            that fully satisfy the needs of our clients, leaving them the most
                            content and delighted.
                        </p>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Content Left */}
                <div className="w-full lg:w-1/2 order-1">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-bold mb-4">
                        Future
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6">
                        Our <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-purple to-pink-500">Vision</span>
                    </h2>
                    <div className="space-y-4 text-text-muted dark:text-gray-400 text-lg leading-relaxed">
                        <p>
                            Our vision is to provide excellent quality in every touch point of
                            the client’s relationship, from the first interaction to continued
                            product maintenance and support.
                        </p>
                        <p>
                            With a strong team made up of very technical experts with years of
                            leading experience in the industry, we resolve to continue
                            understanding the needs of our clients and exceeding their
                            expectations all the time. What makes us different is our strong
                            commitment to not just deliver world-class software solutions but
                            also to build true, long-term partnerships with our clients.
                        </p>
                        <p>
                            The ultimate objective for our company is to be recognized not
                            only for its services but also for relationships in excellence.
                        </p>
                    </div>
                </div>
                {/* Image Right */}
                <div className="w-full lg:w-1/2 relative order-2">
                    <div className="absolute inset-0 bg-brand-purple/5 dark:bg-brand-purple/10 rounded-4xl -rotate-3 scale-95 blur-sm"></div>
                    <div className="relative glass-card rounded-4xl p-8 overflow-hidden group">
                        <div className="relative w-full aspect-video">
                            <Image
                                src="/about/vision.webp"
                                alt="Our Vision"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-screen dark:opacity-90"
                            />
                        </div>
                        {/* Decors */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-purple/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
