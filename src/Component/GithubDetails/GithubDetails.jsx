import React, { useState } from "react";

import Styled from "styled-components";

// Style
const Mid = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;

`;
const Flex = Styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;

border-top: 1px dotted black;
box-sizing: border-box;
`;
const Image = Styled.img`
width: 200px;
border-radius: 50%;
`;
const Paragraph = Styled.h2`
font-size: 24px;
font-weight: bold;
`;
const FlexColumn = Styled.div`
display: flex;
flex-direction: column;
`;
const FlexColumnMid = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

const Div = Styled.div`
font-family: 'Fondamento', cursive;
`;
const Form = Styled.form`
display: flex;
justify-content: center;
align-items: center;
margin: 50px 0;
`;
const InputText = Styled.input`
width: 300px;
padding: 10px;
font-size: 16px;
`;

function GithubDetails() {
    const [name, setName] = useState("");
    const [data, setData] = useState({});

    function handleChange(event) {
        setName(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const url = `https://api.github.com/users/${name}`;
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        console.log(result);
    }

    return (
        <Mid>
            <Form onSubmit={handleSubmit}>
                <Div>
                    <InputText
                        type="text"
                        name="name"
                        id="username"
                        value={name}
                        placeholder="type username github and press enter..."
                        onChange={handleChange}
                    ></InputText>
                </Div>
            </Form>
            {name === "" ? (
                <div></div>
            ) : (
                <div>
                    <FlexColumnMid>
                        <Image src={data.avatar_url} alt="avatar" />

                        <Paragraph>{data.name}</Paragraph>

                        <Paragraph>{data.bio}</Paragraph>
                    </FlexColumnMid>
                    <Flex>
                        <FlexColumn>
                            <Paragraph>Followers</Paragraph>
                            <Paragraph>{data.followers}</Paragraph>
                        </FlexColumn>

                        <FlexColumn>
                            <Paragraph>Repository</Paragraph>
                            <Paragraph>{data.public_repos}</Paragraph>
                        </FlexColumn>

                        <FlexColumn>
                            <Paragraph>Following</Paragraph>
                            <Paragraph>{data.following}</Paragraph>
                        </FlexColumn>
                    </Flex>
                </div>
            )}
        </Mid>
    );
}

export default GithubDetails;
