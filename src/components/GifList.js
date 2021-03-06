import React from 'react'
export default function GifList({ gifs }) {
    return(
        <ul>
            {gifs.map(({id, url, title}) => <li key={id}><img src={url} alt={title} /></li>)}
        </ul>
    )
}