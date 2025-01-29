import React, { useState } from 'react';
import { Box, Button, List, ListItem, Avatar, Card, Typography } from '@mui/material';
import data from '../mockData/ChatApp.json'; // Import the JSON data

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState('Received');

  // Extract profiles from the JSON structure
  const profiles = data.datafetch.allMatches?.data || []; // Fallback to an empty array if undefined

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
     
      <Card sx={{ padding: '8px 16px', borderBottom: '1px solid #ddd' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
            backgroundColor: 'white',
          }}
        >
          {['Received', 'Awaiting Response', 'Calls'].map((tab) => (
            <Button
              key={tab}
              onClick={() => handleTabChange(tab)}
              sx={{
                fontSize: '13px',
                fontWeight: selectedTab === tab ? 'bold' : 'normal',
                color: selectedTab === tab ? '#1976d2' : '#000',
                textTransform: 'none',
              }}
            >
              {tab}
            </Button>
          ))}
        </Box>
      </Card>

      {/* Secondary Filters */}
      <Box overflow="auto"
        sx={{
          padding: '8px 16px',
          borderBottom: '1px solid #ddd',
          backgroundColor: '#f1f1f1',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {['All', 'Messages (5)', 'Interests (48)'].map((filter, index) => (
            <Button
              key={index}
              sx={{
                fontSize: '13px',
                fontWeight: 'normal',
                textTransform: 'none',
                color: '#000',
                '&:hover': {
                  backgroundColor: 'darkgreen',
                  color: 'white',
                },
              }}
            >
              {filter}
            </Button>
          ))}
        </Box>
      </Box>
    
        <List>
          {profiles.map((profile, index) => (
            <ListItem key={index} button>
              <Avatar alt={profile.Name} src={profile.image} />
              <Box ml={2}>
                <Typography variant="subtitle1">{profile.Name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {profile.status}
                </Typography>

              </Box>
            </ListItem>
          ))}
        </List>
       
      </Box>
  
  );
};

export default Sidebar;
