import { Avatar, Box, Divider, IconButton, Stack } from '@mui/material';
import { Gear } from 'phosphor-react';
import React from 'react';
import {  useTheme } from '@mui/material/styles';
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from '../../data';
import { useState } from 'react';
import useSettings from '../../hooks/useSettings';
import { faker } from '@faker-js/faker';
import AntSwitch from '../../components/AntSwitch';
const SideBar = () => {
    const [selected, setSelected] = useState(0);
    const theme=useTheme()
    const {onToggleMode}=useSettings()
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0 0 2px rgba(0,0,0,0.25)',
        height: '100vh',
        width: 100,
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        spacing={3}
        sx={{width: '100%', height: '100%'}}
        justifyContent={'space-between'}
      >
        <Stack alignItems={'center'} spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img src={Logo} alt="Chat App logo" />
          </Box>
          <Stack
            spacing={3}
            sx={{width: 'max-content'}}
            direction="column"
            alignItems="center"
          >
            {Nav_Buttons.map (
              el =>
                el.index === selected
                  ? <Box
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5,
                      }}
                    >
                      <IconButton
                        key={el.index}
                        sx={{width: 'max-content', color: 'white'}}
                      >
                        {el.icon}
                      </IconButton>
                    </Box>
                  : <IconButton
                      key={el.index}
                      sx={{
                        width: 'max-content',
                        color: theme.palette.mode === 'dark'
                          ? theme.palette.text.primary
                          : 'black',
                      }}
                      onClick={() => {
                        setSelected (el.index);
                      }}
                    >
                      {el.icon}
                    </IconButton>
            )}
            <Divider sx={{width: '48px'}} />
            {selected === 3
              ? <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{width: 'max-content', color: 'white'}}>
                    <Gear />
                  </IconButton>
                </Box>
              : <IconButton
                  sx={{
                    width: 'max-content',
                    color: theme.palette.mode === 'dark'
                      ? theme.palette.text.primary
                      : 'black',
                  }}
                  onClick={() => {
                    setSelected (3);
                  }}
                >
                  <Gear />
                </IconButton>}
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <AntSwitch
            defaultChecked
            onChange={() => {
              onToggleMode ();
            }}
          />
          <Avatar src={faker.image.avatar ()} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
