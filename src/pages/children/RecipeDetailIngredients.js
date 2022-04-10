import React from 'react';
import { Table } from 'reactstrap';

export const RecipeDetailIngredients = ({ingredients}) => {
  return (
    <Table hover responsive >
      <tbody style={{textAlign: 'center'}}>
        <tr>
          <th colSpan='3' style={{textAlign:'center'}}>
            <span>akakak</span>
          </th>
        </tr>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  )
}
