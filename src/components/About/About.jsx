const About = () => {
    return (
        <section className="py-20">
            <div className="px-5 md:grid grid-cols-2">
                <div>
                    <img src="" alt="__Noting is here" />
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-4xl font-medium mb-6">About Me</h2>
                    <p>
                        Hi, I’m Noman, a passionate and detail-oriented professional with a strong interest in creating meaningful digital experiences. I enjoy turning ideas into well-structured, visually appealing, and functional solutions that align with both user needs and business goals.
                    </p>
                    <p>
                        I work with a strong focus on clarity, usability, and consistency. Whether I’m building websites, refining layouts, or collaborating with clients, I value clear communication and a thoughtful approach to every project. I believe good design and development are not just about visuals, but about solving real problems effectively.
                    </p>
                    <p>
                        I’m always eager to learn, improve my skills, and take on new challenges. My goal is to deliver work that is reliable, polished, and impactful—while building long-term professional relationships based on trust and quality.
                    </p>
                    <div>
                        <button className="btn btn-primary text-black text-[16px] bg-[#F2F5EA] rounded-full">Contact Me</button>
                    </div>
                </div>
            </div>
            {/* <ul className="flex flex-wrap justify-center gap-4">
                    <li className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">React</li>
                    <li className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">JavaScript</li>
                    <li className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">HTML & CSS</li>
                    <li className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Node.js</li>
                    <li className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Express</li>
                    <li className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">MongoDB</li>
                </ul> */}
        </section>
    );
};

export default About;