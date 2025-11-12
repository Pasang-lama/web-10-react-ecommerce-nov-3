import React from 'react'

import { useState, useEffect } from 'react'

function Product() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <section className='container my-5'>
            <p className="text-center">MADE THE HARD WAY</p>
            <h2 className="text-center" >OUR TRENDING PRODUCTS</h2>
            <p className="text-center">
                Basel & Co. is a powerful eCommerce theme for WordPress. Visit our shop page to see all main features for Your Store
            </p>

            <div className="row gy-4">
                {
                    products.map((items, index) => (
                        <div className="col-lg-3">
                            <div className="card p-3">
                                <img src={items.images[0]} alt="" />
                                <h3 className="text-center">{items.title}</h3>
                                <span className='bandage'>${items.price}</span>
                            </div>
                        </div>
                    ))
                }
            </div>


        </section>
    )
}

export default Product
