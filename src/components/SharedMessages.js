import { Box, Grid, IconButton, Stack, Tab, Tabs, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { UpdateSidebarType } from '../Redux/slices/app'
import { CaretLeft } from 'phosphor-react'
import { faker } from '@faker-js/faker'
import { Shared_links } from '../data'
import { DocMsg, LinkMsg } from './Conversation/MsgTypes'

const SharedMessages = () => {
    const theme = useTheme()
    const dispatch = useDispatch()

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                            Shared Messages
                        </Typography>

                    </Stack>

                </Box>
                <Tabs sx={{ py: 2 }} value={value} onChange={handleChange} centered>
                    <Tab label="Media" />
                    <Tab label="Link" />
                    <Tab label="Doc" />
                </Tabs>
                <Stack sx={{ position: "relative", height: "100%", flexGrow: 1, overflowY: "scroll" }} p={3} spacing={value === 1 ? 1 : 3}>
                    {(() => {
                        switch (value) {

                            case 0:
                                return <Grid container spacing={2}>
                                    {[0, 1, 2, 3, 4, 5, 6,].map((el) => {
                                        return <Grid key={el.index} item xs={4}>
                                            <img src={faker.image.avatar()} alt={faker.name.firstName()} />

                                        </Grid>
                                    })}

                                </Grid>
                            case 1:
                                return Shared_links.map((el) => {
                                    return <LinkMsg el={el} key={el.index} />
                                })
                            case 2:
                                return Shared_links.map((el) => {
                                    return <DocMsg el={el} key={el.index} />
                                })
                            default:
                                break;
                        }
                    })()}
                </Stack>

            </Stack>
        </Box>
    )
}

export default SharedMessages
