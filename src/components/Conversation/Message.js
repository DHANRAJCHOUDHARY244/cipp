import {Box, Stack} from '@mui/material';
import React from 'react';
import {Chat_History} from '../../data';
import { Timeline } from './MsgType';
const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map (el => {
          switch (el.type) {
            case 'divider':
              // Timeline
              return <Timeline/>
            case 'msg':
              switch (el.subtype) {
                case 'img':
                  // img msg
                  break;
                case 'doc':
                  // doc msg
                  break;
                case 'link':
                  // link msg
                  break;
                case 'reply':
                  // reply msg
                  break;
                default:
                  break;
              }
              break;
            default:
              return <></>
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
