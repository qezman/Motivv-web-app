import React from 'react';
import {Card } from "react-bootstrap";

const HomeCard = ({img, title, color,number}) =>{
    return(
        <>
        <Card className="container mb-4 bod-rad" style={{backgroundColor: color,maxWidth: 250}}>
            <p className="white-text mt-3 font-weight-bold">{title}</p>
            <div className="d-flex align-items-end">
            <div className="rounded-cover mb-3">
            <img src={img} alt={title}/>
            </div>
            <h2 className="font-weight-boldder ml-3 white-text fs-42">{number}</h2>
            </div>
        </Card>
        </>
    )
}

export default HomeCard