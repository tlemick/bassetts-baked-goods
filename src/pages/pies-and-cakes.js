import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const PiesAndCakes = ({ data }) => {
    return (
        <Layout pageTitle="Pies and cakes">
            <p>
                I mean, I prefer one over the other, but I'll eat both happily
            </p>
            <div>
                {data.allMdx.nodes.map((node) => (
                    <div key={node.frontmatter.slug}>
                        <Link to={node.frontmatter.slug}>
                            {node.frontmatter.name_of_good}
                        </Link>
                        <p>{node.frontmatter.price_per_base_unit}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
    {
        allMdx(
            filter: { frontmatter: { category: { eq: "pies and cakes" } } }
        ) {
            nodes {
                frontmatter {
                    base_unit
                    price_per_base_unit
                    name_of_good
                    type_of_good
                    slug
                }
                id
                excerpt
            }
        }
    }
`

export const Head = () => <Seo title="Pies and cakes" />

export default PiesAndCakes
