import React from 'react'

const Steps = [
    {
        id: 1,
        name: "Choose Your Adventure",
        para: "Browse through our wide range of adventure services, carefully exploring the diverse options available, and find the perfect one for you.",
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1" /><path d="M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5" /><path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" /><path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" /><path d="M9 7v10" /></svg>)
    },
    {
        id: 2,
        name: "Select Date and Time",
        para: "Choose a date and time that works best for you and your group members. Consider everyone's schedule and availability to find a suitable time for your gathering.",
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /><path d="m15 5 3 3" /></svg>)
    },
    {
        id: 3,
        name: "Complete Your Booking",
        para: "Finalize your exciting adventure booking by providing us with your personal details and completing the payment process. Get ready for an unforgettable experience!",
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" /><path d="m16 12 2 2 4-4" /><path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" /></svg>)
    },
]

const Hiw = () => {
    return (
        <section className='bg-white px-6 py-24 lg:py-32 lg:px-8'>
            <div className='mx-auto max-w-2xl md:text-center'>
                <p className='text-base font-semibold leading-7 text-blue-700'>
                    Get familiar with our process
                </p>
                <h2 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                    Book Your Next Adventure With Us
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                    At our adventure company, booking your next Uttarakhand and Ganga River excursion is easy. Just pick your activity, choose a date and time, and book. Get ready to experience the thrill of the great outdoors!
                </p>
            </div>

            <div className='mx-auto mt-16 hidden lg:grid grid-cols-1 gap-8 lg:mx-0 lg:grid-cols-3'>
                {Steps.map((step) => (
                    <div key={step.id} className='flex flex-row md:flex-col'>
                        <div className='flex items-center leading-7 text-sm font-bold text-blue-700'>
                            {step.svg}

                            <div className='hidden md:block absolute ml-2 h-[1px] w-screen bg-gray-300 sm:ml-4 lg:static lg:mr-[-0.5rem] lg:ml-4 lg:w-auto lg:flex-auto '></div>
                        </div>
                        <div>
                            <p className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-800'>
                                {step.name}
                            </p>
                            <p className='mt-2 text-[0.925rem] leading-6 text-gray-600'>
                                {step.para}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


            <div className='block mt-16 text-white max-w-4xl lg:hidden lg:px-8 lg:mt-0'>
                <div className='mx-auto flex flex-col gap-y-4 md:gap-y-8'>
                    {Steps.map((step) => (
                        <div key={step.id} className='flex gap-2 md:gap-6'>
                            <div className='items-center text-blue-700'>
                                {step.svg}
                                <div className='mt-0 h-[calc(100%-1rem)] w-[1px] bg-gray-300 md:mt-2 lg:static mx-auto'></div>
                            </div>
                            <div>
                                <p className='text-lg font-semibold leading-8 tracking- text-gray-800'>
                                    {step.name}
                                </p>
                                <p className='mt-2 text-[0.925rem] leading-6 text-gray-600'>
                                    {step.para}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 flex items-center justify-center gap-x-6">
                <a href="#" className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white bg-orange-500 shadow-sm">
                    Book
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 my-auto">
                    Explore more <span aria-hidden="true">→</span></a>
            </div>
        </section>
    )
}

export default Hiw