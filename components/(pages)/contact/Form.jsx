import React from 'react'

const Form = () => {
    return (
        <section className='isolate relative' data-aos="fade-in" data-aos-duration="700">
            <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
                <form className="form space-y-5 max-w-xl px-6 mx-auto my-10 lg:my-24">
                    <div>
                        <label htmlFor="name" >Your name</label>
                        <input
                            type="name"
                            id="name"
                            placeholder="name" required />
                    </div>
                    <div>
                        <label htmlFor="email" >Your email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="name@gmail.com"
                            required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" >Your message</label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Leave a comment..."></textarea>
                    </div>
                    <p className='text-sm text-gray-500'>
                        By submitting this form you agree to our
                        <span className='text-orange-600'>
                            <a href="#"> terms and conditions </a>
                        </span>
                        and our
                        <span className='text-orange-600'>
                            <a href="#"> privacy policy </a>
                        </span>.
                    </p>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center bg-orange-500 text-white rounded-lg sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                </form>

                <div className='relative mb-20 mt-0 px-6 lg:mb-0 lg:mt-20 lg:px-8'>
                    <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>

                        <div className='mt-10 text-gray-500 space-y-8'>
                            <div className=''>
                                <div className='flex gap-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-black my-auto'><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></svg>
                                    <div className='text-lg text-gray-900'>Office</div>
                                </div>
                                <div className='ml-12 text-[0.925rem]'>
                                    Badrinath Road, Rishikesh 249137, <br /> Uttarakhand, India
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex gap-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-black my-auto'><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    <div className='text-lg text-gray-900'>Phone</div>
                                </div>

                                <a href="tel:+91 97566 20538" className='ml-12 text-[0.925rem]'>+91 97566 20538</a>
                            </div>
                            <div className=''>
                                <div className='flex gap-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-black my-auto'><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    <div className='text-lg text-gray-900'>Email</div>
                                </div>

                                <a href="mailto:office@seahawkadventures.com" className='ml-12 text-[0.925rem]'>
                                    office@seahawkadventures.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form