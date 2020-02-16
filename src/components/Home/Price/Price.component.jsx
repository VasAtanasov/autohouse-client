import React from 'react';
import Card from 'react-bootstrap/Card';

const PriceComponent = ({ price, id, bodyTypes }) => (
    <Card>
        <Card.Header>{`Under ${price} EUR`}</Card.Header>
        <Card.Body>
            <ul>
                {bodyTypes.map((body, idx) => (
                    <li key={body + idx}>
                        {body} under {price} EUR
                    </li>
                ))}
            </ul>
        </Card.Body>
    </Card>
);

export default PriceComponent;
