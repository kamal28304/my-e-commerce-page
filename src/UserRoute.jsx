import React from "react"
import { Navigate } from "react-router"
import {withUser} from "./withProvider"



function UserRoute({user,children}) {
  if (!user) {
    return <Navigate to="/Login" />
  }
  return children;
}

export default withUser(UserRoute);