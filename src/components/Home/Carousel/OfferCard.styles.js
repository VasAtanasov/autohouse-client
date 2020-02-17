import styled from 'styled-components';

export const OfferCardContainer = styled.div`
    cursor: pointer;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 15px;

    & .preloader {
        display: none;
    }

    & .body-type-image {
        position: relative;
        width: 100%;
        height: 141px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-color: #eff2f3;

        &:after {
            box-shadow: inset 0 0 0 1px #e0e3e4;
            display: block;
            width: 100%;
            position: inherit;
            content: '';
        }

        &:before {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-top-color: #7bccff;
            width: 0;
            height: 0;
            padding: 10%;
            -webkit-animation: spin 2s linear infinite;
            animation: spin 2s linear infinite;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            border-radius: 50%;
            content: '';

            @-webkit-keyframes spin {
                0% {
                    -webkit-transform: rotate(0deg);
                    transform: rotate(0deg);
                }
                to {
                    -webkit-transform: rotate(1turn);
                    transform: rotate(1turn);
                }
            }
            @keyframes spin {
                0% {
                    -webkit-transform: rotate(0deg);
                    transform: rotate(0deg);
                }
                to {
                    -webkit-transform: rotate(1turn);
                    transform: rotate(1turn);
                }
            }
        }
    }

    & span.caption {
        display: inline-block;
        text-align: center;
        color: #555a60;
        margin: auto;
        font-weight: 600;
        font-weight: 500;
        letter-spacing: 0.5px;
        /* text-transform: uppercase; */
        transition: 0.2s;
        overflow: hidden;
        /* color: rgba(0, 0, 0, 0.85); */
        font-size: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    :hover span.caption {
        color: ${props => props.theme.colors.autoriaColor};
    }
`;
