import Image from "next/image";

export function MissionAndVision() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            {/* Mission Section */}
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-32">
                {/* Image Left */}
                <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                    <div className="absolute inset-0 bg-brand-blue/5 dark:bg-brand-blue/10 rounded-4xl rotate-3 scale-95 blur-sm"></div>
                    <div className="relative glass-card rounded-4xl overflow-hidden group border border-white/10 shadow-2xl">
                        <div className="relative w-full aspect-video">
                            <Image
                                src="/about/mission.jpg"
                                alt="Our Mission"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        {/* Decors */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
                {/* Content Right */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold mb-4 uppercase tracking-wider">
                        Strategic Intent
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6">
                        Our <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-cyan-500">Mission</span>
                    </h2>
                    <div className="space-y-4 text-text-muted dark:text-gray-400 text-lg leading-relaxed">
                        <p>
                            At Symbosys, we harmonize innovation with technical mastery to serve as your ultimate IT ally. Our goal is to provide sophisticated, custom-fit solutions that solve complex business challenges with elegant efficiency.
                        </p>
                        <p>
                            We are dedicated to democratizing software expertise, delivering premier solutions that empower the education, travel, and e-commerce sectors on a global scale. Our mission is to be the benchmark for excellence in every industry we touch.
                        </p>
                        <p>
                            Our core focus remains unwavering: crafting personalized applications that exceed expectations, ensuring our clients achieve unparalleled success and satisfaction.
                        </p>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Content Left */}
                <div className="w-full lg:w-1/2 order-1">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold mb-4 uppercase tracking-wider">
                        Global Vision
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6">
                        Our <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-purple to-pink-500">Vision</span>
                    </h2>
                    <div className="space-y-4 text-text-muted dark:text-gray-400 text-lg leading-relaxed">
                        <p>
                            Our vision is to define excellence at every touchpoint of our client engagement. From the initial strategy to persistent technical maintenance and support, we strive to be the cornerstone of your digital journey.
                        </p>
                        <p>
                            Driven by a team of elite technical veterans, we are committed to anticipating evolving market needs and consistently surpassing expectations. We distinguish ourselves by not only delivering world-class software but by cultivating enduring partnerships built on technical superiority.
                        </p>
                        <p>
                            At our core, we aim to be recognized not just for the caliber of our services, but for the integrity and excellence of the relationships we nurture.
                        </p>
                    </div>
                </div>
                {/* Image Right */}
                <div className="w-full lg:w-1/2 relative order-2">
                    <div className="absolute inset-0 bg-brand-purple/5 dark:bg-brand-purple/10 rounded-4xl -rotate-3 scale-95 blur-sm"></div>
                    <div className="relative glass-card rounded-4xl overflow-hidden group border border-white/10 shadow-2xl">
                        <div className="relative w-full aspect-video">
                            <Image
                                src="/about/vision.webp"
                                alt="Our Vision"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
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
