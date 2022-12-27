import axios from 'axios'
import React from 'react'
import ProductCard from './ProductCard'

function Product({products} : any) {

  return (
    <div className='md:max-w-screen-xl mx-auto md:-mt-24 lg:-mt-40 z-30'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2'>
        {
          products.slice(0,4).map((product : any) =>(
            <ProductCard key={product.id} title={product.title} image={product.image} price={product.price} description={product.description} id={product.id} rating={product.rating} />
          ))
         }
      </div>
      <div className='grid md:grid-cols-2 my-5'>
        {
          products.slice(4,5).map((product : any) =>(
            <ProductCard key={product.id} title={product.title} image={product.image} price={product.price} description={product.description} id={product.id} rating={product.rating} />
          ))
         }
         <div className='grid md:grid-cols-2 ml-5 gap-2'>
        {
          products.slice(5,7).map((product : any) =>(
            <ProductCard key={product.id} title={product.title} image={product.image} price={product.price} description={product.description} id={product.id} rating={product.rating} />
          ))
         }
      </div>
      </div>
      <div className='grid md:grid-cols-2 gap-3'>
        <div className='grid md:grid-cols-2 gap-3'>
        {
          products.slice(7,11).map((product : any) =>(
            <ProductCard key={product.id} title={product.title} image={product.image} price={product.price} description={product.description} id={product.id} rating={product.rating} />
          ))
         }
        </div>
        <img src="https://i.ibb.co/0CY26xm/5691822.jpg" className='h-full' alt="offer" />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-3'>
        {
          products.slice(11,products.length).map((product : any) =>(
            <ProductCard key={product.id} title={product.title} image={product.image} price={product.price} description={product.description} id={product.id} rating={product.rating} />
          ))
         }
      </div>
    </div>
  )
}

export default Product