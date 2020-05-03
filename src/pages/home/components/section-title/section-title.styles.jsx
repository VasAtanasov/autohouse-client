import styled from 'styled-components';

export const SectionTitleContainer = styled.h2`
    position: relative;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1rem;
    text-align: center;
    letter-spacing: 0.3px;
    margin: 1rem 0;

    &::before {
        content: '';
        display: block;
        border-top: solid 1px #d3d3d3;
        width: 100%;
        height: 1px;
        position: absolute;
        top: 50%;
        z-index: 1;
    }
`;

export const Title = styled.span`
    padding: 0px 10px;
    position: relative;
    z-index: 5;
    background-color: white;
    /* color: #555; */
`;
