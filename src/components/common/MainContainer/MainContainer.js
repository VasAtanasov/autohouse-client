import styled from 'styled-components';

const MainContainer = styled.div`
    max-width: ${props => props.theme.screens.large};
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow-x: hidden;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
`;

export default MainContainer;
