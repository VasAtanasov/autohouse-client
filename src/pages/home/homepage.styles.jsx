import styled from 'styled-components';

export const HomeSectionContainer = styled.section`
    overflow: hidden;
    padding: 2rem 15px 15px;

    @media screen and (min-width: ${({ theme }) => theme.screens.large}) {
        width: 980px;
        background-color: white;
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;
    }

    @media screen and (min-width: ${({ theme }) => theme.screens.extraLarge}) {
        width: 1190px;
    }
`;
