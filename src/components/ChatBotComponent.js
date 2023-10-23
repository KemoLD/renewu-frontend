import React from 'react';

const ChatBotComponent = () => {
  const iframeStyle = {
    minWidth: '400px', width: '100%', minHeight: '500px', border: 'none'
  };

  return (
    <iframe src='https://webchat.botframework.com/embed/demo-name-bot2?s=7DNrWybGr2w.fXxI0-Vn2GwLny9TUuPaaAxqtyaB_ClYSE04Fog_KZM' title='Chatbot' style={iframeStyle}></iframe>
  );
};

export default ChatBotComponent;

