import { Stack } from "@mui/material";
import {  Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const DashboardLayout = () => {
  const [isAuthenticated,setisAuthenticated] = useState(false)

  const navigate = useNavigate();
const HandleAuth =()=>{
  if(!isAuthenticated  ){
    navigate('/auth/login')
    return null
  }
}
useEffect(()=>{
  HandleAuth()
},[isAuthenticated])
  
  return (
    <Stack
      direction={"row"}
    >
      {/* SideBar */}
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
