import React from 'react';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-content md:grid grid-cols-2 gap-4">
                <div>
                    <h2 className='md:text-4xl font-medium leading-[1.2] max-w-[350px] mb-5'>Trusted by leading global brands</h2>
                <p className='max-w-[400px]'>Partner with our expert coaches to unlock personalized strategies that drive growth and success.
                    Follow us
                </p>
                </div>
                <form className="contact-form flex gap-4 flex-col">
                    <input className='p-5 outline-0 border-b border-white/80' type="text" placeholder="Name" required />
                    <input className='p-5 outline-0 border-b border-white/80' type="email" placeholder="Email" required />
                    <input className='p-5 outline-0 border-b border-white/80' type="text" placeholder="Contact Information" required />
                    <textarea className='pb-10 pl-5 pt-5 outline-0 border-b border-white/30' placeholder="Your Message" required></textarea>
                    <div className='mt-4 '>
                        <button className='text-[1rem] px-5 py-3 rounded-xl btn ' type="submit">Send Message</button>
                    </div>
                </form> 
            </div>
        </section>
    );
};

export default Contact;
