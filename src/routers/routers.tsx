import React, { useContext } from "react";
import AuthRoutes from "./authRoutes";
import AppRoutes from "./appRoutes";
import AuthContext from "../context/auth";

export default function Routers() {
  const {user} = useContext(AuthContext);
  console.log (user)
  return (
    user == null ? <AppRoutes /> : <AuthRoutes />

  );
}




