import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Styled from "styled-components";

// Style
const Flex = Styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;

`;
const FlexChild = Styled.p`

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
                <img src={data.avatar_url} alt="avatar" />
                <p>{data.login}</p>
                <Flex>
                    <p>Followers: {data.followers}</p>
                    <p>Following: {data.following}</p>
                    <p>Repository: {data.public_repos}</p>
                </Flex>
            </div>
        </div>
    );
}

export default GithubDetails;
