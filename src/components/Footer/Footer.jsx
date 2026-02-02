const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 text-gray-400">
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-white text-2xl font-semibold flex items-center gap-2">
                        &lt;/&gt; Noman
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed">
                        Web Designer & Developer crafting fast, user-focused digital experiences.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-white font-medium mb-4">Navigation</h3>
                    <ul className="space-y-2 text-sm flex gap-4">
                        <li><a href="#about" className="hover:text-white transition">About</a></li>
                        <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                        <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
                        <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-white font-medium mb-4">Connect</h3>
                    <div className="flex gap-4 text-sm">
                        <a href="#" className="hover:text-white transition">LinkedIn</a>
                        <a href="#" className="hover:text-white transition">GitHub</a>
                        <a href="#" className="hover:text-white transition">Dribbble</a>
                        <a href="#" className="hover:text-white transition">Email</a>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-white/10 text-center py-5 text-xs text-gray-500">
                © {new Date().getFullYear()} Noman. All rights reserved.
            </div>
        </footer >
    );
};

export default Footer;
