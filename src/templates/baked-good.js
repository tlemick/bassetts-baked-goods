import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import PopularItems from "../components/popular"

const ProductWrapper = styled.div`
    margin-top: 8vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const HeroSection = styled.div`
    height: 70vh;
    overflow: hidden;
`

const CartSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 4rem;
`

const Blurb = styled.p`
    margin-top: 1rem;
    max-width: 45ch;
`

const Pricing = styled.div`
    margin-top: 1rem;
    p {
        font-weight: bold;
        color: var(--text-highlight-400);
    }
    h1 {
        font-weight: lighter;
    }
`

const IncrementButton = styled.button`
    width: 40px;
    height: 40px;
    outline: 1px solid black;
    border: none;
    background-color: transparent;
    font-weight: bold;
`

const QuantityPicker = styled.div`
    width: 240px;
    height: 40px;
    outline: 1px solid black;
    margin-top: 3.4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
`

const AddToCartButton = styled.button`
    width: 300px;
    height: 48px;
    background: black;
    color: white;
    font-weight: bolder;
    margin-top: 2rem;
    border: none;
`

const BakedGood = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.name_of_good}>
            <ProductWrapper>
                <HeroSection>
                    <GatsbyImage
                        image={image}
                        alt={data.mdx.frontmatter.hero_image_alt}
                    />
                </HeroSection>
                <CartSection>
                    <Pricing>
                        <h1>{data.mdx.frontmatter.name_of_good}</h1>
                        <p>
                            {data.mdx.frontmatter.price_per_base_unit}
                            {" / "}
                            {data.mdx.frontmatter.singular}
                        </p>
                    </Pricing>
                    <Blurb>{data.mdx.body}</Blurb>
                    <QuantityPicker>
                        <IncrementButton>+</IncrementButton>
                        <p>6</p>
                        <IncrementButton>-</IncrementButton>
                    </QuantityPicker>
                    <AddToCartButton>ADD TO CART</AddToCartButton>
                </CartSection>
            </ProductWrapper>
            <PopularItems />
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                name_of_good
                slug
                singular
                price_per_base_unit
                hero_image_alt
                hero_image {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: DOMINANT_COLOR
                            layout: FULL_WIDTH
                            transformOptions: { fit: COVER }
                        )
                    }
                }
            }
            body
        }
    }
`

export const Head = () => <Seo title="Breads and Buns" />

export default BakedGood
