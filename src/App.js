import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to RenewU
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Your path to self-improvement and personal growth.
      </Typography>
      <Link to="/chatbot" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" size="large" style={{ marginTop: '20px' }}>
          Start Chatbot
        </Button>
      </Link>
    </Container>
  );
}

export default App;

