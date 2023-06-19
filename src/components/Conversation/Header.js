import { Avatar, Box, Divider, IconButton, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { faker } from '@faker-js/faker';
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react';
import StyledBadge from '../StyledBadge';
import { ToggleSidebar } from '../../Redux/slices/app';
import { useDispatch } from 'react-redux';

const Header = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    return (
        <Box p={2} sx={{
            width: "100%",
            backgroundColor: theme.palette.mode === 'light' ? '#FFF' : theme.palette.background.paper,
            boxShadow: '0 , 0 ,2px rgba(0 ,0,0,0.25)'
        }}>
            <Stack sx={{ width: "100%", alignItems: "center", justifyContent: "space-between", height: "100%" }} direction={"row"}>
                <Stack direction={"row"} spacing={2}
                    onClick={() => {
                        dispatch(ToggleSidebar());
                    }}>
                    <Box>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
                        </StyledBadge>


                    </Box>
                    <Stack spacing={0.2}>
                        <Typography variant='subtitle2'>{faker.name.fullName()}</Typography>
                        <Typography variant='caption'>Online</Typography>

                    </Stack>
                </Stack>
                <Stack direction={"row"} spacing={3} alignItems={"center"}>
                    <IconButton>
                        <VideoCamera />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                    <IconButton>
                        <MagnifyingGlass />
                    </IconButton>
                    <Divider orientation='vertical' flexItem />
                    <IconButton>
                        <CaretDown />
                    </IconButton>
                </Stack>

            </Stack>
        </Box>
    )
}

export default Header
