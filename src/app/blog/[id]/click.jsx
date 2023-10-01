'use client';
import React from 'react';

const click = () => {

    const clickHandle=()=>{
        alert("Clicked")
    }

    return (
        <div>
             <button onClick={clickHandle}>Click me</button>
        </div>
    );
};

export default click;