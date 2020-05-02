import styled from 'styled-components';

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: 63px;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;

    & .left,
    & .right {
        flex: 1;
        align-self: center;
    }

    & .right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;

export const NavBar = styled.nav`
    display: block;
`;

export const Brand = styled.span`
    font-size: 1.7em;
    letter-spacing: 1.2px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 800;

    & span {
        color: ${(props) => props.theme.colors.defaultColor};
    }
`;

export const Hamburger = styled.button`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
    background: none;
    border: none;
    margin-top: 5px;

    & .bar {
        background-color: #666;
        height: 1px;
        border-radius: 1px;
        width: 20px;
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
        color: ${(props) => props.theme.colors.defaultColor};
    }

    a:hover {
        color: ${(props) => props.theme.colors.defaultColor};
    }
`;
