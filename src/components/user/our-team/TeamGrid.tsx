interface TeamMember {
    name: string;
    role: string;
    department: string;
    initials: string;
    gradient: string;
}

function MemberCard({ member }: { member: TeamMember }) {
    return (
        <div className="relative glass-card rounded-2xl p-6 group hover:-translate-y-2 transition-all duration-500 overflow-hidden text-center">
            {/* Hover glow */}
            <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-brand/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Avatar */}
            <div className={`relative mx-auto size-20 rounded-2xl bg-gradient-to-br ${member.gradient} p-[2px] mb-5 shadow-lg shadow-brand/5 group-hover:shadow-xl group-hover:shadow-brand/15 group-hover:scale-105 transition-all duration-500`}>
                <div className="w-full h-full rounded-[calc(1rem-2px)] bg-white dark:bg-gray-900 flex items-center justify-center">
                    <span className={`text-2xl font-bold bg-gradient-to-br ${member.gradient} bg-clip-text text-transparent select-none`}>
                        {member.initials}
                    </span>
                </div>
            </div>

            {/* Info */}
            <h3 className="text-base font-bold text-text-main dark:text-white mb-1 group-hover:text-brand transition-colors duration-300 truncate">
                {member.name}
            </h3>
            <p className="text-sm text-brand font-semibold mb-1.5">{member.role}</p>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand/5 dark:bg-brand/10 text-[11px] font-medium text-text-muted dark:text-gray-400">
                {member.department}
            </span>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-brand/0 to-transparent group-hover:via-brand/30 transition-all duration-700"></div>
        </div>
    );
}

export function TeamGrid() {
    const departments = [
        {
            name: "Engineering",
            icon: "terminal",
            members: [
                { name: "Rahul Verma", role: "Sr. Full-Stack Developer", department: "Engineering", initials: "RV", gradient: "from-brand to-brand-purple" },
                { name: "Priya Tiwari", role: "Frontend Developer", department: "Engineering", initials: "PT", gradient: "from-brand-purple to-brand-blue" },
                { name: "Ankit Sharma", role: "Backend Developer", department: "Engineering", initials: "AS", gradient: "from-brand-blue to-brand" },
                { name: "Deepak Kumar", role: "Mobile App Developer", department: "Engineering", initials: "DK", gradient: "from-brand to-brand-blue" },
                { name: "Sneha Gupta", role: "Software Engineer", department: "Engineering", initials: "SG", gradient: "from-brand-purple to-brand" },
                { name: "Vikash Pandey", role: "DevOps Engineer", department: "Engineering", initials: "VP", gradient: "from-brand-blue to-brand-purple" },
            ],
        },
        {
            name: "Design",
            icon: "palette",
            members: [
                { name: "Priya Kumari", role: "Lead UI/UX Designer", department: "Design", initials: "PK", gradient: "from-brand-purple to-brand" },
                { name: "Aman Singh", role: "Graphic Designer", department: "Design", initials: "AS", gradient: "from-brand to-brand-blue" },
            ],
        },
        {
            name: "Marketing",
            icon: "campaign",
            members: [
                { name: "Ravi Kumar", role: "Digital Marketing Lead", department: "Marketing", initials: "RK", gradient: "from-brand-blue to-brand" },
                { name: "Sanya Mishra", role: "SEO Specialist", department: "Marketing", initials: "SM", gradient: "from-brand to-brand-purple" },
                { name: "Nikhil Das", role: "Content Strategist", department: "Marketing", initials: "ND", gradient: "from-brand-purple to-brand-blue" },
            ],
        },
        {
            name: "Human Resources",
            icon: "groups",
            members: [
                { name: "Neha Srivastava", role: "HR Manager", department: "Human Resources", initials: "NS", gradient: "from-brand to-brand-purple" },
                { name: "Pooja Kumari", role: "HR Executive", department: "Human Resources", initials: "PK", gradient: "from-brand-purple to-brand-blue" },
            ],
        },
        {
            name: "Business",
            icon: "business_center",
            members: [
                { name: "Ajay Mehta", role: "Business Development", department: "Business", initials: "AM", gradient: "from-brand-blue to-brand" },
                { name: "Ritika Singh", role: "Client Relations", department: "Business", initials: "RS", gradient: "from-brand to-brand-blue" },
                { name: "Saurabh Ranjan", role: "Project Manager", department: "Business", initials: "SR", gradient: "from-brand-purple to-brand" },
            ],
        },
        {
            name: "Quality Assurance",
            icon: "verified",
            members: [
                { name: "Manisha Kumari", role: "QA Lead", department: "Quality Assurance", initials: "MK", gradient: "from-brand to-brand-purple" },
                { name: "Rohit Sahu", role: "QA Engineer", department: "Quality Assurance", initials: "RS", gradient: "from-brand-blue to-brand-purple" },
            ],
        },
    ];

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-br from-brand/3 via-brand-purple/2 to-brand-blue/3 blur-3xl pointer-events-none"></div>

            {/* Section Header */}
            <div className="relative text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-6">
                    <span className="material-symbols-outlined text-brand-purple text-sm">
                        diversity_3
                    </span>
                    <span className="text-xs font-bold text-brand-purple uppercase tracking-wider">
                        Our Team
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight">
                    The People Who{" "}
                    <span className="bg-gradient-to-r from-brand-purple via-brand to-brand-blue bg-clip-text text-transparent">
                        Make It Happen
                    </span>
                </h2>
                <p className="text-text-muted dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Every department, every role — united by a shared commitment to delivering excellence.
                </p>
            </div>

            {/* Departments */}
            <div className="relative space-y-20">
                {departments.map((dept, deptIndex) => (
                    <div key={deptIndex}>
                        {/* Department Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="size-12 rounded-xl bg-gradient-to-br from-brand/10 to-brand-purple/5 dark:from-brand/15 dark:to-brand-purple/10 flex items-center justify-center shadow-sm">
                                <span className="material-symbols-outlined text-brand text-2xl">
                                    {dept.icon}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-text-main dark:text-white">
                                    {dept.name}
                                </h3>
                                <p className="text-xs text-text-muted dark:text-gray-500 font-medium">
                                    {dept.members.length} team member{dept.members.length > 1 ? "s" : ""}
                                </p>
                            </div>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-brand/10 to-transparent ml-4"></div>
                        </div>

                        {/* Members Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                            {dept.members.map((member, memberIndex) => (
                                <MemberCard key={memberIndex} member={member} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
