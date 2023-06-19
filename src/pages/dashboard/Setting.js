import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import {
  CaretLeft,
  Bell,
  Lock,
  Key,
  PencilCircle,
  Image,
  Note,
  Keyboard,
  Info,
} from "phosphor-react";

import { useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import ShortcutDialog from "../../sections/settings/ShortcutDialog";
import ThemeDialogs from "../../sections/settings/ThemeDialogs";

const Setting = () => {
  const theme = useTheme();

  const [openTheme, setOpenTheme] = useState(false);

  const handleOpenTheme = () => {
    setOpenTheme(true);
  };

  const handleCloseTheme = () => {
    setOpenTheme(false);
  };
  const [openShortcuts, setOpenShortcuts] = useState(false);

  const handleOpenShortcuts = () => {
    setOpenShortcuts(true);
  };

  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
  };

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => { },
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => { },
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => { },
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      onclick: handleOpenTheme,
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => { },
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => { },
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenShortcuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => { },
    },
  ];
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/*LeftPanel */}
        <Box
          sx={{
            backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
            width: 320,
            boxShadow: '0 , 0 ,2px rgba(0 ,0,0,0.25)',

            overflowY: 'scroll',
            height: '100vh',
            '&::-webkit-scrollbar': {
              width: '5px',
              background: 'transparent',

            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#ccc',
              borderRadius: '4px',
              '&:hover': {
                background: '#aaa',
              },
            },
          }}
        >
          <Stack p={4} spacing={5}>
            {/*header */}
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <IconButton>
                <CaretLeft size={24} color='#4B4B4B' />
              </IconButton>
              <Typography variant='h6'>Settings</Typography>
            </Stack>
            {/*profile */}
            <Stack spacing={3} direction={3}>
              <Avatar sx={{ width: 56, height: 56, marginRight: "20px" }} src={faker.image.avatar()} alt={faker.name.firstName()} />
              <Stack spacing={0.5}>
                <Typography variant='artical'>
                  {faker.name.fullName()}
                </Typography>
                <Typography variant='body2'>
                  {faker.random.words()}
                </Typography>
              </Stack>
            </Stack>
            {/*list of options */}

            <Stack spacing={4}>
              {list.map(({ key, icon, title, onclick }) => {
                return (
                  <>
                    <Stack
                      onClick={onclick}
                      sx={{ cursor: "pointer" }}
                      spacing={2}
                    >
                      <Stack alignItems={"center"} direction="row" spacing={2}>
                        {icon}
                        <Typography variant="body2">{title}</Typography>
                      </Stack>
                      {key !== 7 && <Divider />}
                    </Stack>
                  </>
                );
              })}
            </Stack>
          </Stack>
        </Box>

        {/*RightPanel */}

        <Box
          sx={{
            height: "100%",
            width: "calc(100vw - 420px )",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#FFF"
                : theme.palette.background.paper,
            borderBottom: "6px solid #0162C4",
          }}
        ></Box>
      </Stack>
      {openTheme && (
        <ThemeDialogs open={openTheme} handleClose={handleCloseTheme} />
      )}
      {openShortcuts && <ShortcutDialog open={openShortcuts} handleClose={handleCloseShortcuts} />}

    </>
  )
}

export default Setting
