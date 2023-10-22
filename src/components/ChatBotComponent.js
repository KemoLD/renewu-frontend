import React from 'react';

const ChatBotComponent = () => {
  console.log(process.env.REACT_APP_CHATBOT_SECRET_KEY);
  return (
    <iframe
      src={`https://webchat.botframework.com/embed/comebacklang-bot?s=${process.env.REACT_APP_CHATBOT_SECRET_KEY}`}
      style={{ minWidth: '400px', width: '100%', minHeight: '500px', border: 'none' }}
    ></iframe>
  );
};

export default ChatBotComponent;