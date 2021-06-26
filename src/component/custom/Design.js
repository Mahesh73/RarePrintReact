import React, { useState } from 'react'

function Design(props) {
    const [design, setDesign] = useState({
        fname: "",
    })

    const InputEvent = (event) => {
        const {name, value} = event.target

        setDesign((data) => {
            return {
                ...data,
                [name]: value
            }
        })

        console.log(design)
    }

    const addEvent = () => {
        props.passData(design)
    }
    return (
        <>
            <form className="card">
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <input name="fname" type="text" value={design.fname} onChange={InputEvent} placeholder="Enter Your Name" autoComplete="off" id="form6Example1" className="form-control" />
                                    </div>
                                </div>
                                {/* <div className="col">
                                    <div className="form-outline">
                                        <input type="text" id="form6Example2" className="form-control" />
                                        <label className="form-label" for="form6Example2">Last name</label>
                                    </div>
                                </div> */}
                            </div>

                    {/* <div className="form-outline mb-4">
                        <input type="text" id="form6Example3" className="form-control" />
                        <label className="form-label" for="form6Example3">Company name</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="text" id="form6Example4" className="form-control" />
                        <label className="form-label" for="form6Example4">Address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="email" id="form6Example5" className="form-control" />
                        <label className="form-label" for="form6Example5">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="number" id="form6Example6" className="form-control" />
                        <label className="form-label" for="form6Example6">Phone</label>
                    </div>

                    <div className="form-outline mb-4">
                        <textarea className="form-control" id="form6Example7" rows="4"></textarea>
                        <label className="form-label" for="form6Example7">Additional information</label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                        <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form6Example8"
                        checked
                        />
                        <label className="form-check-label" for="form6Example8"> Create an account? </label>
                    </div> */}

                    <button type="submit" onClick={addEvent} className="btn btn-primary mb-4"><i className="fas fa-plus-circle"></i></button>
                    </form>
        </>
    )
}

export default Design
