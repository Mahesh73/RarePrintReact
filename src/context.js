import React, { Component } from "react"
import pList from "./component/home/product/ProductList";

const ProductContext = React.createContext()

class ProductProvider extends Component{
    state = {
        products: [],
    };

    componentDidMount(){
        let products = this.formatData(pList);

        this.setState({
            products,
        });
    }

    formatData(pList){
        let tempData = pList.map((data) => {
            let id = data.id
            let image = data.imgsrc
            let title = data.title

            let product = { id, image, title}
            return product;
        })
        return tempData;
    }

    getProducts = (id) => {
        let tempProducts = [...this.state.products];
        const product = tempProducts.find(product => product.id === id);
        return product;
    }
    
    render(){
        return(
            <ProductContext.Provider value={{...this.state, getProducts: this.getProducts}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer, ProductContext}