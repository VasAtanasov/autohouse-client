import React from 'react';
import Card from 'react-bootstrap/Card';

const PriceComponent = ({ price, id, bodyTypes, handleSearch }) => (
  <Card>
    <Card.Header>
      <div
        onClick={() =>
          handleSearch({
            priceFrom: 0,
            priceTo: Number(price),
          })
        }
      >{`Under $ ${price.toLocaleString()}`}</div>
    </Card.Header>
    <Card.Body>
      <ul>
        {bodyTypes.map((body, idx) => (
          <li
            key={body + idx}
            onClick={() =>
              handleSearch({
                priceFrom: 0,
                priceTo: Number(price),
                bodyStyle: body,
              })
            }
          >
            {body} under $ {price.toLocaleString()}
          </li>
        ))}
      </ul>
    </Card.Body>
  </Card>
);

export default PriceComponent;
