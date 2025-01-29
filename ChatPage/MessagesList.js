import React from 'react';
import { Paper, Typography } from '@mui/material';

const MessagesList = () => {
  const messages = [
    { text: 'Greetings! We liked your brother\'s profile...', sender: 'user' },
    { text: 'Interest declined. She has declined your interest.', sender: 'receiver' },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '16px', background: '#f9f9f9' }}>
      {messages.map((message, index) => (
        <Paper
          key={index}
          style={{
            padding: '8px',
            marginBottom: '8px',
            maxWidth: '70%',
            marginLeft: message.sender === 'receiver' ? 'auto' : '0',
            textAlign: message.sender === 'receiver' ? 'right' : 'left',
          }}
        >
          <Typography variant="body2">{message.text}</Typography>
        </Paper>
      ))}
    </div>
  );
};

export default MessagesList;

