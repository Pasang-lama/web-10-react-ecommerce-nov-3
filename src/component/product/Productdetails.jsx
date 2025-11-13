import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'



function Productdetails() {
    const {slug} = useParams();
    const [products, setProducts] = useState([]);
        useEffect(() => {
            fetch("https://api.escuelajs.co/api/v1/products")
                .then(res => res.json())
                .then(data => setProducts(data))
        }, [])

    const product = products.find((item) => item.slug === slug);

    const relatedProducts = products.filter((item) => item.category.id === product.category.id && item.slug !== product.slug);
  return (
    <>
    <Header />
      <section className='my-5 container'>
        <h1 >{product?.title}</h1>
        <hr />
        <div className="row gy-4">
            <div className="col-lg-6">
                <img src={product?.images[0]} alt="" />
            </div>
            <div className="col-lg-6">
                <span className='price-tag'>${product?.price}</span>
                <h3>{product?.title}</h3>
                <p>{product?.description}</p>
                <button className='btn btn-primary'>Add to Cart</button>
                <hr />
                <div className="d-flex product-images gap-2">
                    <img src={product?.images[0]} alt="" />
                    <img src={product?.images[1]} alt="" />
                    <img src={product?.images[2]} alt="" />
                </div>
            </div>
        </div>

      </section>
      <hr />

      <div className="container mb-5">
        <h2>Related Products</h2>
        <div className="row gy-4">
            {
                relatedProducts.map((el, index)=>(
                    <div className="col-lg-3" key={index}>
                        <div className="card p-3 product-cards">
                            <img src={el.images[0]} alt="" />
                            <span className='price-tag'>${el.price}</span>
                            <h3 className="text-center">{el.title}</h3>
                            <Link to={`/products/${el.slug}`} className='btn btn-primary'>View Product</Link>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>

      <Footer />
      
    </>
  )
}

export default Productdetails
