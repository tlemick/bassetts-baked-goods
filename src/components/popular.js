import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BestSellersWrapper = styled.div`
    margin-top: 5.4em;
    background: linear-gradient(
        to bottom,
        #faf1e2 0%,
        #faf1e2 40%,
        #f4e4cc 40%,
        #f4e4cc 100%
    );
    padding-bottom: 5rem;
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
    display: flex;
    flex-direction: row;
    gap: 2em;
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
                                gatsbyImageData(placeholder: BLURRED)
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
    console.log(randomNodes)

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
                                    "/" +
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