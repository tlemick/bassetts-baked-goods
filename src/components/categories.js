import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const CategoryWrapper = styled.div`
    background: linear-gradient(
        to bottom,
        var(--main-color-300) 0%,
        var(--main-color-300) 40%,
        var(--main-color-200) 40%,
        var(--main-color-200) 100%
    );
`

const CatRow = styled.div`
    display: grid;
    gap: 1.6rem;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    padding-top: 1rem;
    padding-bottom: 4rem;
    padding-left: 5%;
    padding-right: 5%;
`

const CategoryTile = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    img {
        border: 2px solid black;
    }

    a {
        text-decoration: none;
        color: black;
        font-size: 22px;
        margin-top: 0.5rem;

        &:focus,
        &:visited,
        &:link,
        &:active {
            text-decoration: none;
        }
    }

    h3 {
        font-weight: lighter;
        flex: 1;
        font-size: 20px;
        margin-top: 1rem;
    }
`

const IntroTitle = styled.div`
    padding-bottom: 2em;

    h1 {
        padding-left: 5%;
        font-weight: lighter;
    }

    h2 {
        padding-left: 7%;
        font-weight: lighter;
    }
`

const CategoryRow = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                }
            }
            allMdx {
                nodes {
                    frontmatter {
                        slug
                        category
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

    const products = data.allMdx.nodes

    const categoriesFound = []

    products.forEach((product) => {
        const category = product?.frontmatter?.category
        if (category && !categoriesFound.includes(category)) {
            categoriesFound.push(category)
        }
    })

    return (
        <CategoryWrapper>
            <IntroTitle>
                <h1>Our Bakes</h1>
                <h2>From our farmhouse, to yours</h2>
            </IntroTitle>
            <CatRow>
                {categoriesFound.map((category) => {
                    const categoryProducts = products.filter(
                        (product) => product?.frontmatter?.category === category
                    )
                    const randomProduct =
                        categoryProducts[
                            Math.floor(Math.random() * categoryProducts.length)
                        ]
                    const formattedCategory = category
                        .replace(/-/g, " ")
                        .split(" ")
                        .map((word) => {
                            if (word.toLowerCase() === "and") {
                                return word
                            }
                            return (
                                word.charAt(0).toUpperCase() +
                                word.slice(1).toLowerCase()
                            )
                        })
                        .join(" ")

                    return (
                        <CategoryTile key={category}>
                            <Link to={`/category/${category}`}>
                                <GatsbyImage
                                    image={
                                        randomProduct?.frontmatter?.thumb
                                            ?.childImageSharp?.gatsbyImageData
                                    }
                                    alt={randomProduct?.frontmatter?.slug}
                                />

                                <h3>{formattedCategory}</h3>
                            </Link>
                        </CategoryTile>
                    )
                })}
            </CatRow>
        </CategoryWrapper>
    )
}

export default CategoryRow
