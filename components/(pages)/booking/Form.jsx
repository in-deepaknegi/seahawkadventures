"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import Hero1 from '@/public/hiking1.WEBP'
import Hero2 from '@/public/rafting3.WEBP'
import Hero3 from '@/public/kayak1.WEBP'


const BookingForm = () => {
    const [step, setStep] = useState(1);
    const [adventure, setAdventure] = useState('');
    const [dateTime, setDateTime] = useState('');

    console.log(adventure);
    console.log(dateTime);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleAdventureSelection = (selectedAdventure) => {
        setAdventure(selectedAdventure);
        nextStep();
    };

    const handleDateTimeSelection = (selectedDateTime) => {
        setDateTime(selectedDateTime);
        nextStep();
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <AdventureSelection
                        onSelectAdventure={handleAdventureSelection}
                    />
                );
            case 2:
                return (
                    <DateTimeSelection
                        onDateTimeSelected={handleDateTimeSelection}
                        onPrevStep={prevStep}
                    />
                );
            case 3:
                return (
                    <Confirmation
                        adventure={adventure}
                        dateTime={dateTime}
                        onPrevStep={prevStep}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <>
            <section className='px-6 mt-6 lg:px-8 lg:mt-8'>
                <div className='relative isolate rounded-2xl shadow-xl shadow-gray-400 overflow-hidden bg-white'
                    style={{
                        backgroundImage: "url('/rafting3.WEBP')",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                    <div className='absolute w-full h-full z-[-9] bg-gradient-to-b from-black/30 to-black/70'></div>

                    <div className='mx-auto max-w-7xl py-20 px-6 lg:px-8 flex flex-col lg:flex-row gap-x-10 justify-between'>
                        <h2 className='text-4xl font-bold tracking-tight text-white sm:text-7xl'>
                            Reserve a spot.
                        </h2>
                        <p className='my-auto text-lg leading-8 max-w-xl text-gray-100'>
                            Book your upcoming adventure in the mystical and serene town of Rishikesh with our experienced and dedicated team of professionals.
                        </p>
                    </div>
                </div>

                <div className='mx-auto max-w-7xl mt-10 p-6'>
                    <nav>
                        <ol className='flex flex-col md:flex-row gap-8 list-none'>
                            <li className='md:flex-1'>
                                <a href="" className={`${step === 1 ? 'border-blue-600' : ''} flex flex-col border-l-4  py-2 pl-4 md:border-l-0 md:border-t-4 md:py-0 md:pt-4 transition-all ease-linear duration-500`}>
                                    <span className='text-sm font-medium'>STEP 1</span>
                                    <span className='text-lg'>Chouse your adventure</span>
                                </a>
                            </li>
                            <li className='md:flex-1'>
                                <a href="" className={`${step === 2 ? 'border-blue-600' : ''} flex flex-col border-l-4  py-2 pl-4 md:border-l-0 md:border-t-4 md:py-0 md:pt-4 transition-all ease-linear duration-500`}>
                                    <span className='text-sm font-medium'>STEP 2</span>
                                    <span className='text-lg'>Chouse your adventure</span>
                                </a>
                            </li>
                            <li className='md:flex-1'>
                                <a href="" className={`${step === 3 ? 'border-blue-600' : ''} flex flex-col border-l-4  py-2 pl-4 md:border-l-0 md:border-t-4 md:py-0 md:pt-4 transition-all ease-linear duration-500`}>
                                    <span className='text-sm font-medium'>STEP 3</span>
                                    <span className='text-lg'>Chouse your adventure</span>
                                </a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            {renderStepContent()}
        </>
    );
};

const gallery = [
    {
        id: 1,
        title: 'Hiking',
        imageSrc: Hero1,
    },
    {
        id: 2,
        imageSrc: Hero2,
        title: 'Rafting',
    },
    {
        id: 3,
        imageSrc: Hero3,
        title: 'Kayaking',
    },
]

const AdventureSelection = ({ onSelectAdventure }) => {
    const handleAdventureSelect = (selectedAdventure) => {
        onSelectAdventure(selectedAdventure);
    };

    return (
        <>
            <section className='bg-white px-6 py-16 lg:py-8 lg:px-8'>
                <div className='mx-auto max-w-6xl'>
                    <div className='mt-16 md:flex justify-center items-center gap-8 mx-auto max-w-7xl'>
                        {gallery.map((item) => (
                            <button
                                onClick={() => handleAdventureSelect(`${item.title}`)}
                                key={item.id}
                                className='relative isolate left-0 w-full my-8 md:my-0 md:w-24 h-[14rem] md:h-[15rem] rounded-2xl overflow-hidden transition-all ease-in-out duration-700 shadow-xl flex-auto'>
                                <Image
                                    src={item.imageSrc}
                                    alt='hero-image-1'
                                    loading='eager'
                                    className='absolute inset-0 -z-10 h-[15rem] object-cover'
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            {/* <h2>Choose Your Adventure</h2>
            <button onClick={() => handleAdventureSelect('Adventure A')}>
                Adventure A
            </button>
            <button onClick={() => handleAdventureSelect('Adventure B')}>
                Adventure B
            </button> */}
        </>
    );
};

const DateTimeSelection = ({ onDateTimeSelected, onPrevStep }) => {
    const handleDateTimeSelect = (selectedDateTime) => {
        onDateTimeSelected(selectedDateTime);
    };

    return (
        <div>
            <h2>Select Date and Time</h2>
            <button onClick={() => handleDateTimeSelect('2024-01-15T10:00:00')}>
                January 15, 2024 - 10:00 AM
            </button>
            <button onClick={() => handleDateTimeSelect('2024-01-20T14:30:00')}>
                January 20, 2024 - 2:30 PM
            </button>
            <button onClick={onPrevStep}>Back</button>

        </div>
    );
};

const Confirmation = ({ adventure, dateTime, onPrevStep }) => {
    return (
        <div>
            <h2>Complete Your Booking</h2>
            <p>Adventure: {adventure}</p>
            <p>Date and Time: {dateTime}</p>
            <button onClick={onPrevStep}>Back</button>
        </div>
    );
};

export default BookingForm;
