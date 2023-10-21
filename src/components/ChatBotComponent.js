import React, { useMemo } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';
import ChatBot from '../pages/ChatBot';

const ChatBotComponent = () => {
  const directLine = useMemo(() => createDirectLine({ token: 'YOUR_DIRECT_LINE_TOKEN' }), []);

  return <ReactWebChat directLine={directLine} userID="YOUR_USER_ID" />;
};

export default ChatBotComponent;