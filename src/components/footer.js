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
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    gap: 4rem;
    border-bottom: 2rem solid var(--main-color-200);
`

const FooterLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    p {
        color: black;
    }
    p:first-of-type {
        margin-top: 1.4rem;
    }
`

const FooterCenter = styled.div`
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
`

const SignupForm = styled.form`
    display: flex;
    align-items: center;
`

const FooterTitle = styled.h2`
    font-family: "Woodblock-Sans Aged";
    font-weight: lighter;
    font-size: 2rem;
    color: black;
`

const Footer = () => {
    return (
        <FooterContent>
            <FooterLeft>
                <FooterTitle>
                    Bassett's <br />
                    Baked Goods
                </FooterTitle>
                <p>© BBG 2022</p>
                <p>All Rights Reserved.</p>
            </FooterLeft>
            <FooterCenter>
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
            </FooterCenter>
        </FooterContent>
    )
}

export default Footer
