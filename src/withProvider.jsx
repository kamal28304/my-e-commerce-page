import React, { useContext } from "react";
import {UserContext,AlertContext} from "./Contexts"


const withProvider=(provider)=>(IncomingComponent)=>(props)=>{
    const contextData = useContext(provider);
    return <IncomingComponent  {...props} {...contextData} />
};


export default withProvider;

export const withUser=withProvider(UserContext)
export const withAlert=withProvider(AlertContext)

