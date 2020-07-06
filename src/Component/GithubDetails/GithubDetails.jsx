import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Styled from "styled-components";

// Style
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
const P = Styled.p`
font-size: 24px;

`;

function GithubDetails() {
    const { username } = useParams();

    const [data, setData] = useState({});

    // Async await
    const fetchDetail = useCallback(async () => {
        const url = await `https://api.github.com/users/${username}`;
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
    }, [username]);

    useEffect(() => {
        fetchDetail();
    }, [fetchDetail]);

    // Function

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <Image src={data.avatar_url} alt="avatar" />
                <Paragraph>{data.login}</Paragraph>
                <Paragraph>{data.bio}</Paragraph>
                <Flex>
                    <FlexColumn>
                        {" "}
                        <Paragraph>{data.followers}</Paragraph>
                        <P>Followers</P>
                    </FlexColumn>
                    <FlexColumn>
                        {" "}
                        <Paragraph>{data.following}</Paragraph>
                        <P>Following</P>
                    </FlexColumn>
                    <FlexColumn>
                        {" "}
                        <Paragraph>{data.public_repos}</Paragraph>
                        <P>Repository</P>
                    </FlexColumn>
                </Flex>
            </div>
        </div>
    );
}

export default GithubDetails;
