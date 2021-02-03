import React, { Component } from 'react'
import formatCurrency from '../util'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className = "products">
                    {this.props.products.map(product => (
                        <li key = { product._id}>
                            <div className = "product">
                                <a href = {"#" + product._id}>
                                    <img src = {product.image}
                                    alt = {product.title}>

                                    </img>
                                    <p>
                                        {product.title}
                                    </p>
                                    <div className = "product-price">
                                            <div>
                                                {formatCurrency(product.price)}
                                            </div>
                                            <button className = "buttton-primary">
                                                Add to Cart
                                            </button>
                                    </div>
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
