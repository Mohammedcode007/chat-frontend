import { Box,  IconButton, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { UpdateSidebarType } from '../Redux/slices/app'
import { CaretLeft } from 'phosphor-react'
import Message from './Conversation/Message'


const StaredMessages = () => {
    const theme = useTheme()
    const dispatch = useDispatch()

  
    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
                <Box sx={{
                    boxShadow: '0 , 0 ,2px rgba(0 ,0,0,0.25)',
                    width: "100%",
                    backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background
                }}>
                    <Stack spacing={3} sx={{ p: 2, alignItems: "center", height: "100%" }} direction={"row"} >
                        <IconButton onClick={() => {
                            dispatch(UpdateSidebarType("CONTACT"));
                        }}>
                            <CaretLeft />
                        </IconButton>
                        <Typography variant='subtitle2'>
                            Stared Messages
                        </Typography>

                    </Stack>

                </Box>
              
                <Stack sx={{ position: "relative", height: "100%", flexGrow: 1, overflowY: "scroll" }} p={3} spacing={ 3}>
                    <Message />
                   
                </Stack>

            </Stack>
        </Box>
    )
}


export default StaredMessages
