/* eslint-disable no-unused-vars */
import { Box, IconButton, InputAdornment, Stack, TextField, useTheme } from '@mui/material'
import React from 'react'
import { styled } from "@mui/material/styles";
import { LinkSimple, PaperPlaneTilt, Smiley } from 'phosphor-react';
import Header from './Header';
import Footer from './Footer';
import Message from './Message';








const Conversation = () => {
    const theme = useTheme()

    return (
        <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
            {/* chats header */}
            <Header />
            {/* chats */}
            <Box sx={{
                    flexGrow: 1,
                    width:"100%",
                    overflowY: 'scroll',
                    height: '100%',
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
                }}>
                <Message menu={true} />

            </Box>
            {/* chats footer */}
            <Footer />

        </Stack>
    )
}

export default Conversation
