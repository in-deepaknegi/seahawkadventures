"use client"

import { useState } from 'react';

const BookingForm = () => {
    const [step, setStep] = useState(1);
    const [adventure, setAdventure] = useState('');
    const [dateTime, setDateTime] = useState('');

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
        <div>
            <h1>Booking Form</h1>
            {renderStepContent()}
        </div>
    );
};

const AdventureSelection = ({ onSelectAdventure }) => {
    const handleAdventureSelect = (selectedAdventure) => {
        onSelectAdventure(selectedAdventure);
    };

    return (
        <div>
            <h2>Choose Your Adventure</h2>
            {/* Your adventure selection options here */}
            <button onClick={() => handleAdventureSelect('Adventure A')}>
                Adventure A
            </button>
            <button onClick={() => handleAdventureSelect('Adventure B')}>
                Adventure B
            </button>
            {/* Add more adventure options as needed */}
        </div>
    );
};

const DateTimeSelection = ({ onDateTimeSelected }) => {
    const handleDateTimeSelect = (selectedDateTime) => {
        // Handle date and time selection logic
        onDateTimeSelected(selectedDateTime);
    };

    return (
        <div>
            <h2>Select Date and Time</h2>
            {/* Your date and time selection components here */}
            {/* For example, date picker, time picker */}
            {/* Simulating selection with buttons for demo */}
            <button onClick={() => handleDateTimeSelect('2024-01-15T10:00:00')}>
                January 15, 2024 - 10:00 AM
            </button>
            <button onClick={() => handleDateTimeSelect('2024-01-20T14:30:00')}>
                January 20, 2024 - 2:30 PM
            </button>
            {/* Add more date and time options as needed */}
        </div>
    );
};

const Confirmation = ({ adventure, dateTime, onPrevStep }) => {
    return (
        <div>
            <h2>Complete Your Booking</h2>
            <p>Adventure: {adventure}</p>
            <p>Date and Time: {dateTime}</p>
            {/* Additional confirmation or input fields can be added */}
            <button onClick={onPrevStep}>Back</button>
            {/* Additional buttons for submission or further action */}
        </div>
    );
};

export default BookingForm;
