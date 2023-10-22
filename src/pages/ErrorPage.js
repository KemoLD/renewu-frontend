import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px', height: '100vh' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      It seems like you've taken a step in the wrong direction, but remember, even the greatest self-improvement journeys have a detour or two. RenewU is here to guide you back on the right track!
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" size="large" style={{ marginTop: '20px' }}>
          Go  Home
        </Button>
      </Link>
    </Container>
  );
};

export default PageNotFound;