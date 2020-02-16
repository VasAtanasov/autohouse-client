import styled from 'styled-components';
import Col from 'react-bootstrap/Col';

export const IconLabelWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    cursor: pointer;
    transition: 0.1s;

    :hover i:before,
    :hover span {
        color: ${props => props.theme.colors.autoriaColor};
    }

    & span {
        flex: 0 0 100%;
        color: #555a60;
        display: block;
        text-align: center;
        margin-top: 10px;
    }

    & i::before {
        flex: 0 0 100%;
        font-weight: 400;
        font-size: 50px;
        color: #767676;
    }
`;

export const BrandWrapper = styled(Col)`
    @media (min-width: 768px) {
        flex: 0 0 11.1% !important;
    }
`;
