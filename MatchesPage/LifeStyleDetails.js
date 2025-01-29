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
import CheckboxPopup from './CheckboxPopup'; // Assuming CheckboxPopup is in the same directory

const LifestyleDetails = () => {
  const [popupField, setPopupField] = useState(null); // Field currently being edited
  const [habits, setHabits] = useState({
    eating: 'Vegetarian',
    drinking: 'Never',
    smoking: 'No',
  });

  // Popup options
  const habitOptions = {
    eating: ['Vegetarian', 'Non-Vegetarian', 'Vegan'],
    drinking: ['Never', 'Occasionally', 'Regularly'],
    smoking: ['No', 'Occasionally', 'Yes'],
  };

  // Handle saving the selected options
  const handleSave = (selectedValues) => {
    setHabits((prev) => ({
      ...prev,
      [popupField]: selectedValues.join(', '), // Save as a comma-separated string
    }));
    setPopupField(null); // Close the popup
  };

  return (
    <>
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
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6">Lifestyle</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Box display="flex" flexDirection="column" gap={1}>
            {/* Eating Habits */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">Eating Habits</Typography>
              <Box display="flex" alignItems="center">
                <Typography variant="body2">{habits.eating}</Typography>
                <IconButton
                  size="small"
                  edge="end"
                  onClick={() => setPopupField('eating')}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Divider />

            {/* Drinking Habits */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
              <Typography variant="body1">Drinking Habits</Typography>
              <Box display="flex" alignItems="center">
                <Typography variant="body2">{habits.drinking}</Typography>
                <IconButton
                  size="small"
                  edge="end"
                  onClick={() => setPopupField('drinking')}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Divider />

            {/* Smoking Habits */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
              <Typography variant="body1">Smoking Habits</Typography>
              <Box display="flex" alignItems="center">
                <Typography variant="body2">{habits.smoking}</Typography>
                <IconButton
                  size="small"
                  edge="end"
                  onClick={() => setPopupField('smoking')}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Checkbox Popup */}
      {popupField && (
        <CheckboxPopup
          open={Boolean(popupField)}
          onClose={() => setPopupField(null)}
          field={popupField}
          options={habitOptions[popupField]}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default LifestyleDetails;
