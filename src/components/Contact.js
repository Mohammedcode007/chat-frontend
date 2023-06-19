import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X
} from 'phosphor-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ToggleSidebar, UpdateSidebarType } from '../Redux/slices/app';
import { faker } from '@faker-js/faker';
import AntSwitch from './AntSwitch';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({ open, handleClose }) => {
  console.log(open);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Block this Contact ?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to block this contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

const DeleteDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Delete this Chat ?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to delete this chat?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleClickOpenBlock = () => {
    setOpenBlock(true);
  };

  const handleCloseBlock = () => {
    setOpenBlock(false);
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box sx={{
          boxShadow: '0 , 0 ,2px rgba(0 ,0,0,0.25)',
          width: "100%",
          backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background
        }}>
          <Stack spacing={3} sx={{ p: 2, alignItems: "center", height: "100%", justifyContent: "space-between" }} direction={"row"} >
            <Typography variant='subtitle2'>
              Contact Info
            </Typography>
            <IconButton onClick={() => {
              dispatch(ToggleSidebar());
            }}>
              <X />
            </IconButton>
          </Stack>

        </Box>

        <Stack sx={{ position: "relative", height: "100%", flexGrow: 1, overflowY: "scroll" }} p={3} spacing={3}>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} sx={{ height: 64, width: 64 }} />
            <Stack spacing={0.5}>
              <Typography variant='artical' fontWeight={600}>{faker.name.fullName()}</Typography>
              <Typography variant='artical' fontWeight={500}>+958 457 98 5</Typography>

            </Stack>
          </Stack>

          <Stack direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant='overline'>Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant='overline'>Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack>
            <Typography variant='artical'>About</Typography>
            <Typography variant='body2'>Imagtion is only limit</Typography>

          </Stack>
          <Divider />
          <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Typography variant='subtitle2'>Media , doc Links</Typography>
            <Button endIcon={<CaretRight />} onClick={() => {
              dispatch(UpdateSidebarType("SHARED"));

            }}>
              401
            </Button>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            {[1, 2, 3].map((el) => (
              <Box key={el}>
                <img src={faker.image.food()} alt={faker.name.firstName()} />
              </Box>
            ))}

          </Stack>
          <Divider />
          <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Stack direction={"row"} alignItems={"center"} spacing={2} >
              <Star size={21} />
              <Typography variant='subtitle2'>Starred Message</Typography>

            </Stack>
            <IconButton onClick={() => {
              dispatch(UpdateSidebarType("STARRED"));

            }}>
              <CaretRight />

            </IconButton>
          </Stack>


          <Divider />
          <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Stack direction={"row"} alignItems={"center"} spacing={2} >
              <Bell size={21} />
              <Typography variant='subtitle2'>Mute Notifcation</Typography>

            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography>1 Group in common</Typography>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} />
            <Stack spacing={0.5}>
              <Typography variant='subtitle2'>Coding munk</Typography>
              <Typography variant='caption'>Owl ,pallit , rappit</Typography>

            </Stack>
          </Stack>

          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Button onClick={()=>handleClickOpenBlock()} startIcon={<Prohibit />} fullWidth variant='outlined'>
              Block
            </Button>
            <Button onClick={()=>handleClickOpenDelete()} startIcon={<Trash />} fullWidth variant='outlined'>
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {openBlock === true ? <BlockDialog handleClose={handleCloseBlock} open={openBlock} /> : null}
      {openDelete === true ? <DeleteDialog handleClose={handleCloseDelete} open={openDelete} /> : null}
    </Box>
  )
}

export default Contact
