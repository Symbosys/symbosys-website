"use client"

import { motion } from "framer-motion"

export function CompanyBrochure() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="glass-panel rounded-4xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
            >
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand/10 dark:bg-brand/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10"></div>
                
                <div className="relative z-10 md:w-2/3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold mb-4 uppercase tracking-wider">
                        <span className="material-symbols-outlined text-sm">description</span>
                        Corporate Resources
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight">
                        Download Our <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-purple to-brand-blue">
                            Company Brochure
                        </span>
                    </h2>
                    <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed max-w-xl">
                        Explore our comprehensive range of services, methodologies, and success stories. 
                        Get a detailed look at how Symbosys can transform your digital vision into a reality.
                    </p>
                </div>

                <div className="relative z-10 shrink-0">
                    <a 
                        href="/symbosys.pdf" 
                        download="Symbosys_Brochure.pdf"
                        className="group flex items-center gap-4 bg-brand text-white font-bold px-10 py-5 rounded-2xl hover:bg-brand-blue transition-all duration-300 shadow-2xl shadow-brand/20 active:scale-95 text-lg"
                    >
                        <span className="material-symbols-outlined text-2xl group-hover:bounce transition-transform">
                            download
                        </span>
                        <span>Download PDF</span>
                        <div className="size-8 rounded-lg bg-white/20 flex items-center justify-center ml-2">
                             <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                        </div>
                    </a>
                    <p className="text-center mt-4 text-xs text-text-muted dark:text-gray-500 font-medium">
                        PDF Format • 19.1 MB
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
