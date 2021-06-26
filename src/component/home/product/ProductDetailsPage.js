import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { DataContext } from '../../DataProvider'

function ProductDetailsPage() {
  const {id} = useParams();
  const [ products ] = useContext(DataContext)
  const details = products.filter((product) => {
    return product.id == id;
  })
  const fea = details.map((data, i) => {
    return <p key={i} className="text-muted">{data.features}</p>
  });
  console.log(fea)
  return (
    <>
      <div className="container">
        {
          details.map(product => (
            <div key={product.id}>
              <div className="pt-2">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
                </ol>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <img src={product.imgsrc} alt={product.title}/>
                </div>
                <div className="col-md-6">
                  <h1 className="fw-bold">{product.title}</h1>
                  <hr />
                  <p>Description</p>
                  <p className="text-muted">{product.desc}</p>
                  <p className="text-success fw-bolds">Sticker Sizes (In Inches)</p>
                  <p className="text-muted">{product.sizes}</p>
                  <p className="text-success fw-bolds">Features:</p>
                  <p>{fea}</p>
                  {/* <ul className="list-group">
                    {
                     fea
                    }
                  </ul> */}
                  <p>Price Detail:</p>
                  <p className="text-muted"> {product.pDetails}</p>
                  <p className="text-muted">MRP:- {product.price}</p>
                  <p>Note: </p>
                  <p>* FREE DELIVERY FOR PREPAID ORDERS</p> 
                  <p>* COURIER CHARGES 40/- EXTRA FOR COD ORDERS</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ProductDetailsPage