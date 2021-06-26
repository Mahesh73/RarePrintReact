import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Redirect, Route, Switch } from 'react-router';
import './App.css'
import Home from './component/home/Home'
import Navbar from './component/navbar/Navbar';
import About from './component/about/About';
import Footer from './component/footer/Footer';
import ProductPage from './component/productPage/ProductPage';
import Contact from './component/contact/Contact';
import ProductDetailsPage from './component/home/product/ProductDetailsPage';
import { DataProvider } from './component/DataProvider';
import PaymentInfo from './component/payment/PaymentInfo';
// import CustomDesignView from './component/custom/CustomDesignView';

function App(){
    return (
        <DataProvider>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/product" component={ProductPage}/>
                <Route exact path="/payment" component={PaymentInfo}/>
                {/* <Route exact path="/custom" component={CustomDesignView}/> */}
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/product/:id" component={ProductDetailsPage}/>
                <Redirect to="/"/>
            </Switch>
            <Footer />
            {/* <button type="button" className="btn btn-primary btn-floating"><i className="fas fa-download"></i></button> */}
        </DataProvider>
      );
}

export default App;