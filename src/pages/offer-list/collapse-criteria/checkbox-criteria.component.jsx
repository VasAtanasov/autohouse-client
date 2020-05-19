import React from 'react';
import { Checkbox } from '../../../components';

const CheckboxCriteria = ({ criteria }) => {
  return (
    <div>
      {criteria &&
        Object.entries(criteria).map(([key, value]) => (
          <Checkbox key={key} id={key} text={value} />
        ))}
    </div>
  );
};

export default CheckboxCriteria;
