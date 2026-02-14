import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: 1,
        number: "01",
        title: "DevPulse - Tech Blog",
        category: "Full Stack Development",
        description: "A modern, feature-rich blogging platform designed for developers. It features markdown support, syntax highlighting, user authentication, and a dynamic comment system. Built to provide a seamless reading and writing experience.",
        technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
        image: "https://via.placeholder.com/800x500?text=DevPulse+Preview",
        liveSite: "#",
        sourceCode: "#",
    },
    {
        id: 2,
        number: "02",
        title: "Edison - Learning Platform",
        category: "EdTech Solution",
        description: "An interactive online learning management system connecting students with expert mentors. Features include live video classes, course progress tracking, and real-time chat functionality.",
        technologies: ["React", "Redux", "Firebase", "WebRTC", "Stripe"],
        image: "https://via.placeholder.com/800x500?text=Edison+Preview",
        liveSite: "#",
        sourceCode: "#",
    },
    {
        id: 3,
        number: "03",
        title: "Alanzo - Catering Service",
        category: "E-commerce",
        description: "A premium catering booking application with a sophisticated menu customization interface. Users can plan events, select menus, and manage bookings effortlessly with a clean, elegant UI.",
        technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Framer Motion"],
        image: "https://via.placeholder.com/800x500?text=Alanzo+Preview",
        liveSite: "#",
        sourceCode: "#",
    },
    {
        id: 4,
        number: "04",
        title: "TaskFlow - Project Manager",
        category: "Productivity Tool",
        description: "A collaborative project management tool inspired by Trello. It offers drag-and-drop kanban boards, team workspaces, and automated workflow triggers to boost team productivity.",
        technologies: ["Vue.js", "Vuex", "Node.js", "Socket.io", "MongoDB"],
        image: "https://via.placeholder.com/800x500?text=TaskFlow+Preview",
        liveSite: "#",
        sourceCode: "#",
    },
    {
        id: 5,
        number: "05",
        title: "CryptoView - Dashboard",
        category: "FinTech",
        description: "Real-time cryptocurrency tracking dashboard providing live price updates, market analysis charts, and portfolio management tools using public crypto APIs.",
        technologies: ["React", "Chart.js", "CoinGecko API", "Tailwind CSS"],
        image: "https://via.placeholder.com/800x500?text=CryptoView+Preview",
        liveSite: "#",
        sourceCode: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A curated selection of my best work, demonstrating my expertise in building scalable and user-centric web applications.
                    </p>
                </div>

                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
