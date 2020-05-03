import styled from 'styled-components';

export const LoadingScreen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 50;

    & .loading-image-container {
        font-weight: bold;
        font-size: 21px;
        color: #000;
        position: relative;
        top: 50%;
        margin-top: -100px;

        & .loading-image {
            margin: 0 auto;
            width: 200px;
            height: 200px;
            position: relative;
            border: 3px solid transparent;
            border-top-color: ${({ theme }) => theme.colors.defaultColor};
            border-radius: 50%;
            animation: spin 3s linear infinite;
        }

        & .loading-image:before {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            border: 3px solid transparent;
            border-top-color: ${({ theme }) => theme.colors.defaultColor};
            border-radius: 50%;
            animation: spin 3s linear infinite;
        }

        & .loading-image:after {
            content: '';
            position: absolute;
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
            border: 3px solid transparent;
            border-top-color: ${({ theme }) => theme.colors.defaultColor};
            border-radius: 50%;
            animation: spin 1.5s linear infinite;
        }

        @-webkit-keyframes spin {
            0% {
                -webkit-transform: rotate(0deg);
                -ms-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                -ms-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
        @keyframes spin {
            0% {
                -webkit-transform: rotate(0deg);
                -ms-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                -ms-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
    }
`;
