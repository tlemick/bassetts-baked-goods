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

//  This category page will
//  Understand which category page it is trying to populate e.g. "breads-and-buns"
//  Then, it will send a graphql query to find all products that are in that category
//  Then, we will iterate over that data object that is returned
//  And display a list of all products

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
