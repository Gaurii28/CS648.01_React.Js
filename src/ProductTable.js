import React, { Component } from 'react'
import ProductRow from "./ProductRow";


class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.handleDestroy = this.handleDestroy.bind(this)
    }

    handleDestroy(id) {
        this.props.onDestroy(id)
    }

    renderTableRows(products){
        const productKeys = Object.keys(products);

        let listOfProducts = [];

        for(let i = 0; i<productKeys.length; i++){
            let product = productKeys[i];
            listOfProducts = listOfProducts.concat(products[product]);
        }


            let rows = [
                <tr>
                
                </tr>
            ];

            for(let i = 0; i<listOfProducts.length; i++){
                if(listOfProducts[i].name === this.props.filterText || this.props.filterText==='') {
                    rows.push(<ProductRow product={listOfProducts[i]} key={listOfProducts[i].id}
                                          onDestroy={this.handleDestroy}/>);
                }}

            return rows;

    }

    render(){
        return(
            <div>
                  <div class="col-md-4">
                <table class="table table-sm table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Category
                            </th>
                            <th>
                                Price
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderTableRows(this.props.product)}
                    </tbody>
                </table>
            </div>
            </div>
        );
    }

}

export default ProductTable