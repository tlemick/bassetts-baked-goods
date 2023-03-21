import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    return (
        <div style={{ display: "grid" }}>
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
                    placeItems: "center",
                    display: "grid",
                    background: "rgba(0, 0, 0, 0.25)",
                }}
            >
                <StaticImage alt="" src={"../images/header.webp"} width={620} />
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
