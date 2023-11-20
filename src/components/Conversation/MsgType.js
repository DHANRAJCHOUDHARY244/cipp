import {Divider, Stack, Typography} from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';

const Timeline = ({el}) => {
    const theme =useTheme()
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Divider width={'48%'} />
      <Typography variant='caption' sx={{color:theme.palette.text}} >
        {el.text}
      </Typography>
      <Divider width={'48%'} />
    </Stack>
  );
};

export {Timeline};
