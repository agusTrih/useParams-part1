import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

// Style
const Form = Styled.form`
display: flex;
justify-content: center;
align-items: center;
margin: 50px 0;
`;

const Button = Styled.button`
color: black;
margin-left: 10px;
font-size:16px; 
border-color:#cccccc; 
border-style:solid; 
border-width:0px; 
box-shadow: -5px 4px 5px 0px rgba(42,42,42,.60); 
padding:7px; 
border-radius:22px; 
font-family:monospace; 
text-shadow:0px 0px 0px rgba(42,42,42,.75); 
&:focus{
    outline: none;
}
`;

const InputText = Styled.input`
width: 300px;
font-size:16px; 
border-color:#cccccc; 
border-style:solid; 
border-width:0px; 
box-shadow: -5px 4px 5px 0px rgba(42,42,42,.60); 
padding:7px; 
border-radius:22px; 
font-family:monospace; 
text-shadow:0px 0px 0px rgba(42,42,42,.75); 
&:focus{
    outline: none;
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
