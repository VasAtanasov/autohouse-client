import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

// Search Container

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

// Modal

export const StyledModal = styled(Modal)`
    .modal-dialog {
        user-select: none;

        & .modal-content {
            .modal-body {
                padding: 0;
            }
        }

        @media (min-width: ${({ theme }) => theme.screens.medium}) {
            width: 435px;
            height: auto;
            border-radius: 5px;
            overflow: hidden;
        }
    }
`;

// Body Style Components

export const BodyStyleList = styled.ul`
    list-style: none;
    margin: 0px;
    padding: 0px 0px 20px;

    & li {
        color: rgb(102, 102, 102);
        display: inline-block;
        width: 50%;
        height: 100px;
        text-align: center;
    }
`;
export const BodyStyleIcon = styled.div`
    margin: 20px auto 0px;
    width: 132px;
    height: 78px;
    background-image: url(${(props) => props.mainImage});
    background-size: cover;
    background-position: 0% 50%;
`;

export const BodyStyleLabel = styled.div`
    font-size: 17px;
    font-weight: 100;
    color: rgb(51, 51, 51);
    text-align: center;
    height: 25px;
    margin-top: 10px;
`;

export const BodyStyleButton = styled.button`
    background-color: white;
    cursor: pointer;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;

    &:hover ${BodyStyleIcon} {
        background-image: url(${(props) => props.hoverImage});
        background-position: 20% 35%;
    }
`;

// Maker Models Components

export const OuterContainer = styled.div`
    height: calc(90vh - 60px);

    @media (min-width: ${({ theme }) => theme.screens.medium}) {
        height: calc(70vh - 60px);
        max-height: 600px;
        min-height: 200px;
    }
`;

export const ScrollListContainer = styled.div`
    height: 100%;
    overflow-y: auto;

    & ul {
        padding: 0;
        margin: 0;

        & li {
            height: 60px;
            line-height: 1.33;
            letter-spacing: 0.39px;
            text-align: left;
            cursor: pointer;
            font-size: 18px;
            font-weight: 300;
            color: rgb(51, 51, 51);
            position: relative;
            padding: 17px 0px 19px 25px;
            list-style: none;
            border-bottom: 1px solid rgb(235, 235, 235);

            &:hover {
                color: ${({ theme }) => theme.colors.defaultColor};
                background-color: rgb(242, 242, 242);
            }
        }
    }
`;
