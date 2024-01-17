import React from "react";
import App from "../../App";

function AppendRow(props){
   return (
     <tr>
     {props.Task? <td>{props.Task}</td> :<td>{props.Date}</td>}
     </tr>
   )
}

export default AppendRow;