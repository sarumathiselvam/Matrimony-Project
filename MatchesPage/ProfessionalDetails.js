import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  Divider,
  Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockIcon from '@mui/icons-material/Lock';
import CheckboxPopup from './CheckboxPopup';
import SelectPopup from './SelectPopup';

const ProfessionalDetails = () => {
  const [isCheckboxPopupOpen, setCheckboxPopupOpen] = useState(false);
  const [selectedField, setSelectedField] = useState('');
  const [occupation, setOccupation] = useState(['Any']);
  const [employmentType, setEmploymentType] = useState(['Any']);
  const [education, setEducation] = useState(['Any']);
  const [incomeRange, setIncomeRange] = useState({ min: 'Any', max: 'Any' });
  const [isIncomePopupOpen, setIncomePopupOpen] = useState(false); // Added missing state

  const occupationOptions = [
    'Any',
    'Software Engineer',
    'Doctor',
    'Teacher',
    'Accountant',
    'Business Owner',
    'Marketing Specialist',
    'Lawyer',
    'Architect',
    'Sales Manager',
    'Consultant',
    'Artist',
    'Research Scientist',
  ];

  const employmentTypeOptions = [
    'Any',
    'Private',
    'Government',
    'Business',
    'Self-employed',
    'Defence',
    'Not working',
  ];

  const educationOptions = [
    'Any',
    'High School',
    'Bachelor’s Degree',
    'Master’s Degree',
    'Doctorate (Ph.D.)',
    'Diploma',
    'Certificate',
    'Professional Degree',
    'Associate Degree',
  ];

  const incomeOptions = [
    '1 Lakh', '2 Lakh', '3 Lakh', '4 Lakh', '5 Lakh', '6 Lakh', 
    '7 Lakh', '8 Lakh', '9 Lakh', '10 Lakh'
  ];

  const handleOpenCheckboxPopup = (field) => {
    setSelectedField(field);
    setCheckboxPopupOpen(true);
  };

  const handleCloseCheckboxPopup = () => {
    setCheckboxPopupOpen(false);
  };

  const handleSaveSelection = (selectedValues) => {
    if (selectedField === 'Occupation') {
      setOccupation(selectedValues);
    } else if (selectedField === 'Employment Type') {
      setEmploymentType(selectedValues);
    } else if (selectedField === 'Education') {
      setEducation(selectedValues);
    }
    handleCloseCheckboxPopup();
  };

  const handleOpenIncomePopup = () => {
    setIncomePopupOpen(true);
  };

  const handleCloseIncomePopup = () => {
    setIncomePopupOpen(false);
  };

  const handleApplyIncomeRange = (minValue, maxValue) => {
    setIncomeRange({ min: minValue, max: maxValue });
    handleCloseIncomePopup();
  };

  const getOptions = () => {
    if (selectedField === 'Occupation') return occupationOptions;
    if (selectedField === 'Employment Type') return employmentTypeOptions;
    if (selectedField === 'Education') return educationOptions;
    return [];
  };

  return (
    <Accordion
      sx={{
        width: '350px',
        borderRadius: 5,
        marginLeft: '20px',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="penel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6">Professional Details</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Box display="flex" flexDirection="column" gap={1}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body1">Occupation</Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2">{occupation.join(', ')}</Typography>
              <IconButton size="small" onClick={() => handleOpenCheckboxPopup('Occupation')}>
                <EditIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          <Divider />

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body1">Annual Income</Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2">
                {incomeRange.min} - {incomeRange.max}
              </Typography>
              <IconButton size="small" onClick={handleOpenIncomePopup}>
                <EditIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          <Divider />

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body1">Employment Type</Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2">{employmentType.join(', ')}</Typography>
              <IconButton size="small" onClick={() => handleOpenCheckboxPopup('Employment Type')}>
                <EditIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          <Divider />

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body1">Education</Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2">{education.join(', ')}</Typography>
              <IconButton size="small" onClick={() => handleOpenCheckboxPopup('Education')}>
                <EditIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          <Divider />

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body1">Institution Details</Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2">Any</Typography>
              <LockIcon fontSize="small" />
            </Box>
          </Box>
          <Divider />

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body1">Organization Details</Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2">Any</Typography>
              <LockIcon fontSize="small" />
            </Box>
          </Box>
          <Divider />
        </Box>
      </AccordionDetails>

      <CheckboxPopup
        open={isCheckboxPopupOpen}
        onClose={handleCloseCheckboxPopup}
        field={selectedField}
        options={getOptions()}
        onSave={handleSaveSelection}
      />

      {/* SelectPopup for income range selection */}
      <SelectPopup
        open={isIncomePopupOpen}
        onClose={handleCloseIncomePopup}
        title="Select Annual Income"
        options={incomeOptions}
        onApply={handleApplyIncomeRange}
      />
    </Accordion>
  );
};

export default ProfessionalDetails;
