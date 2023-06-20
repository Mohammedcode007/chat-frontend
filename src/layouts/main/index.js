import { Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/logo.ico"
const MainLayout = () => {
  const [isAuthenticated,setisAuthenticated] = useState(false)

  const navigate = useNavigate();
const HandleAuth =()=>{
  if(isAuthenticated  ){
    navigate('/auth/login')
    return null
  }
}
useEffect(()=>{
  HandleAuth()
},[isAuthenticated])
  
  return (
    <>
    <Container sx={{mt:5}} maxWidth="sm">
      <Stack spacing={5}>
        <Stack alignItems={"center"} direction={"column"} sx={{width:"100%"}}>
<img style={{width:120 ,height:120}} alt="logo" src={logo} />
        </Stack>

      </Stack>
    {/* <div>Main Layout</div> */}

<Outlet />
    </Container>
     
    </>
  );
};

export default MainLayout;
