import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

// Style
const Form = Styled.form`
display: flex;
justify-content: center;
align-items: center;
`;

const Button = Styled.button`
color: black;
a{
    text-underline: none;
}
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
            <input onChange={handleChange} value={input} />
            <Button>
                {" "}
                <Link to={`/github-detail/${input}`}>Click Me</Link>
            </Button>
        </Form>
    );
}

export default Github;
