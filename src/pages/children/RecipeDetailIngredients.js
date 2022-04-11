import React from 'react';
import { Table } from 'reactstrap';

export const RecipeDetailIngredients = ({ingredients}) => {

  return (
    <Table hover responsive>
      <tbody style={{textAlign: 'center'}}>
        {ingredients?.map((item, i)=>
          <tr key={i}>
            {item.isGroup?
              <th colSpan='3' style={{textAlign:'center'}}>
                <span>{item.name}</span>
              </th>:
              <>
                <td>{item.amount}</td>
                <td>{item.amountUnit}</td>
                {item.isGroup? null : <td>{item.name}</td>}
              </>}
          </tr>
        )}
      </tbody>
    </Table>
  )
}
