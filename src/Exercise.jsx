import React, { useState } from "react";
import styled from 'styled-components'

const Exercise = () => {
    const [dark, setDark] = useState(false)
    return (
        <div>
            <Wrapper>
                <div>
                    <h2>heyy</h2>
                </div>
                <h1>Hello</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas delectus corporis molestias sit voluptates necessitatibus nihil placeat modi impedit officia omnis beatae laboriosam, veritatis facilis, veniam natus sapiente illo tenetur.</p>
                <Input placeholder="Hola" />
            </Wrapper>
            <Button dark = {dark} onClick={() => setDark(!dark)}>
                TTTTT
                <TomatoButton>Hiyush</TomatoButton>
            </Button>
        </div>
    )
}

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Wrapper = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;

    h1 {
        color: red;
    }

    p {
        color: green;
    }

    div {
        h2 {
            color: orange;
        }
    }
`

const Button = styled.button`
    color: ${props => props.dark ? "palevioletred" : "black"};
    background: ${props => props.dark ? "black" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
`
const TomatoButton = styled(Button)`
    color: red;
    font-size: large;
`
const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.dark ? "palevioletred" : "black"};
    background: ${props => props.dark ? "black" : "palevioletred"};
    border: none;
    border-radius: 3px;
`

export default Exercise