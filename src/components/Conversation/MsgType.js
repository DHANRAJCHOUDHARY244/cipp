import {Box, Divider, Stack, Typography} from '@mui/material';
import React from 'react';
import {useTheme} from '@mui/material/styles';

const LinkMsg = ({el}) => {
  const theme = useTheme ();
  return (
    <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content',
        }}
      >
        <Stack spacing={2}>
          <Stack p={2} spacing={3} alignItems={'center'} sx={{}} ></Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

const ReplyMsg = ({el}) => {
  const theme = useTheme ();
  return (
    <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content',
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={'column'}
            alignItems={'center'}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color={theme.palette.text}>
              {el.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : '#fff'}
          >
            {el.reply}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const Timeline = ({el}) => {
  const theme = useTheme ();
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Divider width={'48%'} />
      <Typography variant="caption" sx={{color: theme.palette.text}}>
        {el.text}
      </Typography>
      <Divider width={'48%'} />
    </Stack>
  );
};

const TextMsg = ({el}) => {
  const theme = useTheme ();
  return (
    <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content',
        }}
      >
        <Typography
          variant="body2"
          color={el.incoming ? theme.palette.text : '#fff'}
        >
          {el.message}
        </Typography>
      </Box>
    </Stack>
  );
};

const MediaMsg = ({el}) => {
  const theme = useTheme ();
  return (
    <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content',
        }}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            alt={el.msg}
            style={{maxHeight: 210, borderRadius: '10px'}}
          />
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : '#fff'}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export {Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg};
