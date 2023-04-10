import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import PopularItems from "../components/popular"
import Hero from "../components/hero"
import CategoryRow from "../components/categories"

const Blurb = styled.div`
    max-width: 45ch;
    padding-top: 4em;
    padding-bottom: 4em;
    margin: 0 auto;
    font-size: 18px;
`

const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <Blurb>
                <p>
                    Nick Basset & family have been baking in the Beulah area for
                    nearly 100 years. Our mission is simple: bring smiles to our
                    neighbors. We’re here to help celebrate all your life’s
                    moments, big or small!
                </p>
            </Blurb>
            <CategoryRow />
            <PopularItems />
        </Layout>
    )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
