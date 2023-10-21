import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import PageNotFound from './pages/ErrorPage';
import ChatBot from './pages/ChatBot';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chatbot" element={<ChatBot />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App;

