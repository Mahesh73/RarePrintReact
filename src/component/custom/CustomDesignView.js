import React, { useState } from 'react'
import Design from './Design'
import View from './View'

function CustomDesignView() {
    const [addItem, setaddItem] = useState([]);
    const addData = (design) => {
        setaddItem((data) => {
            return [...data, design]
        })
    }
    
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        {/* <Design passData={addData}/>  */}
                    </div>
                    <div className="col-md-6">
                        {/* <View key={} id={index} fname={val.fname}/> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomDesignView
