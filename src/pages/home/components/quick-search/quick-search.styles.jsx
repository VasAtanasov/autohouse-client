import styled from 'styled-components';

export const SearchContainer = styled.div`
    position: relative;
    top: 0;
    width: 80%;
    border-radius: 5px;
    margin: 20px auto 0 auto;
    padding: 32px;
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
`;

export const TypeLabel = styled.div`
    text-transform: uppercase;
    color: white;
    font-size: 16px;
    font-weight: 600;
    margin: 15px 0;
`;

export const SearchButton = styled.button`
    border: solid 2px white;
    color: white;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    cursor: pointer;
    text-align: center;
    padding: 13px;
    background-color: transparent;
    width: 180px;
    margin-top: 14px;

    &:first-of-type {
        margin-top: 0;
    }
`;
