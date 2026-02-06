import Image from "next/image";

export const metadata = {
    title: "Mobile App Development - Symbosys Technologies",
    description:
        "Symbosys offers mobile app development services for both Android and iOS platforms. We create high-performing, interactive, and user-friendly mobile apps.",
};

export default function MobileAppDevelopmentPage() {
    return (
        <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden min-h-screen dark:text-white transition-colors duration-300">
            {/* Liquid Light Immersive Background Canvas */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] bg-linear-to-br from-cyan-400/15 via-blue-400/10 to-violet-400/15 rounded-full blur-3xl light-orb" />
                <div className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] bg-linear-to-tl from-violet-400/12 via-cyan-400/10 to-blue-400/15 rounded-full blur-3xl light-orb-slow" />
                <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-linear-to-r from-blue-400/10 via-transparent to-cyan-400/10 rounded-full blur-3xl ripple-light" />
                <div className="absolute inset-0 aurora-bg opacity-30" />
                <div className="absolute inset-0 bg-white/30 dark:bg-black/60 backdrop-blur-xl" />
            </div>

            <main className="relative z-10 pt-32 pb-20">
                {/* Hero Section with Background Image */}
                <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="relative overflow-hidden rounded-3xl min-h-[400px]">
                        {/* Background Image */}
                        <Image
                            src="/services/mobilebc.webp"
                            alt="Mobile App Development"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-cyan-900/90 via-blue-900/80 to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center min-h-[400px]">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit mb-6">
                                <span className="material-symbols-outlined text-white">phone_iphone</span>
                                <span className="text-sm font-semibold text-white uppercase tracking-widest">Mobile Development</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-liquid-glow max-w-3xl">
                                Mobile App Development for Android & iOS
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                Symbosys is one of the leading app development companies offering mobile app development services for both Android and iOS platforms.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="glass-card rounded-3xl p-8 md:p-12 mb-12">
                        <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed mb-4">
                            Our Mobile App Development Services have helped clients in reaching their business objectives and also helped many businesses to kick start their journey.
                        </p>
                        <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                            Mobile apps are designed and developed by highly skilled professionals with years of experience in making custom apps for different enterprises. We offer high performing interactive and user-friendly mobile apps that can meet the utility ranging from productivity, business mCommerce to gaming, leisure, and social apps.
                        </p>
                    </div>

                    {/* Why Mobile App Development */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Why Mobile App Development is <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-blue-500 to-violet-500">Prominent for Business</span>
                        </h2>
                        <div className="glass-card rounded-3xl p-8 md:p-12">
                            <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
                                Mobile devices such as smartphones and tablets are replacing personal computers in terms of usage and search query. No matter what your business is, mobile has now become the real face of customer engagement.
                            </p>
                            <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
                                Around 80 percent of mobile users use apps more often they access the internet as they are easy and reliable to explore and navigate. This clearly defines that owners who use only traditional website marketing approach are missing out on a large number of potential customers aside.
                            </p>
                            <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                                To stay on track of this highly competitive race, businesses needed to be shifted in mobile platforms i.e. designing an impactful mobile app to increase customer flows. Symbosys offers app development services for all business types.
                            </p>
                        </div>
                    </div>

                    {/* Android Development Focus Areas */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Our Android Application <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-blue-500 to-violet-500">Development Focus Areas</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: "build", title: "Custom Android Application Development" },
                                { icon: "sports_esports", title: "Android Gaming Application Development" },
                                { icon: "movie", title: "Android Multimedia Application Development" },
                                { icon: "business", title: "Android Enterprise Application Development" },
                                { icon: "sync", title: "Android Application Maintenance and Upgrade" },
                                { icon: "verified", title: "Android Application Testing" }
                            ].map((item, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-linear-to-r from-cyan-500/20 via-blue-500/15 to-violet-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative glass-card rounded-2xl p-6 flex items-center gap-4 h-full hover:-translate-y-1 transition-transform duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-xl text-white">{item.icon}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-text-main dark:text-white">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Features We Provide in Our <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-blue-500 to-violet-500">App Development Services</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: "devices", title: "Responsive Design", desc: "We design apps that are highly responsive and easy to navigate. Our App designs are highly appreciated by our clients." },
                                { icon: "cloud", title: "Cloud-based App", desc: "In order to ensure that the app is taking minimum usage of data in local storage of phones, we design and develop cloud-based mobile apps." },
                                { icon: "settings_remote", title: "Internet of Things (IoT)", desc: "We implement IoT technology in mobile apps to make it eligible to control electric appliances and other devices remotely." },
                                { icon: "share", title: "Social Media Integration", desc: "We integrate your business's social media sites in the phone app to provide more exposure to your business over social media sites." },
                                { icon: "payments", title: "Payment Gateway", desc: "We integrate payment gateway in e-commerce apps to give your customers the convenience to perform secure and fast cashless transactions." }
                            ].map((item, index) => (
                                <div key={index} className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-xl text-white">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-text-main mb-2 dark:text-white">{item.title}</h3>
                                            <p className="text-text-muted text-sm leading-relaxed dark:text-gray-300">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="relative overflow-hidden rounded-3xl mb-16">
                        <div className="absolute inset-0 bg-linear-to-br from-cyan-600 via-blue-600 to-violet-600">
                            <div className="absolute inset-0 aurora-bg opacity-40" />
                            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl light-orb" />
                            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-cyan-300/20 blur-3xl light-orb-slow" />
                        </div>
                        <div className="relative z-10 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center text-liquid-glow">
                                Key Benefits of Our Mobile App Development Services
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { icon: "savings", text: "Save money and time without compromising the quality" },
                                    { icon: "star", text: "Premium apps with all features that meets your requirement" },
                                    { icon: "support_agent", text: "Instant Technical support for solving any issue or query" },
                                    { icon: "update", text: "Regular updates for rich user experience" },
                                    { icon: "groups", text: "Face-to-Face meeting with developers for comprehending requirements" }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors flex items-center gap-4">
                                        <span className="material-symbols-outlined text-2xl text-white">{item.icon}</span>
                                        <p className="text-white font-medium">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center glass-card rounded-3xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white mb-4">
                            Ready to Build Your Mobile App?
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto dark:text-gray-300">
                            Not only do we offer customized mobile app development services for every kind of business across various mobile platforms, but also provide complete support and maintenance solutions to ensure your app remains up to date.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-linear-to-r from-cyan-600 via-blue-600 to-cyan-600 text-white font-bold shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 light-shimmer">
                            Start Your App Project
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
