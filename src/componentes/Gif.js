import React from "react";

export default function Gif({ key, title, url, id }) {
    return (
        <a href={`#${id}`} className="Gif">
            <h4>{title}</h4>
            {/* <small>{id}</small> <br/> se lo comenta por que en realidad no va*/}
            <img src={url} alt={url} />
        </a>
    )
}