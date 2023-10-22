import React from 'react';
import { Typography, useTheme, useMediaQuery } from '@mui/material';
import ChatBotComponent from '../components/ChatBotComponent';

const ChatBot = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  let token;



  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'orange',
        padding: '2rem', // apply different padding based on screen size
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#333',
          textShadow: '1px 1px #ccc',
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '20px',
        }}
      >
        RenewU
      </Typography>
      <ChatBotComponent />
    </div>
  );
};

export default ChatBot;