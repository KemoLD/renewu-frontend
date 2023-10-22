import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import PageNotFound from './pages/ErrorPage';
import ChatBot from './pages/ChatBot';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chatbot" element={<ChatBot />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;

