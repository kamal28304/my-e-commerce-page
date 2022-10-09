import React from "react"
import { Navigate } from "react-router"




function UserRoute({user,children}) {
  if (!user) {
    return <Navigate to="/Login" />
  }
  return children;
}

export default UserRoute;