import React from "react";
import Gif from "./Gif";
import { useEffect, useState } from 'react';
import getGifts from "../services/getGifs";

export default function ListOfGifts({ keyword }) {

    const [gifs, setGifs] = useState([])

    useEffect(function () {
        getGifts({ keyword })
            .then(gifts => setGifs(gifts))
    }, [keyword])

    return gifs.map(({ id, title, url }) =>
        <Gif
            key={id}
            title={title}
            url={url}
            id={id}
        />
    )
}