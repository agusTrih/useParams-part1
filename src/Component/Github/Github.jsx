import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

// Style
const Form = Styled.form`
display: flex;
justify-content: center;
align-items: center;
margin: 30px 0;
`;

const Button = Styled.button`
color: black;
a{
    text-underline: none;
}
`;

const InputText = Styled.input`
width: 200px;
`;

function Github() {
    // state
    const [input, setInput] = useState("");

    // function
    const handleChange = (event) => {
        setInput(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputText
                onChange={handleChange}
                value={input}
                placeholder="Type username and press button"
            />
            <Button>
                {" "}
                <Link to={`/github-detail/${input}`}>Click Me</Link>
            </Button>
        </Form>
    );
}

export default Github;
