import { useState } from 'react';

export default function Skills() {
    const [activeTab, setActiveTab] = useState('frontend');

    const frontendTechs = [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', className: "invert" },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Daisy UI', icon: 'https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    ];

    const backendTechs = [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', className: "invert" },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'RESTful API', icon: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-api-web-development-flaticons-lineal-color-flat-icons-2.png' },
        { name: 'JWT', icon: 'https://jwt.io/img/pic_logo.svg' },
    ];

    const tools = [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', className: "invert" },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
        { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ];

    const TechCard = ({ tech }) => (
        <div className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1 flex flex-col items-center gap-3">
            <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img src={tech.icon} alt={tech.name} className={`w-full h-full object-contain ${tech.className || ''}`} />
            </div>
            <h3 className="text-gray-300 font-medium text-lg group-hover:text-blue-400 transition-colors">{tech.name}</h3>
        </div>
    );

    const TabContent = ({ techs }) => (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techs.map((tech, index) => (
                <TechCard key={index} tech={tech} />
            ))}
        </div>
    );

    return (
        <section id="skills" className="py-20 px-4 md:px-0 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl md:max-w-[500px] mx-auto font-medium leading-[1.2] text-center text-white mb-4">
                    Exploring the Tools Behind My Designs
                </h2>
                <p className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
                    Technologies and tools I work with to build high-quality applications
                </p>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {['frontend', 'backend', 'tools'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-3 font-semibold text-lg rounded-full transition-all duration-300 border ${activeTab === tab
                                ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 scale-105'
                                : 'bg-gray-800/50 text-gray-400 border-gray-700 hover:border-gray-600 hover:text-white hover:bg-gray-800'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                    <div className="animate-fadeIn">
                        {activeTab === 'frontend' && <TabContent techs={frontendTechs} />}
                        {activeTab === 'backend' && <TabContent techs={backendTechs} />}
                        {activeTab === 'tools' && <TabContent techs={tools} />}
                    </div>
                </div>
            </div>
        </section>
    );
}
