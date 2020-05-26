import styled from 'styled-components';

export const SpinnerLoading = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s infinite linear;
  border: 6px solid rgba(white, 0.7);
  border-top-color: white;

  &.orange {
    border-color: $black-60 #d2d2d2 #d2d2d2;
  }

  &.grey {
    border-color: #d2d2d2;
    border-top-color: #949494;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;

  .sc-spinner-value {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    transform: translateY(32%);
  }

  .orange ~ .sc-spinner-value {
    color: white;
  }

  .grey ~ .sc-spinner-value {
    color: #949494;
  }
`;
