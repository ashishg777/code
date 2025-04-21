import React, { useState } from 'react'
import { useEffect } from 'react';

const dataFetcher = () => {
    const [data,setData] = useState([]);
    const [loading , setLoading] =  useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        });
    }, []);

    return (
        <div>
        {loading? (
            <h1> loading..</h1>
        ):(
            <ul>
                {data.map(post => (
                    <li key={post.id}></li>
                ))}
            </ul>
        )}
        </div>
    )
}

export default dataFetcher
