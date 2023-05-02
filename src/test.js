import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Test() {
    const [postId, setPostId] = useState(1);
    const [post, setPost] = useState(false);

    useEffect(() => {
        console.log('component ilk yüklendiğinde çalışır');

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
        
        let interval = setInterval(() => console.log('İnterval çalıştı!'), 1000);

        return() => {
            console.log('component destroyed');
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        console.log('postId değeri değişti = ', postId);
    }, [postId]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId])

    // useEffect(() => {
    //     console.log('component render oldu');
    // });

  return (
    <div>
        <h3>{postId}</h3>
        {post && JSON.stringify(post)}
        <hr/>
        <button onClick={() => setPostId(postId => postId + 1)}>Diğer Seçim</button>
    </div>
  );
}