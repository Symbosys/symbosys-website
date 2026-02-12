export function ContactFormSection() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
                {/* Left: Contact Info */}
                <div>
                    <h2 className="text-3xl font-bold text-text-main dark:text-white mb-6">
                        Get In <span className="text-brand">Touch</span>
                    </h2>
                    <p className="text-text-muted dark:text-gray-400 text-lg mb-12 leading-relaxed">
                        Fill out the form and our team will get back to you within 24 hours.
                        We are excited to hear from you.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6 group">
                            <div className="size-14 rounded-2xl bg-brand/5 dark:bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl">
                                    location_on
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-text-main dark:text-white mb-1">
                                    Our Office
                                </h3>
                                <p className="text-text-muted dark:text-gray-400 text-lg">
                                    Harmu, Ranchi, Jharkhand, India
                                </p>
                                <a
                                    href="https://www.google.com/maps/dir//Symbosys+-+Software+Company+in+Ranchi"
                                    target="_blank"
                                    className="text-brand font-semibold text-sm mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    View on Map
                                    <span className="material-symbols-outlined text-sm">
                                        arrow_forward
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="size-14 rounded-2xl bg-brand/5 dark:bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl">call</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-text-main dark:text-white mb-1">Phone</h3>
                                <p className="text-text-muted dark:text-gray-400 text-lg">+91 9122010150</p>
                                <a
                                    href="tel:+919122010150"
                                    className="text-brand font-semibold text-sm mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    Call Now
                                    <span className="material-symbols-outlined text-sm">
                                        arrow_forward
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="size-14 rounded-2xl bg-brand/5 dark:bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl">mail</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-text-main dark:text-white mb-1">Email</h3>
                                <p className="text-text-muted dark:text-gray-400 text-lg">support@symbosys.com</p>
                                <a
                                    href="mailto:support@symbosys.com"
                                    className="text-brand font-semibold text-sm mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    Send Email
                                    <span className="material-symbols-outlined text-sm">
                                        arrow_forward
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="glass-card p-8 rounded-4xl relative overflow-hidden">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-bl-full -z-10"></div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-bold text-text-main dark:text-gray-200 ml-1"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-6 py-4 rounded-xl bg-white/60 dark:bg-gray-800/60 border-none focus:ring-2 focus:ring-brand/50 outline-none transition-all placeholder:text-text-muted/50 dark:placeholder:text-gray-500 text-text-main dark:text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-bold text-text-main dark:text-gray-200 ml-1"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-6 py-4 rounded-xl bg-white/60 dark:bg-gray-800/60 border-none focus:ring-2 focus:ring-brand/50 outline-none transition-all placeholder:text-text-muted/50 dark:placeholder:text-gray-500 text-text-main dark:text-white"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="subject"
                                className="text-sm font-bold text-text-main dark:text-gray-200 ml-1"
                            >
                                Subject
                            </label>
                            <div className="relative">
                                <select
                                    id="subject"
                                    className="w-full px-6 py-4 rounded-xl bg-white/60 dark:bg-gray-800/60 border-none focus:ring-2 focus:ring-brand/50 outline-none transition-all text-text-main dark:text-white cursor-pointer appearance-none"
                                >
                                    <option className="dark:bg-gray-900">General Inquiry</option>
                                    <option className="dark:bg-gray-900">Project Proposal</option>
                                    <option className="dark:bg-gray-900">Careers</option>
                                    <option className="dark:bg-gray-900">Feedback</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted dark:text-gray-400">
                                    expand_more
                                </span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="message"
                                className="text-sm font-bold text-text-main dark:text-gray-200 ml-1"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="How can we help you?"
                                className="w-full px-6 py-4 rounded-xl bg-white/60 dark:bg-gray-800/60 border-none focus:ring-2 focus:ring-brand/50 outline-none transition-all placeholder:text-text-muted/50 dark:placeholder:text-gray-500 text-text-main dark:text-white resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            className="w-full py-4 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/20 hover:bg-brand-blue hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            Send Message
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                send
                            </span>
                        </button>
                    </form>
                </div>
            </div>

            {/* Map */}
            <div className="w-full h-[450px] rounded-3xl overflow-hidden glass-card relative group">
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
