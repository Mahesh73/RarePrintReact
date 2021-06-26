import axios from 'axios';
import React, { useState } from 'react'

function Contact() {
    const [data, setData ] = useState({
        fName: '',
        mNumber: '',
        emailAdd: '',
        msg: '',
    })

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setData((preVal) => {
            return {
                ... preVal,
                [name]: value,
            }
        })
    }
     const formSubmit = (e) => {
        const {fName, emailAdd} = data;
        e.preventDefault();
        axios.post('api/form', data).catch(()=>{
            console.log('message not sent');
        });
        console.log(
            'name: ' + `${fName}`,
            'email: ' + `${emailAdd}`,
        );
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            {/* Name input  */}
                            <div className="mb-3">
                                <label className="form-label" for="form1Example1">Full Name</label>
                                <input type="text" id="form1Example1"  className="form-control" name="fName" value={data.fName} onChange={InputEvent} placeholder="Enter Your Name"/>
                            </div>
                            {/* Mobile input  */}
                            <div className="mb-3">
                                <label className="form-label" for="form1Example1">Mobile Number</label>
                                <input type="number" id="form1Example1" className="form-control" name="mNumber" value={data.mNumber} onChange={InputEvent} placeholder="Enter Mobile Number"/>
                            </div>
                            {/* Mobile input  */}
                            <div className="mb-3">
                                <label className="form-label" for="form1Example1">Email address</label>
                                <input type="email" id="form1Example1" className="form-control" name="emailAdd" value={data.emailAdd} onChange={InputEvent} placeholder="example@gmail.com"/>
                            </div>
                            {/* <!-- Message input --> */}
                            <div className="mb-3">
                                <label className="form-label" for="form4Example3">Message</label>
                                <textarea className="form-control" id="form4Example3" name="msg" value={data.msg} onChange={InputEvent} rows="4"></textarea>
                            </div>
                            {/* <!-- Submit button --> */}
                            <div className="col-12">
                                <button type="submit" className="btn btn-outline-primary mb-4">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
