import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Title = styled.h1`
    color: white;
    font-family: Woodblock-Sans Rough;
    font-size: 8rem;
`

const Subtitle = styled.h2`
    color: white;
    font-family: Woodblock-Sans Rough;
    font-size: 4rem;
`

const Hero = () => {
    return (
        <div style={{ display: "grid", height: "100vh" }}>
            <StaticImage
                style={{
                    gridArea: "1/1",
                }}
                layout="fullWidth"
                alt=""
                src={"../images/bread_hero.webp"}
                formats={["auto", "webp", "avif"]}
            />
            <div
                style={{
                    gridArea: "1/1",
                    position: "relative",
                    placeContent: "center",
                    display: "grid",
                    background: "rgba(0, 0, 0, 0.25)",
                    textAlign: "center",
                }}
            >
                <Title>Bassett's</Title>
                <Subtitle>Baked Goods</Subtitle>
            </div>
            <div
                style={{
                    gridArea: "1/1",
                    position: "relative",
                    placeItems: "end",
                    display: "grid",
                    margin: "2rem",
                }}
            >
                <StaticImage
                    alt=""
                    src={"../images/product009.webp"}
                    width={120}
                />
            </div>
        </div>
    )
}

export default Hero
