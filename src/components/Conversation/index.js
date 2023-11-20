import React from 'react';
import {
  Stack,
  Box,
} from '@mui/material';
import ChatHeader from '../Chat/Header';
import Footer from './../Chat/Footer';
import Message from './Message';



const Conversation = () => {
  return (
    <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>
      {/* chat header */}
      <ChatHeader/>
      {/* msg */}
      <Box width={'100%'} sx={{flexGrow: 1}} >
        <Message/>
      </Box>
      {/* chat footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
