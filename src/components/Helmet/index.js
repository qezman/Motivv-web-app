import React from 'react'
import {Helmet} from "react-helmet";

export default function index({title, page, description}) {
    return (
            <Helmet>
                <meta charSet="utf-8" />
                <title>Motivv | {title}</title>
                <link rel="canonical" href={`https://motivv.co/${page}`}  />
                <meta name="description" content={description} />
            </Helmet>
    )
}
