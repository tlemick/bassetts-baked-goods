import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "./styles.css"

const FooterContent = styled.div`
    width: 100%;
    align-self: end;
    padding-top: 8rem;
    padding-bottom: 8rem;
    background: var(--main-color-100);
    display: grid;
    gap: 6rem;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    border-bottom: 2rem solid var(--main-color-200);
    @media (max-width: 768px) {
        padding: 4rem 2.5%;
        gap: 2rem;
    }
`

const FooterLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: end;
    order: 1;
    @media (max-width: 768px) {
        justify-self: start;
        order: 2;
    }
    p {
        color: black;
        text-align: left;
    }
    p:first-of-type {
        margin-top: 1.4rem;
    }
    @media (max-width: 768px) {
        p:first-of-type {
            margin-top: 0;
        }
    }
`

const FooterRight = styled.div`
    order: 2;
    @media (max-width: 768px) {
        justify-self: start;
        order: 1;
    }
    p {
        color: black;
        margin-bottom: 1.4rem;
    }
`

const SocialRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 1.4rem;
`
const SignUp = styled.div`
    margin-top: 1rem;
`

const SignupButton = styled.button`
    background-color: black;
    color: white;
    padding: 7px 16px;
    height: 40px;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    transition: background-color ease-in-out, color ease-in-out;

    &:hover {
        background-color: #1565c0;
        color: #fff;
        transition: background-color ease-in-out, color ease-in-out;
        filter: brightness(90%);
    }

    &:active {
        background-color: var(--highlight-color-400);
        color: #fff;
        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
        filter: brightness(80%);
    }
`

const EmailInput = styled.input`
    height: 40px;
    padding: 8px 16px;
    font-size: 1rem;
    border: none;
    width: 300px;
    background-color: var(--main-color-400);
    @media (max-width: 768px) {
        width: 240px;
    }
`

const SignupForm = styled.form`
    display: flex;
    align-items: center;
`

const FooterTitle = styled.h2`
    font-family: "Roboto Slab";
    text-transform: uppercase;
    font-size: 1.4rem;
    color: black;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        font-size: 1rem;
        text-transform: none;
        flex-direction: row;
        gap: 1ch;
    }
`

const Footer = () => {
    return (
        <FooterContent>
            <FooterLeft>
                <FooterTitle>
                    <h2>Bassett's </h2>
                    <h2>Baked Goods</h2>
                </FooterTitle>
                <p>© BBG 2022</p>
                <p>All Rights Reserved.</p>
            </FooterLeft>
            <FooterRight>
                <SocialRow>
                    <StaticImage
                        alt="Link to facebook"
                        src={"../images/facebook.webp"}
                        width={24}
                    />{" "}
                    <StaticImage
                        alt="Link to Instagram"
                        src={"../images/instagram.webp"}
                        width={24}
                    />{" "}
                    <StaticImage
                        alt="Link to twitter"
                        src={"../images/twitter.webp"}
                        width={24}
                    />
                </SocialRow>
                <SignUp>
                    <p>
                        Want to keep up with new recipes we’re trying? <br />
                        Join our newsletter!
                    </p>
                    <SignupForm>
                        <EmailInput
                            type="email"
                            placeholder="Enter your email address"
                        />
                        <SignupButton>Sign Up</SignupButton>
                    </SignupForm>
                </SignUp>
            </FooterRight>
        </FooterContent>
    )
}

export default Footer
