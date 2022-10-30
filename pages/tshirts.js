import React from 'react'
import Link from 'next/link'
import Product from '../modals/Product';
import mongoose, { mongo } from "mongoose";
function tshirts({product}) {
  console.log(product)
  return (
    <div>
      <section class="text-gray-600 body-font lg:mx-16 mx-6">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-6">

 

    {product.map((item)=>{
      return <Link href={'/'}>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg" style={{cursor:"pointer"}}>
  
        <a class="block relative  rounded overflow-hidden">
          <img alt="ecommerce" class="m-auto md:m-0 w-full h-[42vh] sm:h=[30vh] md:h-[35vh] block" src={item.img}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
          <p class="mt-1">${item.price}</p>
          <p className='size'>S,M,L,XL,XXL</p>
        </div>
      </div>
      </Link>
    })}

  


  


  

 
    
  
    </div>
  </div>
</section>
    </div>
  )
}

export async function getServerSideProps(context) {

  if(!mongoose.connections[0].readyState){
    await mongoose.connect("mongodb://localhost:27017/varietystore",{ useNewUrlParser: true,
    useUnifiedTopology: true})
  
}

let products=await Product.find({category:"tshirt"})
  return {
    props: {product: JSON.parse(JSON.stringify(products))}, // will be passed to the page component as props
  }
}
export default tshirts