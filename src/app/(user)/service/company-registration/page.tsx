export const metadata = {
    title: "Company Registration & E-Filing - Symbosys Technologies",
    description:
        "Symbosys offers comprehensive company registration and e-filing services including accounting, auditing, GST registration, PF, ESIC, and MSME registration.",
};

export default function CompanyRegistrationPage() {
    return (
        <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden min-h-screen">
            {/* Liquid Light Immersive Background Canvas */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] bg-linear-to-br from-amber-400/15 via-yellow-400/10 to-orange-400/15 rounded-full blur-3xl light-orb" />
                <div className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] bg-linear-to-tl from-orange-400/12 via-amber-400/10 to-yellow-400/15 rounded-full blur-3xl light-orb-slow" />
                <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-linear-to-r from-yellow-400/10 via-transparent to-amber-400/10 rounded-full blur-3xl ripple-light" />
                <div className="absolute inset-0 aurora-bg opacity-30" />
                <div className="absolute inset-0 bg-white/30 backdrop-blur-xs" />
            </div>

            <main className="relative z-10 pt-32 pb-20">
                {/* Hero Section */}
                <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-amber-600 via-yellow-600 to-orange-600 min-h-[400px]">
                        <div className="absolute inset-0 aurora-bg opacity-50" />
                        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-white/20 blur-3xl light-pulse-orb" />
                        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-yellow-300/30 blur-2xl light-orb" />

                        <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center min-h-[400px]">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit mb-6">
                                <span className="material-symbols-outlined text-white">app_registration</span>
                                <span className="text-sm font-semibold text-white uppercase tracking-widest">Company Registration</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-liquid-glow max-w-3xl">
                                Company Registration and E-Filing by Symbosys
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                Symbosys specializes in comprehensive Company Registration and E-filing services, helping businesses streamline their legal and financial processes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="glass-card rounded-3xl p-8 md:p-12 mb-12">
                        <p className="text-lg text-text-muted leading-relaxed">
                            Our services cater to all types of businesses, including startups, small enterprises, and large corporations, ensuring the registration and e-filing process is smooth, accurate, and hassle-free.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-8 text-center">
                            Types of <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-yellow-500 to-orange-500">Registration & E-Filing Services</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: "account_balance",
                                    title: "Accounting & Auditing",
                                    description: "We provide end-to-end accounting and auditing services, ensuring that your business complies with all statutory requirements and financial regulations."
                                },
                                {
                                    icon: "business_center",
                                    title: "Company / Firm Registration",
                                    description: "Whether you need private limited, LLP, one-person, or public limited company registration, we handle everything from company name registration to document filing."
                                },
                                {
                                    icon: "volunteer_activism",
                                    title: "NGO / Trust Registration",
                                    description: "Register your NGO or trust with Symbosys. We specialize in ensuring that your non-profit organization meets all compliance requirements."
                                },
                                {
                                    icon: "receipt_long",
                                    title: "Income Tax E-Filing",
                                    description: "Symbosys offers efficient and accurate e-filing of income tax for individuals and businesses, ensuring timely submissions and minimal errors."
                                },
                                {
                                    icon: "receipt",
                                    title: "GST Registration",
                                    description: "We offer GST registration services for all types of businesses, including online GST registration and GST amendment services."
                                },
                                {
                                    icon: "groups",
                                    title: "PF, ESIC & MSME Registration",
                                    description: "Get your PF, ESIC, and MSME registrations completed effortlessly. We assist in obtaining registrations for employee benefits and small business advantages."
                                },
                                {
                                    icon: "storefront",
                                    title: "Business Sales & Purchase",
                                    description: "We help you navigate the legalities involved in business sales and purchases, ensuring a smooth transfer of ownership with all necessary filings."
                                }
                            ].map((service, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-linear-to-r from-amber-500/20 via-yellow-500/15 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative glass-card rounded-2xl p-6 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl text-white">{service.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-main mb-3">{service.title}</h3>
                                        <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Strategies Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-8 text-center">
                            Our Strategies for <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-yellow-500 to-orange-500">Success</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "Client-centric Solutions", desc: "We provide reliable and affordable solutions to businesses of all sizes, tailoring our services to meet your specific needs." },
                                { title: "Expert Guidance", desc: "Our team of professionals provides in-depth guidance on compliance matters, helping you easily navigate complex regulatory requirements." },
                                { title: "Automation and Technology", desc: "We leverage the latest technology and e-filing tools, making the registration process more efficient, reducing paperwork, and minimizing human errors." },
                                { title: "Transparency and Compliance", desc: "We ensure complete transparency in our services and strictly adhere to legal compliance, keeping your business safe from penalties or legal issues." },
                                { title: "End-to-End Support", desc: "From the initial registration process to ongoing filings, audits, and tax submissions, Symbosys provides continuous support, allowing you to focus on growing your business." }
                            ].map((item, index) => (
                                <div key={index} className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                                            <span className="text-white font-bold text-sm">{index + 1}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-text-main mb-2">{item.title}</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="relative overflow-hidden rounded-3xl mb-16">
                        <div className="absolute inset-0 bg-linear-to-br from-amber-600 via-yellow-600 to-orange-600">
                            <div className="absolute inset-0 aurora-bg opacity-40" />
                            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl light-orb" />
                            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-yellow-300/20 blur-3xl light-orb-slow" />
                        </div>
                        <div className="relative z-10 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center text-liquid-glow">
                                Why Choose Symbosys?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                {[
                                    { text: "Unmatched expertise in company registration in India" },
                                    { text: "Services include Pvt Ltd, startup, and new company registration" },
                                    { text: "Assistance in specific regions including Jharkhand and Patna" },
                                    { text: "Comprehensive e-filing services for GST and other registrations" },
                                    { text: "Expert help with online and MCA company registration" },
                                    { text: "Focus on growing your business while we handle paperwork" }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors flex items-center gap-3">
                                        <span className="material-symbols-outlined text-xl text-white">check_circle</span>
                                        <p className="text-white font-medium">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center glass-card rounded-3xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-4">
                            Get Started Today
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto">
                            If you're looking for company registration in India or need help with online company registration, Symbosys is your go-to partner. Contact us to begin your company registration, GST registration, or other filing services today.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-linear-to-r from-amber-600 via-yellow-600 to-amber-600 text-white font-bold shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300 light-shimmer">
                            Register Your Company
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
