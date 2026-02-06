export const metadata = {
    title: "Software Development - Symbosys Technologies",
    description:
        "Symbosys is a leading software development company delivering high-quality ERP systems, custom software, and enterprise solutions across industries.",
};

export default function SoftwareDevelopmentPage() {
    return (
        <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden min-h-screen dark:text-white transition-colors duration-300">
            {/* Liquid Light Immersive Background Canvas */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] bg-linear-to-br from-emerald-400/15 via-teal-400/10 to-cyan-400/15 rounded-full blur-3xl light-orb" />
                <div className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] bg-linear-to-tl from-cyan-400/12 via-emerald-400/10 to-teal-400/15 rounded-full blur-3xl light-orb-slow" />
                <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-linear-to-r from-teal-400/10 via-transparent to-emerald-400/10 rounded-full blur-3xl ripple-light" />
                <div className="absolute inset-0 aurora-bg opacity-30" />
                <div className="absolute inset-0 bg-white/30 dark:bg-black/60 backdrop-blur-xl" />
            </div>

            <main className="relative z-10 pt-32 pb-20">
                {/* Hero Section */}
                <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600 min-h-[400px]">
                        <div className="absolute inset-0 aurora-bg opacity-50" />
                        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-white/20 blur-3xl light-pulse-orb" />
                        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-cyan-300/30 blur-2xl light-orb" />

                        <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center min-h-[400px]">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit mb-6">
                                <span className="material-symbols-outlined text-white">terminal</span>
                                <span className="text-sm font-semibold text-white uppercase tracking-widest">Software Development</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-liquid-glow max-w-3xl">
                                Software Development by Symbosys
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                At Symbosys, we are a leading software development company committed to delivering high-quality software development services that cater to the diverse needs of businesses across industries.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="glass-card rounded-3xl p-8 md:p-12 mb-12">
                        <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                            With a team of skilled software developers and engineers, we offer end-to-end solutions that include custom software design, development, and maintenance. We aim to help businesses streamline operations, improve efficiency, and achieve their objectives with tailored software solutions.
                        </p>
                    </div>

                    {/* ERP Systems Grid */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Types of <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500">ERP System Software</span> We Develop
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: "precision_manufacturing",
                                    title: "Manufacturing ERP",
                                    description: "Our manufacturing ERP software is designed to optimize production processes, manage inventory, and improve supply chain efficiency. It integrates all aspects of manufacturing."
                                },
                                {
                                    icon: "construction",
                                    title: "Construction ERP",
                                    description: "We offer construction ERP software that helps construction companies manage their projects, resources, and finances more effectively with seamless project management."
                                },
                                {
                                    icon: "school",
                                    title: "School ERP",
                                    description: "Our school ERP software solutions are tailored to help educational institutions manage their operations efficiently, from enrollment to academic performance monitoring."
                                },
                                {
                                    icon: "local_hospital",
                                    title: "Healthcare ERP",
                                    description: "We specialize in developing ERP systems for hospitals and healthcare providers, integrating patient management, billing, inventory, and HR processes."
                                },
                                {
                                    icon: "menu_book",
                                    title: "Education ERP",
                                    description: "We develop education ERP software for colleges and universities, offering a comprehensive solution for managing admissions, academic records, faculty, and finance."
                                }
                            ].map((erp, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-linear-to-r from-emerald-500/20 via-teal-500/15 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative glass-card rounded-2xl p-6 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl text-white">{erp.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-main mb-3 dark:text-white">{erp.title}</h3>
                                        <p className="text-text-muted text-sm leading-relaxed dark:text-gray-300">{erp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Strategies Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Strategies <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500">We Follow</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "Custom Software Development", desc: "At Symbosys, we understand that every business has unique requirements. As a custom software development company, we work closely with our clients to develop software solutions tailored to their specific needs." },
                                { title: "Agile Development Process", desc: "Our software development process models follow agile methodologies, ensuring flexibility, transparency, and faster delivery. We collaborate with clients throughout the development cycle." },
                                { title: "Use of Latest Technologies", desc: "We stay at the forefront of technological advancements. From AI and machine learning to cloud computing and blockchain, we leverage the latest software development technology." },
                                { title: "Scalable Solutions", desc: "Our software solutions are designed to grow with your business. We build scalable systems that can handle increasing data loads and user demands." },
                                { title: "User-Centric Design", desc: "We focus on creating software that is intuitive and easy to use. Our team of developers and designers works together to ensure that the software interface is user-friendly." },
                                { title: "AI and Fintech Development", desc: "Symbosys is at the forefront of developing AI-driven and fintech software solutions. We create software that enhances financial services with automation, security, and data-driven insights." }
                            ].map((item, index) => (
                                <div key={index} className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0">
                                            <span className="text-white font-bold text-sm">{index + 1}</span>
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

                    {/* Why Choose Us */}
                    <div className="relative overflow-hidden rounded-3xl mb-16">
                        <div className="absolute inset-0 bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600">
                            <div className="absolute inset-0 aurora-bg opacity-40" />
                            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl light-orb" />
                            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-cyan-300/20 blur-3xl light-orb-slow" />
                        </div>
                        <div className="relative z-10 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center text-liquid-glow">
                                Why Choose Symbosys?
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { icon: "emoji_events", title: "Top Company in India", desc: "We are recognized among the top software development companies in India for our commitment to quality and innovation." },
                                    { icon: "engineering", title: "Well-Known Developers", desc: "Our team comprises well-known software developers who bring experience and expertise to every project." },
                                    { icon: "location_on", title: "Best in Jharkhand", desc: "We take pride in being the best software development company in Jharkhand, offering world-class services." },
                                    { icon: "work", title: "Career Opportunities", desc: "We provide opportunities for budding developers, offering software developer internships and junior roles." }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                                        <span className="material-symbols-outlined text-3xl text-white mb-4 block">{item.icon}</span>
                                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-white/80 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center glass-card rounded-3xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white mb-4">
                            Ready to Build Your Software Solution?
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto dark:text-gray-300">
                            With a focus on innovation and excellence, Symbosys stands out as a leading name in software development in India. Contact us today to discuss your project.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white font-bold shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-teal-500/40 hover:scale-105 transition-all duration-300 light-shimmer">
                            Start Your Project
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
