import React from 'react'

export default function CountWidget({ count, handleClick }) {
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increase Count</button>
        </div>
    )
}