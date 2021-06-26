import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'; 

    function Card({ product }){
        const {id, imgsrc, title} = product;
        console.log(product.imgsrc)
        return (
            <>
                <div className="col-md-4">
                    <div className="cards mb-3 mx-2">
                        <img src={imgsrc} alt=""/>
                            <h5 className="card_title font-weight-bold">{title}</h5>
                            <Link to={ `/product/${id}`} className="cards_link btn btn-dark">View Details</Link>
                    </div>
                </div>
            </>
        )
    }

export default Card
