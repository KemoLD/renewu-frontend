import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Founders';

const Home = () => {
  return (
    <>
        <Header />
        <Features />
        <Footer />
    </>
  );
};

export default Home;
