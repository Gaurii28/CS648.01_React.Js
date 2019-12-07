import React from 'react'
import Filters from "./Filters";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";

class Product extends  React.Component{
    constructor(){
        super();
        this.handleDestroy = this.handleDestroy.bind(this);
        this.handleFilter = this.handleFilter.bind(this)
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            product : [
                {
                    id:0,
                    name: "Clarinet",
                    price: "459.99",
                    category: "Music"},
                {
                    id:1,
                    name: "Cello",
                    price: "5000",
                    category: "Music"},
                {
                    id:2,
                    name: "Fortepiano",
                    price: "11000",
                    category: "Music"},
                {
                    id:3,
                    name: "Chaise Lounge",
                    price: "799",
                    category: "Furniture"},
                {
                    id:4,
                    name: "Dining Table",
                    price: "1300",
                    category: "Furniture"},
                {
                    id:5,
                    name: "Bean Bag",
                    price: "100",
                    category: "Furniture"}],
            
            filterText:''
        };
    }

    handleSave(productsingle) {
        if (!productsingle.id) {
            productsingle.id = new Date().getTime()
        }
        this.setState((prevState) => {
            let products = prevState.product
            products[productsingle.id] = productsingle
            return { products }
        });
    }
    handleFilter(filterInput) {
        this.setState(filterInput)
    }
    handleDestroy(productId) {
        this.setState((prevState) => {
            let products = prevState.product
            delete products[productId]
            return { products }
        })
    }
    render() {


        return(
            <div class="container-fluid">
               <h1 class="col-md-4">My Inventory</h1><br/>
                    <Filters onFilter={this.handleFilter}/>
                <ProductTable product = {this.state.product} onDestroy={this.handleDestroy} filterText={this.state.filterText}/>
                <ProductForm onSave={this.handleSave} onDestroy={this.handleDestroy}/></div>
        );


    }
}

export default Product