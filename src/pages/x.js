<Container
maxWidth="md"
style={{
  textAlign: 'center',
  marginTop: '50px',
  backgroundColor: '#f5f5f5',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
}}
>
<Typography variant="h3" component="h1" gutterBottom style={{ color: '#1e90ff' }}>
  Welcome to RenewU
</Typography>
<Typography variant="subtitle1" gutterBottom style={{ color: '#555' }}>
  Your journey to becoming the best version of yourself, one laugh and lesson at a time.
</Typography>

<Box
  sx={{
    marginTop: '40px',
    marginBottom: '20px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  }}
>
  <Typography variant="h4" component="h2" gutterBottom style={{ color: '#1e90ff' }}>
    What is RenewU?
  </Typography>
  <Typography variant="body1" paragraph style={{ color: '#555' }}>
    RenewU is not just another self-improvement app. It's your personal cheerleader, mentor, and guide to a better you.
  </Typography>
</Box>

<Box
  sx={{
    marginTop: '40px',
    marginBottom: '20px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  }}
>
  <Typography variant="h4" component="h2" gutterBottom style={{ color: '#1e90ff' }}>
    How Does RenewU Help You?
  </Typography>
  <Typography variant="body1" paragraph style={{ color: '#555' }}>
    We believe in learning with a smile! Our chatbot is trained on the wisdom of the best lifestyle and business books. It provides guidance, motivation, and even a dose of humor to help you on your journey to personal growth.
  </Typography>
</Box>

<Box sx={{ marginTop: '40px' }}>
  <Typography variant="h4" component="h2" gutterBottom style={{ color: '#1e90ff' }}>
    Start Your Journey
  </Typography>
  <Link to="/chatbot" style={{ textDecoration: 'none' }}>
    <Button variant="contained" color="primary" size="large">
      Start Chatbot
    </Button>
  </Link>
</Box>
</Container>