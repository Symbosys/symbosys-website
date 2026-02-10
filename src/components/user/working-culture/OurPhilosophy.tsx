export function OurPhilosophy() {
  const philosophies = [
    {
      label: "People First",
      value:
        "We put humans at the heart of everything we build — from our team relationships to the software we craft for clients.",
      icon: "volunteer_activism",
    },
    {
      label: "Quality Over Speed",
      value:
        "We take pride in delivering polished, robust solutions. Excellence is not an act, it is a habit embedded in our DNA.",
      icon: "diamond",
    },
    {
      label: "Grow Together",
      value:
        "Individual success fuels collective progress. When one of us learns, all of us grow. That is the Symbosys way.",
      icon: "forest",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: Visual Element */}
      <div className="relative">
        {/* Decorative glass container */}
        <div className="relative glass-card rounded-[2rem] p-10 lg:p-14 overflow-hidden">
          {/* Inner liquid lights */}
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-brand/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-brand-purple/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl"></div>

          {/* Philosophy essence */}
          <div className="relative z-10 text-center space-y-8">
            {/* Central icon mandala */}
            <div className="mx-auto size-24 rounded-3xl bg-linear-to-br from-brand/15 to-brand-purple/10 dark:from-brand/25 dark:to-brand-purple/15 flex items-center justify-center shadow-lg shadow-brand/5">
              <span className="material-symbols-outlined text-brand text-5xl">
                water_drop
              </span>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white mb-4">
                The Symbosys{" "}
                <span className="bg-linear-to-r from-brand to-brand-purple bg-clip-text text-transparent">
                  Spirit
                </span>
              </h3>
              <p className="text-text-muted dark:text-gray-400 leading-relaxed max-w-md mx-auto">
                Like liquid light, our culture flows through every interaction,
                every line of code, and every relationship we nurture —
                luminous, adaptable, and always moving forward.
              </p>
            </div>

            {/* Floating metric pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {["Empathy", "Agility", "Integrity", "Passion"].map(
                (trait, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-brand/5 dark:bg-brand/10 border border-brand/10 dark:border-brand/20 text-sm font-medium text-brand hover:bg-brand hover:text-white transition-all duration-300 cursor-default"
                  >
                    {trait}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Background tilt decoration */}
        <div className="absolute inset-0 bg-brand/3 dark:bg-brand/6 rounded-[2rem] -rotate-2 scale-95 -z-10 blur-sm"></div>
      </div>

      {/* Right: Philosophy Items */}
      <div className="space-y-6">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6">
            <span className="material-symbols-outlined text-brand text-sm">
              local_fire_department
            </span>
            <span className="text-xs font-bold text-brand uppercase tracking-wider">
              Our Philosophy
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-4 leading-tight">
            What{" "}
            <span className="bg-linear-to-r from-brand to-brand-purple bg-clip-text text-transparent">
              Drives Us
            </span>
          </h2>
          <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
            Three principles that define every decision we make and every
            product we deliver.
          </p>
        </div>

        {philosophies.map((philosophy, index) => (
          <div
            key={index}
            className="glass-panel p-7 rounded-2xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5 relative overflow-hidden"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-brand/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative z-10 flex items-start gap-5">
              <div className="shrink-0 size-12 rounded-xl bg-linear-to-br from-brand/10 to-brand-purple/5 dark:from-brand/15 dark:to-brand-purple/10 flex items-center justify-center group-hover:from-brand group-hover:to-brand-purple transition-all duration-500 shadow-sm">
                <span className="material-symbols-outlined text-brand group-hover:text-white transition-colors duration-500 text-2xl">
                  {philosophy.icon}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-main dark:text-white mb-2 group-hover:text-brand transition-colors duration-300">
                  {philosophy.label}
                </h3>
                <p className="text-text-muted dark:text-gray-400 leading-relaxed text-[15px]">
                  {philosophy.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
