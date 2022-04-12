import React, { useState } from 'react';
import { Col, Input, Row, Table } from 'reactstrap';

export const RecipeDetailIngredients = ({ingredients, servings = 1}) => {

  const [amount, setAmount] = useState(servings);
  const handleServings = (e) => {
    setAmount(e.target.value);
  }

  return (
    <>
      <Row>
        <Col>
          <span>Počet porcií</span>
        </Col>
        <Col>
          <Input
            type='number'
            min='1'
            defaultValue={servings? servings: 1}
            onChange={handleServings}
          />
        </Col>
      </Row>
      <Table hover responsive>
        <tbody style={{textAlign: 'center'}}>
          {ingredients?.map((item, i)=>
            <tr key={i}>
              {item.isGroup?
                <th colSpan='3' style={{textAlign:'center'}}>
                  <span>{item.name}</span>
                </th>:
                <>
                  <td>{item.amount && Number(((item.amount / servings) * amount).toFixed(2))}</td>
                  <td>{item.amountUnit}</td>
                  {item.isGroup? null : <td>{item.name}</td>}
                </>}
            </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}
