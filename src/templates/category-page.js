import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import styled from "styled-components"

const Wrapper = styled.div`
    padding-left: 5%;
    padding-right: 5%;
`

const ProductsList = styled.div`
    display: grid;
    gap: 3.6rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    margin-top: 3.6rem;
    margin-bottom: 3.6rem;
`

const BestSellersTile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        text-decoration: none;
        color: black;
        font-size: 18px;
    }
`

const PriceText = styled.p`
    color: #885000;
    font-size: 18px;
`

const CategoryPageTemplate = ({ data, pageContext }) => {
    const products = data?.allMdx.nodes || []
    console.log(products)

    return (
        <Layout>
            <Seo title={pageContext?.category} />
            <Wrapper>
                <h1 style={{ marginTop: `4rem` }}>{pageContext?.category}</h1>
                <ProductsList>
                    {products?.map((product) => (
                        <BestSellersTile key={product?.frontmatter.slug}>
                            <Link to={product?.frontmatter.slug}>
                                <GatsbyImage
                                    image={getImage(product?.frontmatter.thumb)}
                                    alt={product?.frontmatter.slug}
                                />{" "}
                            </Link>
                            <Link to={product?.frontmatter.slug}>
                                {product?.frontmatter.name_of_good}
                            </Link>
                            <PriceText>
                                {product?.frontmatter.price_per_base_unit}
                            </PriceText>
                        </BestSellersTile>
                    ))}
                </ProductsList>
            </Wrapper>
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
                    price_per_base_unit
                    name_of_good
                    thumb {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                                transformOptions: { cropFocus: CENTER }
                                formats: WEBP
                                width: 400
                            )
                        }
                    }
                }
                id
                excerpt
            }
        }
    }
`
