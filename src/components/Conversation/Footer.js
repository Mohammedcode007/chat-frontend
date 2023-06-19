import { Box, Fab, IconButton, InputAdornment, Stack, TextField, Tooltip, styled, useTheme } from '@mui/material'
import React, { useState } from 'react'
import data from '@emoji-mart/data'
import {
    Camera,
    File,
    Image,
    LinkSimple,
    PaperPlaneTilt,
    Smiley,
    Sticker,
    User,
} from "phosphor-react";
import Picker from '@emoji-mart/react'
const StyledInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        paddingTop: "12px",
        paddingBottom: "12px",

    }
}));
const Footer = () => {
    const [openPicker, setopenPicker] = useState(false)
    const theme = useTheme()

    const Actions = [
        {
            color: "#4da5fe",
            icon: <Image size={24} />,
            y: 102,
            title: "Photo/Video",
        },
        {
            color: "#1b8cfe",
            icon: <Sticker size={24} />,
            y: 172,
            title: "Stickers",
        },
        {
            color: "#0172e4",
            icon: <Camera size={24} />,
            y: 242,
            title: "Image",
        },
        {
            color: "#0159b2",
            icon: <File size={24} />,
            y: 312,
            title: "Document",
        },
        {
            color: "#013f7f",
            icon: <User size={24} />,
            y: 382,
            title: "Contact",
        },
    ];
    const ChatInput = () => {
        const [openAction,setopenAction]= useState(false)
        return (
            <StyledInput fullWidth placeholder='Write a message......' variant='filled' InputProps={{
                disableUnderline: true,
                startAdornment:
                    <Stack sx={{ width: "max-conten" }}>
                        <Stack display={openAction ?  "inline-block":"none"} sx={{ position: "relative" }}>
                            {Actions.map((el) => {
                                return (
                                    <Tooltip placement='right' title={el.title}>
                                        <Fab sx={{backgroundColor:el.color,position:"absolute",top:-el.y}}>
                                        {el.icon}
                                    </Fab>
                                    </Tooltip>
                                    
                                )
                            })}

                        </Stack>
                        <InputAdornment>
                            <IconButton onClick={()=>setopenAction(!openAction)}>
                                <LinkSimple />
                            </IconButton>
                        </InputAdornment>
                    </Stack>
                ,
                endAdornment: <InputAdornment>
                    <IconButton onClick={() => setopenPicker(!openPicker)}>
                        <Smiley />
                    </IconButton>
                </InputAdornment>
            }} />
        )
    }
    return (
        <Box p={2} sx={{ width: "100%", backgroundColor: theme.palette.mode === 'light' ? '#FFF' : theme.palette.background.paper, boxShadow: '0 , 0 ,2px rgba(0 ,0,0,0.25)' }}>
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
                <Stack width={"100%"}>
                    <Box sx={{ display: openPicker ? "inline" : "none", position: 'fixed', right: 100, bottom: 81, zIndex: 10 }}>
                        <Picker theme={theme.palette.mode} data={data} onEmojiSelect={console.log} />

                    </Box>

                    <ChatInput />

                </Stack>
                <Box sx={{ width: 48, height: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                    <Stack alignItems={"center"} height={"100%"} width={"100%"} justifyContent={"center"}>
                        <IconButton>
                            <PaperPlaneTilt color='#fff' />
                        </IconButton>
                    </Stack>

                </Box>

            </Stack>

        </Box>
    )
}

export default Footer
