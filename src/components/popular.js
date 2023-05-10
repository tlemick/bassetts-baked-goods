import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BestSellersWrapper = styled.div`
    margin-top: 6em;
    background: linear-gradient(
        to bottom,
        var(--main-color-300) 0%,
        var(--main-color-300) 35%,
        var(--main-color-200) 35%,
        var(--main-color-200) 100%
    );
    padding-bottom: 4rem;
`

const BestSellers = styled.div`
    padding-left: 5%;
    padding-right: 5%;
    h2 {
        margin-bottom: 1em;
        font-weight: lighter;
    }
`

const BestSellersRow = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    margin-top: 2rem;
`

const BestSellersTile = styled.div`
    display: flex;
    flex-direction: column;
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

// Get 5 products based on the context of the page where this component is rendered
// e.g. Main page ---> 5 most clicked on items
//      A random bread page --> 5 other breads "meet the rest"
//      A Category page --> 5 other randoms "you might also like"

const PopularItems = () => {
    const data = useStaticQuery(graphql`
        {
            allMdx {
                nodes {
                    frontmatter {
                        base_unit
                        price_per_base_unit
                        name_of_good
                        type_of_good
                        category
                        slug
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
                }
            }
        }
    `)

    // ---------THE CODE BELOW CAUSES THE <LINK> PAGE RERENDER BUG----------------
    //https://github.com/gatsbyjs/gatsby/issues/29011

    const randomProducts = data.allMdx.nodes

    const randomIndices = []

    while (randomIndices.length < 5) {
        const randomIndex = Math.floor(Math.random() * randomProducts.length)
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex)
        }
    }

    const randomNodes = randomIndices.map((index) => randomProducts[index])

    return (
        <BestSellersWrapper>
            <BestSellers>
                <h2>Best Sellers</h2>
                <BestSellersRow>
                    {randomNodes.map((node) => (
                        <BestSellersTile key={node.frontmatter.slug}>
                            <GatsbyImage
                                image={getImage(node.frontmatter.thumb)}
                                alt={node.frontmatter.slug}
                            />
                            <Link
                                to={
                                    "/category/" +
                                    node.frontmatter.category +
                                    "/" +
                                    node.frontmatter.slug
                                }
                            >
                                {node.frontmatter.name_of_good}
                            </Link>
                            <PriceText>
                                {node.frontmatter.price_per_base_unit}
                            </PriceText>
                        </BestSellersTile>
                    ))}
                </BestSellersRow>
            </BestSellers>
        </BestSellersWrapper>
    )
}

export default PopularItems
