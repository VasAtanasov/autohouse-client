import styled from 'styled-components';

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    opacity: 0.5;
    background: #000000;
    min-height: ${props => props.theme.heroSize};
`;

export const Wrapper = styled.div`
    width: 100%;
    min-height: ${props => props.theme.heroSize};
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    background-image: ${({ url }) => `url(${url})`};

    p {
        font-size: 32px;
    }

    @media (max-width: ${props => props.theme.screens.large}) {
        p {
            font-size: 20px;
        }
    }

    @media (max-width: ${props => props.theme.screens.medimum}) {
        p {
            font-size: 16px;
        }
    }
`;
