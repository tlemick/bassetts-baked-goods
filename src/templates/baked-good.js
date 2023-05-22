import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import PopularItems from "../components/popular"
import ImageGallery from "../components/gallery"

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        margin-top: 70px;
    }
`

const CartSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 4rem;
    @media (max-width: 768px) {
        margin-left: 0;
        padding: 0 2.5%;
    }
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
    const { mdx } = data
    const { frontmatter, body } = mdx
    const {
        name_of_good,
        hero_image,
        hero_image_alt,
        additional_images,
        price_per_base_unit,
        singular,
    } = frontmatter

    //  IF additionalImages.length > 0
    //  concat then with the hero image
    //  Otherwise, just pass heroImage as {images}

    const additionalImages = mdx.frontmatter.additional_images
    let images

    if (additionalImages === null || additionalImages.length < 1) {
        images = [mdx.frontmatter.hero_image]
    } else {
        images = [mdx.frontmatter.hero_image].concat(
            additionalImages
                .map((image) => {
                    const childImages = image.image.childrenImageSharp
                    if (childImages && childImages.length > 0) {
                        return childImages.map(
                            (childImage) => childImage.gatsbyImageData
                        )
                    }
                    return null
                })
                .flat()
                .filter(Boolean)
        )
    }

    return (
        <Layout pageTitle={name_of_good}>
            <ProductWrapper>
                <ImageGallery images={images} />
                <CartSection>
                    <Pricing>
                        <h1>{name_of_good}</h1>
                        <p>
                            {price_per_base_unit}
                            {" / "}
                            {singular}
                        </p>
                    </Pricing>
                    <Blurb>{body}</Blurb>
                    <QuantityPicker>
                        <IncrementButton>-</IncrementButton>
                        <p>6</p>
                        <IncrementButton>+</IncrementButton>
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
                additional_images {
                    image {
                        childrenImageSharp {
                            gatsbyImageData(
                                placeholder: DOMINANT_COLOR
                                layout: FULL_WIDTH
                                transformOptions: { fit: COVER }
                            )
                        }
                    }
                }
            }
            body
        }
    }
`

export const Head = () => <Seo title="Breads and Buns" />

export default BakedGood
