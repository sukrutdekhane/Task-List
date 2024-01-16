import React from "react";

function Table(){
    return (<table>
        <tr>
          <th>Task</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>
          <input type="text" name="task"/>
          </td>
          <td>
          <input type="text" name="date"/>
          </td>
        </tr>
      </table>);
}

export default Table