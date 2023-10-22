import React from 'react';

const ChatBotComponent = () => {
  const iframeStyle = {
    minWidth: '400px',
    width: '100%',
    minHeight: '500px',
  };

  return (
    <iframe src='https://webchat.botframework.com/embed/demo-name-bot1?s=IHxwTDT_KqU.I2LhDVgl5h9G5ArqS3AVN5Qqsxt6qasw85OumiIeLlo'  style={iframeStyle} title='RenewU Chat Bot' ></iframe>
  );
};

export default ChatBotComponent;

