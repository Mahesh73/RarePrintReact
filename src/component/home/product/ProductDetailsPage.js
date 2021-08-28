import Modal from 'react-modal';

import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { DataContext } from '../../DataProvider'
import { useForm } from 'react-hook-form';
import { FireToast } from '../../../Tosta';

function ProductDetailsPage() {
  const { id } = useParams();
  const [products] = useContext(DataContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleStatusMessage = (status, message) => {
    FireToast({
      icon: status,
      message,
    })
  }
  const details = products.filter((product) => {
    return product.id == id;
  })

  const onSubmit = (FormData) => {
    handleStatusMessage('success', 'Quote form Submited')
    console.log(FormData)
  }
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
                  <button className="btn btn-danger mt-3" onClick={() => setIsOpen(true)}>Get a Quote</button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setIsOpen(false)}
                    style={customStyles}>
                    <h1>Get a Quote</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-2">
                        <label>First Name:</label>
                        <br />
                        <input type="text" {...register("firstname", { required: true })} />
                        {errors.firstname && errors.firstname.type === "required" && <span style={{ color: 'red' }}>required</span>}
                      </div>
                      <div className="mb-2">
                        <label>Last Name:</label>
                        <br />
                        <input type="text" {...register("lastname", { required: true })} />
                        {errors.lastname && errors.lastname.type === "required" && <span style={{ color: 'red' }}>required</span>}
                      </div>
                      <div>
                        <label>Email: </label>
                        <br />
                        <input type="email" {...register("email", { required: true })} />
                        {errors.email && errors.email.type === "required" && <span style={{ color: 'red' }}>required</span>}
                      </div>
                      <div className="mb-2">
                        <label>Mobile Number:</label>
                        <br />
                        <input type="number" {...register("number", { required: true })} />
                        {errors.number && errors.number.type === "required" && <span style={{ color: 'red' }}>required</span>}
                      </div>
                      <input type="submit" value="submit" className="btn btn-danger" />
                      <button className="m-5 btn btn-dark" onClick={() => setIsOpen(false)}>cancel</button>
                    </form>
                  </Modal>
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
                  <p className="text-success fw-bolds">Available Materials:</p>
                  <ul>
                    {
                      details[0].material ? details[0].material.map((item, i) => (
                        <li key={i} className="text-muted">{item}</li>
                      )) : ''
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