import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SelectPopup = ({ open, onClose, title = "Select Options", initialCount = "73,523 matches", options, onApply }) => {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const handleReset = () => {
    setMinValue('');
    setMaxValue('');
  };

  const handleApply = () => {
    onApply(minValue, maxValue); // Call onApply with selected values
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <FormControl fullWidth margin="dense">
          <InputLabel>Min Value</InputLabel>
          <Select
            value={minValue}
            onChange={(e) => setMinValue(e.target.value)}
            label="Min Value"
          >
            <MenuItem value="">Any</MenuItem>
            {options.map((option, index) => (
              <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel>Max Value</InputLabel>
          <Select
            value={maxValue}
            onChange={(e) => setMaxValue(e.target.value)}
            label="Max Value"
          >
            <MenuItem value="">Any</MenuItem>
            {options.map((option, index) => (
              <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          {initialCount}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleReset} color="secondary">
          Reset
        </Button>
        <Button onClick={handleApply} color="primary" variant="contained" 
         sx={{ backgroundColor: 'orange', '&:hover': { backgroundColor: 'darkorange' } }} 
         >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectPopup;
