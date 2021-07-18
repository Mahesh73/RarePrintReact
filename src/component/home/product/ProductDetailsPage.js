import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { DataContext } from '../../DataProvider'

function ProductDetailsPage() {
  const { id } = useParams();
  const [products] = useContext(DataContext)
  const details = products.filter((product) => {
    return product.id == id;
  })
  return (
    <>
      <div className="container">
        {
          details.map((data) => (
            <div key={data.id}>
              <div className="pt-2">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">{data.title}</li>
                </ol>
              </div>
              <div className="row">
                <div className="col-md-6 text-center">
                  <img src={data.imgsrc} alt={data.title} />
                  <button className="btn btn-danger mt-3">Get a Quote</button>
                </div>
                <div className="col-md-6">
                  <h1 className="fw-bold">{data.title}</h1>
                  <hr />
                  <p>Description</p>
                  <p className="text-muted">{data.desc}</p>
                  <p className="text-success fw-bolds">Sticker Sizes (In Inches)</p>
                  <ul>
                    {
                      details[0].sizes ? details[0].sizes.map((item, i) => (
                        <li key={i} className="text-muted ">{item.s}</li>
                      )
                      ) : ''
                    }
                  </ul>
                  <p className="text-success fw-bolds">Features:</p>
                  <ul>
                    {
                      details[0].features ? details[0].features.map((item, i) => (
                        <li key={i} className="text-muted">{item.fea}</li>
                      )
                      ) : ''
                    }
                  </ul>
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