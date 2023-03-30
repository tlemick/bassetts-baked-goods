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
        color: white;
    }
    li {
        font-weight: bold;
    }
`

const Navbar = styled.div`
    background-color: black;
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
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
                    <Link to="/breads-and-buns">Breads & Buns</Link>
                </li>
                <li>
                    <Link to="/pies-and-cakes">Pies & Cakes</Link>
                </li>
                <li>
                    <Link to="/breads-and-buns">Pastries</Link>
                </li>
                <li>
                    <Link to="/pies-and-cakes">Cookies & Treats</Link>
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
