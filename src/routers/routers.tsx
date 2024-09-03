import React from "react";
import AuthRoutes from "./authRoutes";
import AppRoutes from "./appRoutes";

export default function Routers() {
    const user = null;
  return (
  
    user == null ? <AppRoutes/> : <AuthRoutes />  

  );
}


  

