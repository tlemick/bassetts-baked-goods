import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import breadsBuns from "../images/breads-buns-category.png"
import piesCakes from "../images/pies-cakes-category.png"
import cookiesTreats from "../images/cookies-treats.png"
import pastries from "../images/pastries.png"

const CategoryWrapper = styled.div`
    background: linear-gradient(
        to bottom,
        var(--main-color-300) 0%,
        var(--main-color-300) 40%,
        var(--main-color-200) 40%,
        var(--main-color-200) 100%
    );
`

const CategoryRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5em;
`

const CategoryTile = styled.div`
    display: flex;
    flex-direction: column;
    a {
        text-decoration: none;
        color: black;
        font-size: 22px;
        margin-top: 0.5rem;
        &:focus,
        &:hover,
        &:visited,
        &:link,
        &:active {
            text-decoration: none;
        }
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

const Category = () => {
    return (
        <CategoryWrapper>
            <IntroTitle>
                <h1>Our Bakes</h1>
                <h2>From our farmhouse, to yours</h2>
            </IntroTitle>
            <CategoryRow>
                <CategoryTile>
                    <Link to="/breads-and-buns">
                        <img src={breadsBuns} alt="" />
                    </Link>
                    <Link to="/breads-and-buns">Breads & Buns</Link>
                </CategoryTile>
                <CategoryTile>
                    <Link to="/pies-and-cakes">
                        <img src={piesCakes} alt="" />
                    </Link>
                    <Link to="/pies-and-cakes">Pies & Cakes</Link>
                </CategoryTile>
                <CategoryTile>
                    <Link to="/breads-and-buns">
                        <img src={cookiesTreats} alt="" />
                    </Link>
                    <Link to="/breads-and-buns">Cookies & Treats</Link>
                </CategoryTile>
                <CategoryTile>
                    <Link to="/breads-and-buns">
                        <img src={pastries} alt="" />
                    </Link>
                    <Link to="/breads-and-buns">Pastries</Link>
                </CategoryTile>
            </CategoryRow>
        </CategoryWrapper>
    )
}

export default Category
