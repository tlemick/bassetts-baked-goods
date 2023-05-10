import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
    text-decoration: none;
    color: #111;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    /* transition: all 100ms ease-in; */
    position: relative;
    font-family: Zilla Slab, sans-serif;
    font-weight: bolder;

    :after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        content: ".";
        color: transparent;
        background: blue;
        height: 2px;
        /* transition: all 0.1s ease-in; */
    }

    :hover {
        color: blue;
        /* ::after {
            width: 100%;
        } */
    }

    @media (max-width: 768px) {
        padding: 20px 0;
        font-size: 1.5rem;
        z-index: 6;
    }
`
const Navbarlinks = () => {
    return (
        <>
            <NavItem to="/">Breads & Buns</NavItem>
            <NavItem to="/">Pies & Cakes</NavItem>
            <NavItem to="/">Pastries</NavItem>
            <NavItem to="/">Cookies & Treats</NavItem>
        </>
    )
}

export default Navbarlinks
