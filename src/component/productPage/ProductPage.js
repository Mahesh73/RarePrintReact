import React, { useContext } from 'react'
import { DataContext } from '../DataProvider'
import Card from '../home/product/card/Card'

function ProductPage() {
    const [products ] = useContext(DataContext)

    return (
        <>
            <div className="feature_section container">
                <h2 className="text-center font-weight-bold">Featured Products</h2>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row"> 
                            {
                                products.map(product => (
                                    <Card key={product.id} product={product} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage
