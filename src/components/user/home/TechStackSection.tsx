import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Image from "next/image";

export function TechStackSection() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:h-[1000px] flex flex-col items-center">
            {/* Section Header */}
            <div className="text-center mb-12 relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-bold mb-4">
                    Our Tech Stack
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-4">
                    Modern & Powerful Technology
                </h2>
                <p className="max-w-2xl mx-auto text-text-muted dark:text-gray-400">
                    We use the latest and most advanced technologies to build robust,
                    scalable, and high-performance digital products.
                </p>
            </div>

            {/* Orbit Container */}
            <div className="relative flex h-[650px] md:h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-4xl">
                <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-brand to-brand-blue bg-clip-text text-center text-7xl md:text-[12rem] font-black leading-none text-transparent opacity-10 dark:opacity-20 select-none absolute">
                    SYMBOSYS
                </span>

                {/* Inner Circles */}
                <OrbitingCircles
                    className="size-[40px] border-none bg-transparent"
                    duration={20}
                    delay={20}
                    radius={80}
                    customAngles={[0, 180]}
                >
                    <TechIcon src="/teach/React.webp" label="React" />
                    <TechIcon
                        src="/teach/Next.js.webp"
                        darkSrc="/teach/Next.js-dark.webp"
                        label="Next.js"
                    />
                </OrbitingCircles>

                <OrbitingCircles
                    className="size-[50px] border-none bg-transparent"
                    radius={190}
                    duration={30}
                    reverse
                    customAngles={[45, 135, 225, 315]}
                >
                    <TechIcon src="/teach/Node.js.webp" label="Node.js" />
                    <TechIcon
                        src="/teach/Express.webp"
                        darkSrc="/teach/Express.js-dark.webp"
                        label="Express"
                    />
                    <TechIcon src="/teach/Bun.webp" label="Bun" />
                    <TechIcon
                        src="/teach/prisma-light.svg"
                        darkSrc="/teach/prisma.svg"
                        label="Prisma"
                    />
                </OrbitingCircles>

                {/* Outer Circles */}
                <OrbitingCircles
                    className="size-[60px] border-none bg-transparent"
                    radius={300}
                    duration={40}
                    delay={10}
                    reverse
                    customAngles={[0, 60, 120, 180, 240, 300]}
                >
                    <TechIcon src="/teach/Redis.webp" label="Redis" />
                    <TechIcon src="/teach/Docker.webp" label="Docker" />
                    <TechIcon src="/teach/Kubernetes.webp" label="Kubernetes" />
                    <TechIcon
                        src="/teach/Rust.webp"
                        darkSrc="/teach/Rust-dark.webp"
                        label="Rust"
                    />
                    <TechIcon src="/teach/PostgresSQL.webp" label="PostgreSQL" />
                    <TechIcon src="/teach/MySQL.webp" label="MySQL" />
                </OrbitingCircles>
            </div>
        </section>
    );
}

function TechIcon({
    src,
    darkSrc,
    label,
}: {
    src: string;
    darkSrc?: string;
    label: string;
}) {
    return (
        <div className="flex flex-col items-center gap-2 group">
            <div className="flex items-center justify-center p-0 bg-transparent group-hover:scale-110 transition-all duration-300">
                <Image
                    src={src}
                    alt={label}
                    width={80}
                    height={80}
                    className={`size-full object-contain ${darkSrc ? "dark:hidden" : ""}`}
                />
                {darkSrc && (
                    <Image
                        src={darkSrc}
                        alt={label}
                        width={100}
                        height={100}
                        className="size-full object-contain hidden dark:block scale-[1.7]"
                    />
                )}
            </div>
            <span className="text-[10px] md:text-xs font-bold text-text-muted dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
            </span>
        </div>
    );
}
