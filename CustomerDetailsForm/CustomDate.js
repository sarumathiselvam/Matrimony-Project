import React, { useState, useEffect } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

const CustomDate = ({ label, value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [age, setAge] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date);
  };

  useEffect(() => {
    if (selectedDate) {
      const today = dayjs();
      const years = today.diff(selectedDate, 'year'); // Calculate age in years
      setAge(years);
    }
  }, [selectedDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="custom-date-container">
        <DesktopDatePicker
          label={label}
          inputFormat="MM/DD/YYYY"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        {age !== null && (
          <div  className="age-display">
            <strong>Age: </strong> {age} years
          </div>
        )}
      </div>
    </LocalizationProvider>
  );
};

export default CustomDate;
