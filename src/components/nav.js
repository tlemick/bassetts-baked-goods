import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navmenu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
    list-style-type: none;
    justify-content: center;
    height: 60px;
    padding-left: 5%;
    padding-right: 5%;
    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
    li {
        font-weight: bold;
    }
`

const Navbar = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
    background: var(--main-color-400);
    border-bottom: 2px solid black;
`

const NavHeader = styled.div``
const NavCart = styled.div``

const Nav = () => {
    return (
        <Navbar>
            <NavHeader>
                <Link to="/">
                    <StaticImage
                        src="../images/antlers.webp"
                        alt="logo"
                        placeholder="blurred"
                        layout="fixed"
                        backgroundColor="transparent"
                        quality="100"
                        width={60}
                    />
                </Link>
            </NavHeader>
            <Navmenu>
                <li>
                    <Link to="">Breads & Buns</Link>
                </li>
                <li>
                    <Link to="">Pies & Cakes</Link>
                </li>
                <li>
                    <Link to="">Pastries</Link>
                </li>
                <li>
                    <Link to="">Cookies & Treats</Link>
                </li>
            </Navmenu>
            <NavCart>
                <StaticImage
                    src="../images/basket2.webp"
                    alt="cart"
                    placeholder="blurred"
                    layout="fixed"
                    backgroundColor="transparent"
                    quality="100"
                    width={24}
                />
            </NavCart>
        </Navbar>
    )
}

export default Nav
