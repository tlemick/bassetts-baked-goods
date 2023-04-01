import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Wrapper = styled.div`
    display: grid;
    height: 100vh;
`

const Overlay = styled.div`
    grid-area: 1/1;
    position: relative;
    place-content: center;
    display: grid;
    text-align: center;
`

const Brand = styled.div`
    grid-area: 1/1;
    position: relative;
    place-items: end;
    display: grid;
    margin-right: 4rem;
    margin-bottom: 16rem;
`
const BrandText = styled.div`
    text-align: right;
    font-family: "Woodblock-Sans Aged";
    font-weight: lighter;
    p {
        font-size: 2.2rem;
    }
    span {
        font-size: 0.6rem;
    }
    h2 {
        font-size: 1rem;
    }
`

const Title = styled.h1`
    font-family: "Woodblock-Sans Aged";
    font-size: 8rem;
    font-weight: lighter;
    margin-top: -12rem;
`

const Subtitle = styled.h2`
    font-family: "Woodblock-Sans Aged";
    font-size: 4rem;
    font-weight: lighter;
`

const Hero = () => {
    return (
        <Wrapper>
            <StaticImage
                style={{
                    gridArea: "1/1",
                }}
                layout="fullWidth"
                alt=""
                src={"../images/mathilda-khoo-U1IBTApJdFY-unsplash 1.webp"}
                formats={["auto", "webp", "avif"]}
            />
            <Overlay>
                <Title>Bassett's</Title>
                <Subtitle>Baked Goods</Subtitle>
            </Overlay>
            <Brand>
                <BrandText>
                    <p>
                        <span>no.</span>009
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
