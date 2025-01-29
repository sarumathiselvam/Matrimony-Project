import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  Divider,
  Box,
  Checkbox,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckboxPopup from './CheckboxPopup';

const LocationDetails = () => {
  const [activeField, setActiveField] = useState(''); // Renamed to activeField
  const [isCheckboxPopupOpen, setCheckboxPopupOpen] = useState(false);
  const [country, setCountry] = useState(['Any']);
  const [citizenship, setCitizenship] = useState(['Any']);

  // Options for Country and Citizenship
  const countryOptions = [
    'Any', 'United States', 'Canada', 'India', 'United Kingdom', 
    'Australia', 'Germany', 'France', 'Singapore', 'Japan'
  ];

  const citizenshipOptions = [
    'Any', 'American', 'Canadian', 'Indian', 'British', 
    'Australian', 'German', 'French', 'Singaporean', 'Japanese'
  ];

  // Open popup for the selected field
  const handleOpenCheckboxPopup = (field) => {
    setActiveField(field); // Updated variable name here as well
    setCheckboxPopupOpen(true);
  };

  // Close popup
  const handleCloseCheckboxPopup = () => {
    setCheckboxPopupOpen(false);
  };

  // Save selected values based on the selected field
  const handleSaveSelection = (selectedValues) => {
    if (activeField === 'Country') {
      setCountry(selectedValues);
    } else if (activeField === 'Citizenship') {
      setCitizenship(selectedValues);
    }
    handleCloseCheckboxPopup();
  };

  // Return appropriate options based on selected field
  const getOptions = () => {
    if (activeField === 'Country') return countryOptions;
    if (activeField === 'Citizenship') return citizenshipOptions;
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
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6">Location Details</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Box display="flex" flexDirection="column" gap={1}>
          {/* Nearby Profiles */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body1">Nearby Profiles</Typography>
            <Checkbox size="small" />
          </Box>
          <Divider />

          {/* Country */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
            <Typography variant="body1">Country</Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2">{country.join(', ')}</Typography>
              <IconButton
                size="small"
                edge="end"
                onClick={() => handleOpenCheckboxPopup('Country')}
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          <Divider />

          {/* Citizenship */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
            <Typography variant="body1">Citizenship</Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2">{citizenship.join(', ')}</Typography>
              <IconButton
                size="small"
                edge="end"
                onClick={() => handleOpenCheckboxPopup('Citizenship')}
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          <Typography variant="body2" color="textSecondary" align="right" mt={1}>
            Show Less &uarr;
          </Typography>
        </Box>
      </AccordionDetails>

      {/* CheckboxPopup for selecting Country and Citizenship */}
      <CheckboxPopup
        open={isCheckboxPopupOpen}
        onClose={handleCloseCheckboxPopup}
        field={activeField}
        options={getOptions()}
        onSave={handleSaveSelection}
      />
    </Accordion>
  );
};

export default LocationDetails;
