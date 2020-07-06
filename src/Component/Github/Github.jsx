import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Github() {
    const [input, setInput] = useState();
    const [datas, setDatas] = useState([]);
    const fetchData = async () => {
        const url = "https://api.github.com/users";
        const response = await fetch(url);
        const result = await response.json();
        setDatas(result);
        console.log(result);
    };
    useEffect(() => {
        fetchData();
    }, []);

    // const handleKeyUp = (event) => {
    //     if (event.keyCode === 13) {
    //         event.preventDefault();
    //         setInput();
    //         console.log(input);
    //     }
    // };
    return (
        <div>
            <input type="text" value={input} />

            {datas.map((item) => {
                return (
                    <div key={item.login}>
                        <p>{item.login}</p>
                        <img src={item.avatar_url} alt="avatar" />
                        <p>{item.bio}</p>
                        <div>
                            <p>{item.follower_url}</p>
                            <p>{item.repos_url}</p>
                            <Link to={`/github-detail/${item.login}`}>
                                Detail
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Github;
