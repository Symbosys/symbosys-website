export function GetInTouch() {
    const contactMethods = [
        {
            title: "Address",
            value: "Harmu, Ranchi",
            icon: "location_on",
            action: "https://maps.google.com/?q=Harmu,Ranchi",
        },
        {
            title: "Call Us",
            value: "+91 9122010150",
            icon: "call",
            action: "tel:+919122010150",
        },
        {
            title: "Email Us",
            value: "support@symbosys.com",
            icon: "mail",
            action: "mailto:support@symbosys.com",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-bold mb-6">
                    Contact for any query
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-text-main">
                    Get In <span className="text-brand">Touch</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {contactMethods.map((method, index) => (
                    <a
                        key={index}
                        href={method.action}
                        target={method.title === "Address" ? "_blank" : undefined}
                        rel={method.title === "Address" ? "noopener noreferrer" : undefined}
                        className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="size-16 rounded-full bg-brand/5 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-3xl">
                                {method.icon}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main mb-2">
                            {method.title}
                        </h3>
                        <p className="text-text-muted font-medium text-lg group-hover:text-brand transition-colors">
                            {method.value}
                        </p>
                    </a>
                ))}
            </div>

            {/* Google Map */}
            <div className="w-full h-[450px] rounded-3xl overflow-hidden glass-card shadow-lg border border-white/20 mt-12 group">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.16811214141615!2d85.31134976011984!3d23.357395597807912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5d0fb3d9fc771b%3A0x97d1957c5216c0c2!2sSymbosys%20-%20Software%20Company%20in%20Ranchi!5e1!3m2!1sen!2sin!4v1769756556338!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </div>
        </section>
    );
}
