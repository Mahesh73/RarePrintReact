import './Service.css'

function Service() {
    return (
        <Service>
          <div className="container-fluid">
              <div className="row px-5">
                    <div className="col-md-4 order-1">
                        <div className="card">
                            <i className="fas fa-3x fa-truck"/>
                            <h2>Quick Delivery</h2>
                            <p>Always try to quick delivery of our product to our client and it is our main goal</p>
                        </div>
                    </div>
                    <div className="col-md-4 order-2">
                        <div className="card">
                            <i className="fas fa-3x fa-print"/>
                            <h2>Product Printing</h2>
                            <p>It’s very easy and simple way to pay and buy our product by Credit card and Cash</p>
                        </div>
                    </div>
                    <div className="col-md-4 order-3">
                        <div className="card">
                            <i className="fas fa-3x fa-lock"/>
                            <h2>Secured Payment</h2>
                            <p>Don’t hesitate about our payment system we always care about this and get first priority</p>
                        </div>
                    </div>
              </div>
          </div>  
        </Service>
    )
}

export default Service
