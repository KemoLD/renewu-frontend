import React from 'react';
import ChatBotComponent from '../components/ChatBotComponent';
import { Typography } from '@mui/material';

const ChatBot = () => {
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
          letterSpacing: '2px',
          marginBottom: '20px',
        }}
      >
        RenewU
      </Typography>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: '#333',
            lineHeight: '1.5',
            padding: '20px 0', // add padding to the top and bottom
          }}
        >
          Our chatbot is here to assist you on your journey to personal growth and self-improvement. It's easy to get started. Simply click on the chat window below and type your questions or topics you'd like to discuss. Our chatbot is trained on the wisdom of the best lifestyle and business books to provide you with valuable insights and motivation.
          Whether you need guidance on setting goals, building habits, or just seeking daily inspiration, RenewU is here for you. Don't hesitate to start a conversation with our chatbot, and let's embark on your journey to becoming the best version of yourself, one conversation at a time.
          Enter a prompt into the chat window below to get started and take the first step towards personal growth.
        </Typography>

        <div style={{
          flex: 1, zIndex: 9999
        }}>
          <ChatBotComponent style={{ height: '100%' }} />
        </div>

      </div>
    </div>
  );
};

export default ChatBot;