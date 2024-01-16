import React from "react";
import TableHead from "./TableHead";
import './table.css'

function NewTable(props){
   return (<table>
    {/* <TableHead /> */}
     <tr>
        <td>{props.Task}</td>
        <td>{props.Date}</td>
     </tr>
   </table>)
}

export default NewTable;