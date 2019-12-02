import React, { Component } from 'react';
import { render } from 'react-dom'



let productList = [
     {id: 1, category: 'Music', price: '$459.99', name: 'Clarinet'},
     {id: 2, category: 'Music', price: '$5,000', name: 'Cello'},
     {id: 3, category: 'Music', price: '$4,500', name: 'Tuba'},
     {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge'},
     {id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table'},
     {id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag'}
]
 

 const Product = ({category, price, name}) => {
    return (
        <section>
           <p>{name} {price}</p>
        </section>
    )
}

class ProductClass extends Component {
    state = { 
        open: true,
        freeBookmark: false,
        hiring: true
    }
render() {
    
    const { products } = this.props
    return (
        <div>
           
            {products.map(
                (product, i) => 
                    <Product 
                        key={i}
                        name={product.name} 
                        price={product.price} 
                     
                      />
            )}
        </div>
    )
}
}


render(
<ProductClass products={productList} />, 
document.getElementById('root'))