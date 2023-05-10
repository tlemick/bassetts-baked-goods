import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LogoWrap = styled.div`
    margin: auto 0;
    flex: 0 1 24px;

    @media (max-width: 768px) and (orientation: landscape) {
        flex: 0 1 24px;
    }
`

const Circle = styled.div`
    border: 3px solid white;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    text-align: center;
    p {
        color: white;
        text-decoration: none;
        font-size: 1.7rem;
        font-family: Zilla Slab, sans-serif;
    }

    @media (max-width: 768px) {
        height: 36px;
        width: 36px;
        border: 2px solid black;
        text-decoration: none;
        text-decoration-color: white;
        p {
            color: black;
            font-size: 1.3rem;
        }
    }
`

const Logo = () => {
    return (
        <LogoWrap /*as={Link} to="/"*/>
            <Circle>
                <p
                    style={{
                        textDecoration: `none`,
                        textDecorationColor: `white`,
                    }}
                >
                    B
                </p>
            </Circle>
        </LogoWrap>
    )
}

export default Logo
