import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@mui/material';

const CheckboxPopup = ({ open, onClose, field, options, onSave }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedValues((prevSelected) =>
      checked
        ? [...prevSelected, value] // Add if checked
        : prevSelected.filter((val) => val !== value) // Remove if unchecked
    );
  };

  const handleSave = () => {
    onSave(selectedValues); // Pass selected values back to the parent component
    onClose(); // Close the popup
  };

  const handleReset = () => {
    setSelectedValues([]); // Clear all selections
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select {field}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Choose options:
        </Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  value={option}
                  checked={selectedValues.includes(option)}
                  onChange={handleCheckboxChange}
                />
              }
              label={option}
            />
          ))}
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button variant="outlined" onClick={handleReset}>Reset</Button>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{ backgroundColor: 'orange', '&:hover': { backgroundColor: 'darkorange' } }} // Custom color
          >
            Apply
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CheckboxPopup;
