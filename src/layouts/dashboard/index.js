import { Stack } from "@mui/material";
import {  Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { useState } from "react";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  // const [isAuthenticated,setisAuthenticated] = useState(false)
  const { isLoggedIn } = useSelector((state) => state.auth);

  const navigate = useNavigate();
const HandleAuth =()=>{
  if(!isLoggedIn  ){
    navigate('/auth/login')
    return null
  }
}
useEffect(()=>{
  HandleAuth()
},[isLoggedIn])
  
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
