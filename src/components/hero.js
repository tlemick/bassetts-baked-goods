import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
    border: 8px solid var(--main-color-300);
    height: 85vh;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 70px 60px 1fr;
        border: none;
        gap: 0;
        height: auto;
    }
`

const Brand = styled.div`
    grid-column: 2/3;
    grid-row: 1/1;
    justify-self: end;
    align-self: end;
    margin-bottom: 2rem;
    margin-right: 2rem;
    @media (max-width: 768px) {
        grid-column: 1 / 1;
        grid-row: 4 / 5;
        z-index: 2;
        margin-right: 2.5%;
    }
`

const BrandText = styled.div`
    text-align: right;
    font-family: "Roboto Slab";
    text-transform: uppercase;

    p {
        font-size: 1rem;
        font-size: clamp(1.4rem, 0.95rem + 0.25vw, 1.6rem);
    }
    span {
        font-size: 0.5rem;
        font-size: clamp(0.5rem, 0.28rem + 0.6vw, 1rem);
    }
    h2 {
        font-size: 0.8rem;
        font-size: clamp(0.8rem, 0.76rem + 0.19vw, 1rem);
    }
    @media (max-width: 768px) {
        p {
            color: white;
        }
        h2 {
            color: white;
        }
    }
`

// const SiteTitle = styled.div`
//     grid-column: 2/3;
//     grid-row: 1/1;
//     text-align: left;
//     justify-self: start;
//     align-self: center;
//     @media (max-width: 768px) {
//         grid-column: 1 / 1;
//         grid-row: 1 / 3;
//     }
// `

const Title = styled.h1`
    font-family: "Roboto Slab";
    font-size: clamp(3rem, -0.2372rem + 13.1796vw, 6rem);
    font-weight: 300;
    text-transform: uppercase;
    margin-top: -5.4rem;
    grid-column: 2 / 3;
    grid-row: 1 / 1;
    align-self: center;
    @media (max-width: 768px) {
        grid-column: 1 / 1;
        grid-row: 2 / 3;
        margin-top: 0;
        margin-left: 2.5%;
    }
`

const Subtitle = styled.h2`
    font-family: "Roboto Slab";
    font-size: clamp(2.2rem, -0.6129rem + 7.3806vw, 4rem);
    align-self: center;
    font-weight: 300;
    margin-bottom: -4rem;
    color: black;
    grid-column: 2 / 3;
    grid-row: 1 / 1;

    @media (max-width: 768px) {
        grid-column: 1 / 1;
        grid-row: 3 / 4;
        z-index: 2;
        align-self: start;
        color: white;
        margin-bottom: 0;
        margin-left: 2.5%;
    }
`

const HeroWrapper = styled.div`
    grid-column: 1 / 2;
    overflow: hidden;

    @media (max-width: 768px) {
        grid-column: 1 / 1;
        grid-row: 3 / 5;
    }
`

const Hero = () => {
    return (
        <Wrapper>
            <HeroWrapper>
                <StaticImage
                    transformOptions={{
                        fit: "outside",
                        position: "centre",
                        cropFocus: "attention",
                    }}
                    alt=""
                    src={"../images/hero-landscape.webp"}
                    formats={["auto", "webp", "avif"]}
                />
            </HeroWrapper>

            <Title>Bassett's</Title>
            <Subtitle>Baked Goods</Subtitle>

            <Brand>
                <BrandText>
                    <p>
                        <span>no.</span>
                        009
                    </p>
                    <h2>
                        Product of <br />
                        Colorado
                    </h2>
                </BrandText>
            </Brand>
        </Wrapper>
    )
}

export default Hero
