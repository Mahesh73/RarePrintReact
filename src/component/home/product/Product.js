import React, { useContext } from 'react'
import { DataContext } from '../../DataProvider'
import Card from './card/Card'

function Product() {
    const [products ] = useContext(DataContext)
    return (
        <>
            <div className="feature_section container">
                <h2 className="text-center font-weight-bold mt-4">Our Products</h2>
                <div className="row">
                    {
                        products.map(product => (
                            <Card key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}



export default Product