import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const CategoryPageTemplate = ({ data, pageContext }) => {
    const products = data?.allMdx.nodes || []

    return (
        <Layout>
            <Seo title={pageContext?.category} />
            <h1 style={{ marginTop: `4rem` }}>{pageContext?.category}</h1>
            <ol style={{ listStyle: `none` }}>
                {products?.map((product) => {
                    const title = product?.frontmatter?.slug

                    return (
                        <li key={product?.fields?.slug}>
                            <header>
                                <h2>
                                    <Link to={product?.fields?.slug || ""}>
                                        <span itemProp="headline">{title}</span>
                                    </Link>
                                </h2>
                            </header>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default CategoryPageTemplate

export const pageQuery = graphql`
    query CategoryPageByType($category: String!) {
        site {
            siteMetadata {
                title
            }
        }
        allMdx(filter: { frontmatter: { category: { eq: $category } } }) {
            nodes {
                frontmatter {
                    slug
                    category
                }
                id
                excerpt
            }
        }
    }
`
