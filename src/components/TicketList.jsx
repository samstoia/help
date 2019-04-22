import React from "react";
import Ticket from "./Ticket"

function TicketList(){
  return (
    <div>
    <Ticket
      location="3A"
      names="Thato and Haley"
      issue="Firebase will not save record!"/>
    <Ticket
    location="3B"
    names="Thato and Haley"
    issue="Firebase will not save record!"/>
    </div>
  );
}

export default TicketList;