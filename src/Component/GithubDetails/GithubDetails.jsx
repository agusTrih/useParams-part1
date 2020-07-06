import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

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
                <p>{data.login}</p>
                <p>{data.company}</p>
                <img src={data.avatar_url} alt="avatar" />
                <p>Followers: {data.followers}</p>
                <p>Following: {data.following}</p>
            </div>
        </div>
    );
}

export default GithubDetails;
