import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Feautures from '../components/Features';

const Home = () => {
  return (
    <>
        <Header />
        <Feautures />
    </>
  );
};

export default Home;
