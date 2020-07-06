import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";

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

    return <div></div>;
}

export default GithubDetails;
