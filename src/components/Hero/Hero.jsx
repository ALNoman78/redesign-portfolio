import React from 'react';

const Hero = () => {
    return (
        <div className="hero md:py-36 py-12 ">
            <div className="hero-content grid md:grid-cols-2 grid-cols-1 lg:flex-row-reverse">
                <div className="max-w-3xl">
                    <h1 className='md:text-5xl text-2xl leading-[1.15] font-medium'>I’m Noman, a Web Designer & Developer crafting fast, user-focused websites.</h1>
                    <p className="py-6 ">
                        I design and build high-performance websites that blend clean visuals with thoughtful user experience. With a strong focus on speed, accessibility, and modern web standards, I help brands turn ideas into reliable, scalable digital products.
                    </p>
                    <div className='flex items-center gap-4'>
                        <a href="https://docs.google.com/document/d/1c54i5oZxU5RTO-BSA2ndnRJd_S-fG9hRECnfS3sDck8/edit?tab=t.0" target='_blank'>
                            <button className="btn btn-primary bg-transparent outline-0 border-[#F2F5EA] text-[16px] rounded-full">Resume</button>
                        </a>
                        <button className="btn btn-primary text-black text-[16px] bg-[#F2F5EA] rounded-full">Contact Me</button>
                    </div>
                </div>
                <div>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="w-full object-cover rounded-lg max-h-125 shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;