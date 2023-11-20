import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Stack } from "@mui/material";
const DashboardLayout = () => {

  
  return (
    <Stack direction={'row'}>
      {/* SideBar */}
      <SideBar/>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
