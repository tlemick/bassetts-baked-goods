import React, { useState } from "react"
import styled from "styled-components"
import Logo from "./logo"
import Navbarlinks from "./navbarlinks"
import "./styles.css"

const Navigation = styled.nav`
    height: 10vh;
    display: flex;
    flex-direction: row;
    //background-color: var(--main-color-400);
    position: fixed;
    top: 0;
    width: 100%;
    justify-content: space-between;
    align-content: flex-end;
    text-transform: uppercase;
    margin: 0 auto;
    padding: 0 2.5% 0 20px;
    z-index: 3;

    @media (max-width: 768px) {
        background-color: var(--main-color-300);
        position: fixed;
        height: 8vh;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }
`

const Toggle = styled.div`
    display: none;
    height: 100%;
    cursor: pointer;
    padding: 0 10vw;

    @media (max-width: 768px) {
        display: flex;
        padding-right: 2.5%;
    }
`

const Navbox = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        position: fixed;
        width: 100vw;
        justify-content: flex-start;
        padding-top: 10vh;
        background-color: #fff;
        transition: all 0.3s ease-in;
        top: 8vh;
        left: ${(props) => (props.open ? "-100%" : "0")};
    }
`

const Hamburger = styled.div`
    background-color: #111;
    width: 30px;
    height: 3px;
    transition: all 0.3s linear;
    align-self: center;
    position: relative;
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

    ::before,
    ::after {
        width: 30px;
        height: 3px;
        background-color: #111;
        content: "";
        position: absolute;
        transition: all 0.3s linear;
    }

    ::before {
        transform: ${(props) =>
            props.open
                ? "rotate(-90deg) translate(-10px, 0px)"
                : "rotate(0deg)"};
        top: -10px;
    }

    ::after {
        opacity: ${(props) => (props.open ? "0" : "1")};
        transform: ${(props) =>
            props.open ? "rotate(90deg) " : "rotate(0deg)"};
        top: 10px;
    }
`
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <Navigation>
            <Logo />
            <Toggle
                navbarOpen={navbarOpen}
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {navbarOpen ? (
                <Navbox>
                    <Navbarlinks />
                </Navbox>
            ) : (
                <Navbox open>
                    <Navbarlinks />
                </Navbox>
            )}
        </Navigation>
    )
}

export default Navbar
{
    /* <NavCart>
                <StaticImage
                    src="../images/basket2.webp"
                    alt="cart"
                    placeholder="blurred"
                    layout="fixed"
                    backgroundColor="transparent"
                    quality="100"
                    width={24}
                />
            </NavCart> */
}
