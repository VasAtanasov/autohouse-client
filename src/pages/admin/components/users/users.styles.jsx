import styled from 'styled-components';

export const TableMain = styled.main`
  flex: 1 1 100%;
  width: 100%;

  .user-row {
    cursor: pointer;
    user-select: none;
  }

  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border-bottom: 1px solid #eee;
    }

    tr:nth-child(odd) {
      background: #ccc;
    }

    td {
      border: none;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      position: absolute;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    td:nth-of-type(1):before {
      content: '#';
    }
    td:nth-of-type(2):before {
      content: 'Username';
    }
    td:nth-of-type(3):before {
      content: 'Is active';
    }
    td:nth-of-type(4):before {
      content: 'Has Account';
    }
    td:nth-of-type(5):before {
      content: 'Roles';
    }
  }
`;

export const PaginationContainer = styled.div`
  flex: 0 0 20px;
  margin: 0 auto;
`;
