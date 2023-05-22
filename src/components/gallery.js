import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

// const ImageWrapper = styled.div`
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     gap: 1rem;
// `

// const HeroImage = styled(GatsbyImage)`
//     grid-column: 1 / 5;
//     cursor: pointer;
// `

// const ThumbnailImage = styled(GatsbyImage)`
//     cursor: pointer;
// `
const ImageGallery = ({ images }) => {
    const [index, setIndex] = useState(0)

    const handleLeftClick = () => {
        setIndex(index === 0 ? images.length - 1 : index - 1)
    }

    const handleRightClick = () => {
        setIndex(index === images.length - 1 ? 0 : index + 1)
    }

    return (
        <div>
            <GatsbyImage image={getImage(images[index])} alt={"hi"} />
            {images.length > 1 && (
                <div>
                    <button onClick={handleLeftClick}>Left</button>
                    <button onClick={handleRightClick}>Right</button>
                </div>
            )}
        </div>
    )
}

export default ImageGallery
