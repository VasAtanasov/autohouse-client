import React from 'react';
import Collapse from 'react-bootstrap/Collapse';
import {
  IconLabelWrapper,
  CollapseCriteriaWrapper,
  CollapseHeader,
} from './collapse-criteria.styles';
import { ReactComponent as Arrow } from './icon/arrow.svg';

const CollapseCriteria = ({ title, isActive, key, iconClass, children }) => {
  const [open, setOpen] = React.useState(isActive);

  return (
    <CollapseCriteriaWrapper>
      <CollapseHeader onClick={() => setOpen(!open)} aria-expanded={open}>
        <i aria-label="icon: right" className="collapse-arrow">
          <Arrow style={{ transform: `rotate(${open ? 90 : 0}deg)` }} />
        </i>
        <IconLabelWrapper>
          <label>
            <i className={iconClass}></i>
            <span>{title}</span>
          </label>
        </IconLabelWrapper>
      </CollapseHeader>
      <Collapse in={open}>
        <div className="collapse-body">{children}</div>
      </Collapse>
    </CollapseCriteriaWrapper>
  );
};

export default CollapseCriteria;
