import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./styles.css"
import Footer from "./footer"
import Nav from "./nav"

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
            <Nav />
            <header></header>
            <main>{children}</main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
