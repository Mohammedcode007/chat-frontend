import React, { useState } from "react";
import { Box, Divider, IconButton, Stack, Avatar, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from '@faker-js/faker';
import useSettings from './../../hooks/useSettings';
import logo from "../../assets/Images/logo.ico";
import AntSwitch from "../../components/AntSwitch";


const SideBar = () => {
  const [Select, setSelect] = useState(0);
  const theme = useTheme();
  const { onToggleMode } = useSettings();



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        width: 100,
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
        spacing={3}
      >
        <Stack alignItems="center" spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              width: 64,
              height: 64,
              borderRadius: 1.5,
            }}
          >
            <img src={logo} alt="chat app logo" />
          </Box>
          <Stack
            spacing={3}
            width="max-content"
            alignItems="center"
            direction="column"
          >
            {Nav_Buttons.map((el) =>
              el.index === Select ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  key={el.index}
                >
                  <IconButton
                    sx={{
                      width: "max-content",
                      color: theme.palette.mode === "light" ? "#fff" : theme.palette.text.primary,
                    }}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelect(el.index)}
                  sx={{ width: "max-content", color: "#000" }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              )
            )}
            <Divider sx={{ width: "48px" }} />
            {Select === 3 ? (
              <Box
                p={1}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton
                  sx={{ width: "max-content", color: "#fff" }}
                >
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => setSelect(3)}
                sx={{ width: "max-content", color: "#000" }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>
        <Stack spacing={4} alignItems="center">
          <AntSwitch onChange={() => onToggleMode()} defaultChecked />
          <Avatar
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            src={faker.image.avatar()} />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical:"bottom",
              horizontal:"right"
            }}
            transformOrigin={{
              vertical:"bottom",
              horizontal:"left"
            }}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Stack px={1} spacing={1}>
              {
                Profile_Menu.map((el) => {
                  return (
                    <MenuItem onClick={handleClick}>
                      <Stack sx={{ width: 100 }} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <span>{el.title}</span>
                        {el.icon}
                      </Stack>
                    </MenuItem>

                  )
                })
              }

            </Stack>

          </Menu>
        </Stack>
      </Stack>
    </Box>
  )
}

export default SideBar
