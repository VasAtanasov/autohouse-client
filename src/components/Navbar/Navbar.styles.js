import styled from 'styled-components';

export const NavbarWrapper = styled.div`
    margin: 0 auto;
    max-width: ${props => props.theme.screens.large};
`;

export const Brand = styled.span`
    font-size: 20px;
    padding: 10px 20px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 800;

    & span {
        color: ${props => props.theme.colors.autoriaColor};
    }
`;

export const StyledLink = styled.span`
    a {
        display: block;
        padding: 0.5rem 0.5rem;
        font-size: 15px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-weight: 600;
    }

    a.active {
        color: ${props => props.theme.colors.autoriaColor};
    }

    a:hover {
        color: ${props => props.theme.colors.autoriaColor};
    }
`;
