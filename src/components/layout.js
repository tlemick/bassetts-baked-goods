import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Footer from "./footer"
import Nav from "./nav"

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html, body {
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    #root, #__next {
        isolation: isolate;
    }

    body {
        color: black;
        background-color: #faf1e2;
        font-family: Zilla-Slab;
    }

`

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <React.Fragment>
            <GlobalStyle />
            <Nav />
            <header></header>
            <main>{children}</main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
