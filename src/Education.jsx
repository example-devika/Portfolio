import React from "react";

function Education() {
  return (
    <div>
      <div className="edu">
        <h1>Education Details:</h1>
        <table>
          <tr>
            <th>Year of Passing</th>
            <th>Qualification</th>
            <th>University</th>
            <th>Percentage</th>
          </tr>
          <tr>
            <td>2015</td>
            <td>B-tech</td>
            <td>JNTU University</td>
            <td>75.6</td>
          </tr>
          <tr>
            <td>2018</td>
            <td>M-tech</td>
            <td>JNTU University</td>
            <td>76.8</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Education;
