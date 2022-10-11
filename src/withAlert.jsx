import React, { useContext } from "react";
import { AlertContext } from "./Contexts"


function withAlert(IncomingComponent) {
function OutgoingComponent(props) {
    const alertData = useContext(AlertContext);
    return <IncomingComponent  {...props} {...alertData} />;
  }
  return OutgoingComponent;
}

export default withAlert;