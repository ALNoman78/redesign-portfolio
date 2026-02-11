import { useState, useEffect } from 'react';

const TechCard = ({ tech, index }) => (
    <div
        className="group p-6 bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2 flex flex-col items-center gap-4 relative overflow-hidden"
        style={{
            animation: `fadeInUp 0.5s ease-out forwards ${index * 0.1}s`,
            opacity: 0
        }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="w-16 h-16 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 relative z-10">
            <img src={tech.icon} alt={tech.name} className={`w-full h-full object-contain drop-shadow-lg ${tech.className || ''}`} />
        </div>
        <h3 className="text-gray-300 font-medium text-lg group-hover:text-blue-400 transition-colors duration-300 relative z-10">{tech.name}</h3>
    </div>
);

const TabContent = ({ techs }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {techs.map((tech, index) => (
            <TechCard key={index} tech={tech} index={index} />
        ))}
    </div>
);

export default function Skills() {
    const [activeTab, setActiveTab] = useState('frontend');

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

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

    return (
        <section id="skills" className="py-24 w-full px-4 md:px-0 relative overflow-hidden bg-[#0a0a0a]">
            {/* Background Elements - Enhanced */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
                        My Tech Stack
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        A curated collection of technologies I use to build performant and scalable applications.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-16 flex-wrap">
                    {['frontend', 'backend', 'tools'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-3 font-medium text-lg rounded-full transition-all duration-300 border backdrop-blur-sm ${activeTab === tab
                                ? 'bg-blue-600/10 text-blue-400 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                                : 'bg-gray-800/30 text-gray-400 border-gray-700/50 hover:border-gray-600 hover:text-white hover:bg-gray-800/50'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                    {activeTab === 'frontend' && <TabContent key="frontend" techs={frontendTechs} />}
                    {activeTab === 'backend' && <TabContent key="backend" techs={backendTechs} />}
                    {activeTab === 'tools' && <TabContent key="tools" techs={tools} />}
                </div>
            </div>
        </section>
    );
}
