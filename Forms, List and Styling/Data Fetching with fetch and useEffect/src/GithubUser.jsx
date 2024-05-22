import { useState } from "react";
import { useEffect } from "react";

export function GithubUser({username = "juanmacasnu"}) {
    const [data, setData] = useState('')
    useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then((answer) => answer.json())
    .then((data) => setData(data));
    }, [username]);

    return(
        <>
            <img src = {data.avatar_url} alt="avatar" />
            <h2>{data.name}</h2>
            <h3>{data.login}</h3>
        </>
    )
}