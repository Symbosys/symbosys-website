import Image from "next/image";

export function AboutIntro() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 pt-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="order-2 lg:order-1">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6">
                <span className="material-symbols-outlined text-brand text-sm">
                    info
                </span>
                <span className="text-xs font-bold text-brand">
                    Who We Are
                </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-text-main mb-6 leading-tight">
                About <span className="text-brand">Symbosys</span> <br/>
                Software Services Pvt. Ltd.
            </h1>
            <div className="space-y-4 text-text-muted text-lg leading-relaxed">
                <p>
                    Symbosys Software Service Pvt. Ltd. is one of the fastest-growing IT companies in Ranchi serving 500+ clients throughout Jharkhand and other parts of India. We have a team of highly skilled and dedicated designers and developers who have years of experience and having the capabilities to accomplish projects within a specified deadline.
                </p>
                <p>
                    In order to understand customer’s requirements from their niche point of view, we personally let our developers interact directly with our clients and allow them to take their own decision making approach. Being a leading software company in Ranchi, we believe in providing quality service to our clients as we know the value of trust and expectation they have on us.
                </p>
                <p>
                    Nowadays, even small businessmen have started accepting the power of digital innovations that vastly changing the way of running business. Software, mobile app, and websites are the mediums through which they can be a racer of their competitive tracks. We specialized in designing and developing highly responsive and interactive software, mobile apps, and websites that are responsible for refining business processes and help to reach the goals effectively.
                </p>
            </div>
        </div>

        {/* Image */}
         <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-brand/5 rounded-4xl -rotate-3 scale-95 blur-sm"></div>
            <div className="relative glass-card rounded-4xl p-8 overflow-hidden group">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                    <Image
                        src="/about/aboutnew.webp"
                        alt="About Symbosys Team"
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                        priority
                    />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl"></div>
            </div>
        </div>
      </div>
    </section>
  );
}
