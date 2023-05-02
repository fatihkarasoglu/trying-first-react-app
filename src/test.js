import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

export default function Test() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('component ilk yüklendiğinde çalışır')
        return() => {
            console.log('component destroyed')
        }
    });

    useEffect(() => {
        console.log('component render oldu')
    }, []);

    useEffect(() => {
        console.log('Count değeri değişti!', count);
    }, [count]);

  return (
    <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count => count + 1)}>Artır</button>
        <hr/>
        test
    </div>
  )
}