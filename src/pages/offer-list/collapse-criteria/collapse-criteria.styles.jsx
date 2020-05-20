import styled from 'styled-components';

export const IconLabelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;

  & span {
    color: #555a60;
    font-weight: 600;
  }

  & i::before {
    margin-right: 8px;
    font-weight: 400;
    font-size: 18px;
    color: #555a60;
  }
`;

export const CollapseHeader = styled.header`
  position: relative;

  .collapse-arrow {
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    position: absolute;
    top: 36%;
    left: 0;
    font-size: 12px;
    transform: translateY(-50%);

    svg {
      transition: transform 0.24s;
    }
  }
`;

export const CollapseCriteriaWrapper = styled.div`
  margin-bottom: 10px;

  .collapse-body {
    margin-top: 5px;
  }
`;
