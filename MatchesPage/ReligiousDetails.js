import React, { useState } from 'react'; 
import DetailsSection from './DetailsSection';

const ReligiousDetails = () => {
    const [selectedBasicValues, setSelectedBasicValues] = useState({
        Religion: 'Hindu',
        Caste: 'Vishwakarma',
        Subcaste: 'Any',
        'Profile with Horoscope': false,
        Star: 'Any',
        Dosham: "Doesn't Matter",
    });

    const optionsMap = {
        Religion: {
            type: 'select',
            options: ['Hindu', 'Muslim', 'Christian'],
        },
        Caste: {
            type: 'select',
            options: ['Vishwakarma', 'Agamudaiyar', 'Udaiyar', 'Brahmin'],
        },
        Subcaste: {
            type: 'select',
            options: ['Kamalar', 'Agamudaiyar', 'Udaiyar', 'Brahmin'],
        },
        'Profile with Horoscope': {
            type: 'checkbox',
            options: [],
        },
        Star: {
            type: 'select',
            options: ['Any', 'Ashwini', 'Bharani', 'Krittika'],
        },
        Dosham: {
            type: 'select',
            options: ["Doesn't Matter", 'Has Dosham'],
        },
    };

    const handleSave = (field, newValue) => {
        setSelectedBasicValues((prevValues) => ({
            ...prevValues,
            [field]: newValue,
        }));
    };

    return (
        <div>
            <DetailsSection
                sectionTitle="Religious Details"
                optionsMap={optionsMap}
                values={selectedBasicValues} 
                onSave={handleSave}
            />
        </div>
    );
};

export default ReligiousDetails;
