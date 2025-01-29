import React, { useState } from 'react';
import DetailsSection from './DetailsSection';

const BasicDetails = () => {
  const [values, setValues] = useState({
    Age: '25 - 30',
    Height: `5ft 5in - 6ft 2in`,
    'Profile Created By': 'Self',
    'Marital Status': 'Never Married',
    'Physical Status': 'Normal',
  });

  const optionsMap = {
    Age: { type: 'range', options: ['20','25','30','35','40','45','50','55','60'] },
    Height: { 
      type: 'range', 
      options: ['4ft 6in', '4ft 7in', '4ft 8in', '5ft 5in', '5ft 6in', '5ft 7in', '5ft 8in', '6ft 2in', '6ft 3in', '6ft 4in', '6ft 5in',] 
    },
    'Profile Created By': { type: 'select', options: ['Self', 'Parent', 'Sibling'] },
    'Marital Status': { type: 'select', options: ['Never Married', 'Divorced', 'Widowed'] },
    'Physical Status': { type: 'select', options: ['Normal', 'Differently Abled'] },
  };

  const handleSave = (field, newValue) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: newValue,
    }));
  };

  return (
    <div>
      <DetailsSection 
        sectionTitle="Basic Details"
        optionsMap={optionsMap}
        values={values}
        onSave={handleSave}
      />
    </div>
  );
};

export default BasicDetails;
