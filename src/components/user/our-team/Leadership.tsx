import Image from "next/image";

interface LeaderCardProps {
    name: string;
    role: string;
    title: string;
    bio: string;
    initials: string;
    gradient: string;
    icon: string;
    imageSrc?: string;
    achievements: string[];
}

function LeaderCard({ name, role, title, bio, initials, gradient, icon, imageSrc, achievements }: LeaderCardProps) {
    return (
        <div className="relative glass-card rounded-[2rem] p-8 lg:p-10 group hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            {/* Liquid light hover effects */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-brand/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-brand-purple/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar */}
                <div className="shrink-0">
                    <div className={`relative size-36 lg:size-44 rounded-3xl bg-linear-to-br ${gradient} p-[3px] shadow-xl shadow-brand/10 group-hover:shadow-2xl group-hover:shadow-brand/20 transition-all duration-500`}>
                        <div className="w-full h-full rounded-[calc(1.5rem-3px)] bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                            {imageSrc ? (
                                <Image
                                    src={imageSrc}
                                    alt={name}
                                    fill
                                    className="object-cover rounded-[calc(1.5rem-3px)]"
                                />
                            ) : (
                                <span className={`text-5xl lg:text-6xl font-bold bg-linear-to-br ${gradient} bg-clip-text text-transparent select-none`}>
                                    {initials}
                                </span>
                            )}
                        </div>
                        {/* Role badge */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-linear-to-r from-brand to-brand-purple text-white text-xs font-bold shadow-lg shadow-brand/20 whitespace-nowrap">
                            {title}
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                        <span className="material-symbols-outlined text-brand text-xl">{icon}</span>
                        <span className="text-xs font-semibold text-brand uppercase tracking-widest">{role}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-text-main dark:text-white mb-4 group-hover:text-brand transition-colors duration-300">
                        {name}
                    </h3>
                    <p className="text-text-muted dark:text-gray-400 leading-relaxed mb-6 text-[15px]">
                        {bio}
                    </p>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {achievements.map((achievement, i) => (
                            <span
                                key={i}
                                className="px-3 py-1.5 rounded-full bg-brand/5 dark:bg-brand/10 border border-brand/10 dark:border-brand/20 text-xs font-medium text-brand hover:bg-brand hover:text-white transition-all duration-300 cursor-default"
                            >
                                {achievement}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-10 right-10 h-[2px] bg-linear-to-r from-transparent via-brand/0 to-transparent group-hover:via-brand/30 transition-all duration-700"></div>
        </div>
    );
}

export function Leadership() {
    const leaders = [
        {
            name: "Sudhanshu Kumar",
            role: "Founder & CEO",
            title: "Founder & CEO",
            bio: "Visionary leader and the driving force behind Symbosys. With a deep passion for technology and innovation, Sudhanshu founded Symbosys with the mission to deliver world-class IT solutions from Ranchi to the world. His leadership has grown the company to serve 500+ clients across India, building a culture of excellence and trust.",
            initials: "SK",
            gradient: "from-brand via-brand-purple to-brand-blue",
            icon: "star",
            achievements: ["Visionary Leader", "500+ Clients", "Tech Pioneer", "Industry Expert"],
        },
        {
            name: "Abhishek Singh",
            role: "Co-Founder & CTO",
            title: "Co-Founder & CTO",
            bio: "The technical mastermind behind Symbosys's engineering excellence. Abhishek leads the technology strategy and ensures every product built meets the highest standards of performance, scalability, and innovation. His expertise in modern tech stacks drives the company's competitive edge.",
            initials: "AS",
            gradient: "from-brand-purple via-brand to-brand-blue",
            icon: "code",
            achievements: ["Tech Architect", "AI & Cloud", "Full-Stack Expert", "Open Source"],
        },
    ];

    return (
        <div className="grid gap-8">
            {leaders.map((leader, index) => (
                <LeaderCard key={index} {...leader} />
            ))}
        </div>
    );
}
