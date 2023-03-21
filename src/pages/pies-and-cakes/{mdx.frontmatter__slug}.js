import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Product = ({ data, children }) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.name_of_good}>
            <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
            />
            <p>
                The price of {data.mdx.frontmatter.name_of_good} is{" "}
                {data.mdx.frontmatter.price_per_base_unit}
            </p>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                name_of_good
                price_per_base_unit
                hero_image_alt
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`

export const Head = () => <Seo title="Pies and Cakes" />

export default Product
