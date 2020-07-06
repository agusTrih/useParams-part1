import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Styled from "styled-components";

// Style
const Flex = Styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
`;
const Image = Styled.img`
width: 200px;
border-radius: 50%;
`;
const Paragraph = Styled.p`
font-size: 24px;
font-weight: bold;
`;
const FlexColumn = Styled.div`
display: flex;
flex-direction: column;
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
                        <p>Followers: </p>
                    </FlexColumn>
                    <FlexColumn>
                        {" "}
                        <Paragraph>{data.following}</Paragraph>
                        <p>Following: </p>
                    </FlexColumn>
                    <FlexColumn>
                        {" "}
                        <Paragraph>{data.public_repos}</Paragraph>
                        <p>Repository: </p>
                    </FlexColumn>
                </Flex>
            </div>
        </div>
    );
}

export default GithubDetails;
