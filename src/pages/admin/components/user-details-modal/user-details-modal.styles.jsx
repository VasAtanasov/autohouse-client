import styled from 'styled-components';

export const UserDetailsTable = styled.table`
  width: 100%;

  .name {
    font-size: 30px;
    border-bottom: 2px solid #888;
    margin-bottom: 10px;
    padding-left: 20px;
  }

  .name:first-letter {
    font-size: 300%;
  }

  .label {
    width: 100px;
    font-weight: bold;
  }

  .details-item,
  .label {
    display: inline-block;
    margin-bottom: 3px;
  }

  .details-td {
    white-space: nowrap;
    padding: 20px;
    border-bottom: 2px solid #888;
  }

  .description-td {
    position: relative;
    width: 100%;
    padding: 20px;
    text-align: justify;
    margin-top: 15px;
  }

  .description {
    outline: 0px solid transparent;
    border: 0px solid transparent;
  }

  .edit {
    position: absolute;
    top: 0px;
    right: 0;
    width: 13px;
    height: 13px;
    cursor: pointer;
  }

  .update {
    display: none;
    position: absolute;
    right: 20px;
    bottom: 0;
    background: #c2e59c;
    border: 0;
    padding: 5px;
    width: 80px;
    color: #333;
    outline: 0px solid transparent;
    border: 0px solid transparent;
  }

  .roles-container {
    position: relative;
  }
`;
