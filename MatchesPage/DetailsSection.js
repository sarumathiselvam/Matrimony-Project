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
import SelectPopup from './SelectPopup';
import CheckboxPopup from './CheckboxPopup';

const DetailsSection = ({ sectionTitle, optionsMap, values = {}, onSave }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [popupType, setPopupType] = useState('');
  const [fieldToEdit, setFieldToEdit] = useState('');

  const handleEditClick = (field) => {
    const fieldOptions = optionsMap[field];
    if (fieldOptions) {
      setFieldToEdit(field);
      setPopupType(fieldOptions.type);
      setDialogOpen(true);
    }
  };

  return (
    <>
      <Accordion
        sx={{
          width: '350px',
          borderRadius: 5,
          marginLeft: '20px',
          marginTop: '50px',
          marginBottom: '20px',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">{sectionTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexDirection="column" gap={1}>
            {Object.keys(values).length > 0 ? (
              Object.keys(values).map((field, index) => (
                <React.Fragment key={index}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body1">{field}</Typography>
                    <Box display="flex" alignItems="center">
                      <Typography variant="body2">{values[field]}</Typography>
                      <IconButton size="small" onClick={() => handleEditClick(field)}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                  {index < Object.keys(values).length - 1 && <Divider />}
                </React.Fragment>
              ))
            ) : (
              <Typography variant="body2">No values available</Typography>
            )}
          </Box>
          <Typography variant="body2" color="primary" style={{ marginTop: 8 }}>
            View More &gt;
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Conditional Popup based on type */}
      {popupType === 'select' ? (
        <CheckboxPopup
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          field={fieldToEdit}
          options={optionsMap[fieldToEdit]?.options || []}
          onSave={(value) => {
            onSave(fieldToEdit, value);
            setDialogOpen(false);
          }}
        />
      ) : (
        popupType === 'range' && (
          <SelectPopup
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            field={fieldToEdit}
            options={optionsMap[fieldToEdit]?.options || []}
            onApply={(value) => {
              onSave(fieldToEdit, value);
              setDialogOpen(false);
            }}
            title={`Edit ${fieldToEdit}`}
          />
        )
      )}
    </>
  );
};

export default DetailsSection;
