import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Box, Container } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import InputField from './InputField';
import CustomButton from './CustomButton';
import CustomDropdown from './CustomDropdown';
import CustomRadio from './CustomRadio';

const ProfessionalDetailsForm = () => {
  const [employment, setEmployment] = useState('');
  const [education, setEducation] = useState('');
  const [occupation, setOccupation] = useState('');
  const [annualIncome, setAnnualIncome] = useState('6 - 7 Lakhs');
  const [location, setLocation] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const handleEmploymentChange = (event) => {
    setEmployment(event.target.value);
  };

  const educationOptions = [
    { value: 'Aeronautical Engineering', label: 'Aeronautical Engineering' },
    { value: 'Mechanical Engineering', label: 'Mechanical Engineering' },
    { value: 'Electrical Engineering', label: 'Electrical Engineering' },
  ];

  const incomeOptions = [
    { value: '0 - 1 Lakh', label: '0 - 1 Lakh' },
    { value: '1 - 3 Lakhs', label: '1 - 3 Lakhs' },
    { value: '3 - 5 Lakhs', label: '3 - 5 Lakhs' },
    { value: '6 - 7 Lakhs', label: '6 - 7 Lakhs' },
  ];

  const employmentOptions = [
    { value: 'Government/PSU', label: 'Government/PSU' },
    { value: 'Private', label: 'Private' },
    { value: 'Business', label: 'Business' },
    { value: 'Defence', label: 'Defence' },
    { value: 'Self Employed', label: 'Self Employed' },
    { value: 'Not working', label: 'Not working' },
  ];

  return (
    <Container maxWidth="md" sx={{ my: 5 }}>
         <Card
                sx={{
                    display: 'flex',
                    width: '900px',
                    height: '710px',
                    borderRadius: 10,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                }}
            >
      <Grid container spacing={0}>
        
        <Grid item xs={4} sx={{ flex: 0.4, backgroundColor: 'green', padding: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <PlaceIcon sx={{ fontSize: 80, color:"white"}} /> 
          <Typography variant="h6" sx={{ mt: 2 , color:"white"}}>
            Find someone who is caring for a lifetime
          </Typography>
        </Grid>


        <Grid item xs={8}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Professional details help us to find the best companion
              </Typography>

              {/* Form fields */}
              <Box component="form" noValidate autoComplete="off">
                <CustomDropdown
                  label="Highest Education"
                  options={educationOptions}
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  sx={{ mb: 2 }}
                />

                <CustomRadio
                  label="Employed in"
                  options={employmentOptions}
                  name="employment"
                  value={employment}
                  onChange={handleEmploymentChange}
                />

                <InputField
                  label="Occupation"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  placeholder="Enter your occupation"
                />

                <CustomDropdown
                  label="Annual Income"
                  options={incomeOptions}
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(e.target.value)}
                />

                <InputField
                  label="Work Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter work location"
                />

                <InputField
                  label="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="Enter state"
                />

                <InputField
                  label="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter city"
                />

                <CustomButton text="Continue" onClick={() => alert('Form Submitted')} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Card>
    </Container>
  );
};

export default ProfessionalDetailsForm;
