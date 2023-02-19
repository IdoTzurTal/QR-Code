import React, { useState } from "react";
import styled from "styled-components";
import code from "./Assets/Images/image-qr-code.png"
import Lottie from "lottie-react"
import astro from "./Assets/Lotties/38047-splash-screen-of-programming-hero-app.json"

const QR = () => {
    return (
        <div>
            <Wrapper>
                <Card>
                    <Upper>
                        <Image src={code} alt="" />
                    </Upper>
                    <Lower>
                        <h2>Improve your front-end <br /> skills by building projects</h2>
                        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to <br /> the next level</p>
                    </Lower>
                    {/* <Lottie animationData={astro} style={{ width: '7vw', padding: '1rem' }} /> */}
                </Card>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--Light-gray);
    width: 100vw;
    height: 100vh;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--White);
    border-radius: 5%;
    padding: 1rem;
    width: 20vw;
    box-shadow: 5px 5px 5px #9f9f9f;

    @media screen and (max-width: 412px) {
        padding: 4vw;
        width: 77vw;
    }
`
const Image = styled.img`
    border-radius: 5%;
    width: 100%;
`

const Upper = styled.div`
    border-radius: 5%;
`
const Lower = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    h2 {
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 1.4rem;
        padding: 1rem;
    }

    p {
        font-weight: 400;
        color: var(--Grayish-blue);
        width: 17vw;
        @media screen and (max-width: 412px) {
            width: 70vw
        }
    }
`

export default QR