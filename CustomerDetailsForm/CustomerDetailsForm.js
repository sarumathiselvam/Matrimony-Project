import React, { useState } from 'react';
import CustomDropDown from './CustomDropDown';
import CustomText from './CustomText';
import CustomLabel from '../CustomLabel';
import CustomRadio from '../CustomRadio';
import './CustomDetailForm.css';
import CustomCheckbox from './CustomCheckBox';
import { Grid } from '@mui/material';
import CustomButton from './CustomButton';
import CustomDate from './CustomDate';

// import axios from 'axios'


const profileCreated = [
  'Brother', 'Sister', 'Friend', 'Daughter', 'Son', 'Myself',
];

const heightOptions = [
  '4ft 6in', '4ft 7in', '4ft 8in', '4ft 9in', '4ft 10in',
  '4ft 11in', '5ft 0in', '5ft 1in', '5ft 2in', '5ft 3in',
  '5ft 4in', '5ft 5in', '5ft 6in', '5ft 7in', '5ft 8in',
  '5ft 9in', '5ft 10in', '5ft 11in', '6ft 0in', '6ft 1in',
  '6ft 2in', '6ft 3in', '6ft 4in', '6ft 5in',
];

const weightOptionsKg = [
  '40 Kg', '42 Kg', '45 Kg', '48 Kg', '50 Kg', '52 Kg',
  '55 Kg', '58 Kg', '60 Kg', '62 Kg', '65 Kg', '68 Kg',
  '70 Kg', '72 Kg', '75 Kg', '78 Kg', '80 Kg', '82 Kg',
  '85 Kg', '88 Kg', '90 Kg', '92 Kg', '95 Kg', '98 Kg',
  '100 Kg', '105 Kg', '110 Kg',
];

const maritalStatusOptions = ['Never Married', 'Divorced', 'Widowed'];
const bodyTypes = ['Slim', 'Athletic', 'Average', 'Heavy'];
const physicalStatus = ['Normal', 'Physically Challenged'];
const eatingHabits = ['Vegetarian', 'Non Vegetarian', 'Eggetarian'];
const drinkingHabits = ['No', 'Drinks Socially', 'Yes'];
const smokingHabits = ['No', 'Occasionally', 'Yes'];
 
function CustomerDetailsForm() {
  const [formData, setFormData] = useState({
    profileCreated: '',
    name: '',
    dateOfBirth: null,
    height: '',
    weight: '',
    maritalStatus: '',
    bodyType: '',
    physicalStatus: '',
    eatingHabits: [],
    drinkingHabits: [],
    smokingHabits: [],
  });

  const handleChange = (key, value) => {
    // console.log(`Changed ${key} to ${value}`);
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Submitted" , JSON.stringify(formData))
    // try {
      // const response = await fetch('http://localhost:3000/submit-form', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
  
    //   if (!response.ok) {
    //     const errorText = await response.text();
    //     console.error('Error response:', errorText);
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }
  
    //   const data = await response.json();
    //   console.log('Success:', data);
    // } catch (error) {
    //   console.error('Fetch error:', error);
    // }
  };
     

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Basic Details</h2>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CustomLabel name="Profile Created :" />
        </Grid>
        <Grid item xs={8}>
          <CustomDropDown options={profileCreated} option0="Select an Option"
            value={formData.profileCreated}
            onChange={(value) => handleChange('profileCreated', value)} />
        </Grid>

        <Grid item xs={4}>
          <CustomLabel name="Name:" />
        </Grid>
        <Grid item xs={8}>
          <CustomText onChange={(value) => handleChange('name', value)} />
        </Grid>

        <Grid item xs={4}>
          <CustomLabel name="Date of Birth:" />
        </Grid>
        <Grid item xs={8}>
          <CustomDate onChange={(date) => handleChange('dateOfBirth', date)} />
        </Grid>

        <Grid item xs={4}>
          <CustomLabel name="Height:" />
        </Grid>
        <Grid item xs={8}>
          <CustomDropDown options={heightOptions} option0="Select a Height"
            value={formData.height}
            onChange={(value) => handleChange('height', value)} />
        </Grid>

        {/* Repeat similar structure for other fields */}
        <Grid item xs={4}>
          <CustomLabel name="Weight (Kg):" />
        </Grid>
        <Grid item xs={8}>
          <CustomDropDown options={weightOptionsKg} option0="Select a Kg"
            value={formData.weight}
            onChange={(value) => handleChange('weight', value)} />
        </Grid>

        <Grid item xs={4}>
          <CustomLabel name="Marital Status:" />
        </Grid>
        <Grid item xs={8}>
          <CustomDropDown options={maritalStatusOptions}
            value={formData.maritalStatus}
            option0="Select a Marital Status"
            onChange={(value) => handleChange('maritalStatus', value)} />
        </Grid>

        <Grid item xs={4}>
          <CustomLabel name="Body Type:" />
        </Grid>
        <Grid item xs={8}>
          <CustomRadio radios={bodyTypes}
            value={formData.bodyType}
            onChange={(value) => handleChange('bodyType', value)} />
        </Grid>

        <Grid item xs={4}>
          <CustomLabel name="Physical Status:" />
        </Grid>
        <Grid item xs={8}>
          <CustomRadio radios={physicalStatus}
            value={formData.physicalStatus}
            onChange={(value) => handleChange('physicalStatus', value)} />
        </Grid>

        <Grid item xs={4}>
          <CustomLabel name="Eating Habit:" />
        </Grid>
        <Grid item xs={8}>
          <CustomCheckbox checkBox={eatingHabits}
            value={formData.eatingHabits}
            onChange={(checkedValues) => handleChange('eatingHabits', checkedValues)} />
        </Grid>
        <Grid item xs={4}>
          <CustomLabel name="Drinking Habit:" />
        </Grid>
        <Grid item xs={8}>
          <CustomCheckbox checkBox={drinkingHabits}
            value={formData.drinkingHabits}
            onChange={(checkedValues) => handleChange('drinkingHabits', checkedValues)} />
        </Grid>
        <Grid item xs={4}>
          <CustomLabel name="Smoking Habit:" />
        </Grid>
        <Grid item xs={8}>
          <CustomCheckbox checkBox={smokingHabits}
            value={formData.smokingHabits}
            onChange={(checkedValues) => handleChange('smokingHabits', checkedValues)} />
        </Grid>
        <Grid item xs={4}>
          <CustomLabel />
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end" alignItems="center" >
          <Grid item>
            <CustomButton label="Submit" variant="contained" type="submit" />
          </Grid>
          <Grid item>
            <CustomButton label="Cancel" variant="outlined" />
          </Grid>
        </Grid>

      </Grid>
    </form>
  );
}

export default CustomerDetailsForm;
