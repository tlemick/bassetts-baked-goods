import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import PopularItems from "../components/popular"
import Layout from "../components/layout"

const Wrapper = styled.div`
    padding-left: 5%;
    padding-right: 5%;
`

const Headline = styled.h1`
    font-family: "Woodblock-Sans Aged";
    font-size: 4.2rem;
    font-weight: lighter;
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

const PageTitle = styled.div`
    margin-top: 8rem;
    margin-left: 6rem;
    p {
        width: 60ch;
        margin-left: 2.4rem;
        margin-top: 1rem;
    }
`

const PriceText = styled.p`
    color: #885000;
    font-size: 18px;
`

const BreadsAndBuns = ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <Wrapper>
                <PageTitle>
                    <Headline>Breads & Buns</Headline>
                    <p>
                        Welcome to the world of artisan bread, where the
                        possibilities are endless and the flavors are divine.
                        Our bread is made using traditional methods, only
                        natural ingredients, and baked in small batches for the
                        ultimate taste experience. From the crusty sourdough to
                        the sweet brioche, our breads are sure to satisfy your
                        taste buds and elevate your bread game to the next
                        level.
                    </p>
                </PageTitle>
                <ProductsList>
                    {data.allMdx.nodes.map((node) => (
                        <BestSellersTile key={node.frontmatter.slug}>
                            <Link to={node.frontmatter.slug}>
                                <GatsbyImage
                                    image={getImage(node.frontmatter.thumb)}
                                    alt={node.frontmatter.slug}
                                />{" "}
                            </Link>
                            <Link to={node.frontmatter.slug}>
                                {node.frontmatter.name_of_good}
                            </Link>
                            <PriceText>
                                {node.frontmatter.price_per_base_unit}
                            </PriceText>
                        </BestSellersTile>
                    ))}
                </ProductsList>
            </Wrapper>
            <PopularItems />
        </Layout>
    )
}

export const query = graphql`
    {
        allMdx(
            filter: { frontmatter: { category: { eq: "breads-and-buns" } } }
        ) {
            nodes {
                frontmatter {
                    base_unit
                    price_per_base_unit
                    name_of_good
                    type_of_good
                    slug
                    thumb {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED)
                        }
                    }
                }
                id
                excerpt
            }
        }
    }
`

export const Head = () => <Seo title="Breads and buns" />

export default BreadsAndBuns
