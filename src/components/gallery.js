import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ImageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
`

const HeroImage = styled(GatsbyImage)`
    grid-column: 1 / 5;
    cursor: pointer;
`

const ThumbnailImage = styled(GatsbyImage)`
    cursor: pointer;
`

const ImageGallery = ({ heroImage, altThumbs }) => {
    const [currentImage, setCurrentImage] = useState(heroImage)

    const handleClick = (newImage) => {
        setCurrentImage(newImage)
    }

    return (
        <ImageWrapper>
            <HeroImage
                image={getImage(currentImage)}
                alt={currentImage.alt}
                onClick={() => handleClick(heroImage)}
            />
            {altThumbs.map((image, index) => (
                <ThumbnailImage
                    key={index}
                    image={getImage(image)}
                    alt={image.alt}
                    onClick={() => handleClick(image)}
                />
            ))}
        </ImageWrapper>
    )
}

export default ImageGallery
