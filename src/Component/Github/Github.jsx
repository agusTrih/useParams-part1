import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={input} />
            <button>
                {" "}
                <Link to={`/github-detail/${input}`}>klik</Link>
            </button>
        </form>
    );
}

export default Github;
