import React from 'react';
import { Grid } from '@mui/material';
import Sidebar from './Sidebar';
import ChatHeader from './ChatHeader';
import MessagesList from './MessagesList';

const ChatApp = () => {
  return (
    <Grid container style={{ height: '100vh' }}>
      {/* Sidebar */}
      <Grid item xs={3} style={{ borderRight: '1px solid #ddd', overflowY: 'auto' }}>
        <Sidebar />
      </Grid>

      {/* Main Chat Section */}
      <Grid item xs={9} container direction="column">
        <ChatHeader />       
        <MessagesList />
     
      </Grid>
    </Grid>
  );
};

export default ChatApp;
