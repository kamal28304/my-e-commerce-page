import React,{useContext} from "react";
import { UserContext } from "./Contexts"


function withUser(IncomingComponent){
 
  function OutgoingComponent(props){
     const  userData=useContext(UserContext);
    return <IncomingComponent  {...props} {...userData}/> ;
  }
  return OutgoingComponent;
}

export default withUser;