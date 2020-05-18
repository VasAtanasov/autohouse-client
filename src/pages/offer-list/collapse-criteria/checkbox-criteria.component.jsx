import React from 'react';
import { Checkbox } from '../../../components';

const CheckboxCriteria = (props) => {
  const styledCompClass = props.className;
  const criteria = props.criteria;
  console.log(criteria);

  return (
    <div className={styledCompClass}>
      {criteria &&
        Object.entries(criteria).map(([key, value]) => (
          <Checkbox key={key} id={key} text={value} />
        ))}
    </div>
  );
};

export default CheckboxCriteria;
