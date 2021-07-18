import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

function Card({ product }) {
    const { id, imgsrc, title } = product;
    return (
        <>
            <div className="col-md-4 text-center">
                <div className="card">
                    <Link to={`/product/${id}`} style={{textDecoration: 'none'}}>
                        <img src={imgsrc} alt="" className="card-img-top" />
                        <h5 className="card-title font-weight-bold">{title}</h5>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Card
