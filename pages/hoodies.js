import React from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import Product from '../modals/Product'

export default function hoodies({product}) {
  return (
    <div>
    <section class="text-gray-600 body-font lg:mx-16 mx-6">
<div class="container px-5 py-24 mx-auto">
  <div class="flex flex-wrap -m-6 lg:space-x-6 justify-center items-center">



  {Object.keys(product).map((item)=>{
    return <Link href={`/product/${product[item].slug}?slug=${product[item].slug}`}>
    <div class="xl:w-[22%] lg:w-[30%] md:w-1/2 sm:w-1/2 p-4 w-full shadow-lg" style={{cursor:"pointer"}}>

      <a class="block relative  rounded overflow-hidden">
        <img alt="ecommerce" class="m-auto md:m-0 w-full h-[42vh] sm:h-[30vh] md:h-[35vh] block" src={product[item].img}/>
      </a>
      <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">{product[item].title}</h2>
        <p class="mt-1">${product[item].price}</p>
        <div className='flex pl-2 items-center bg-gray-100'>
        
        {product[item].size.includes('S')?<p className='font-semibold ml-0 mr-4'>S</p>:""}
        {product[item].size.includes('M')?<p className='font-semibold mr-4'>M</p>:""}
        {product[item].size.includes('L')?<p className='font-semibold mr-4'>L</p>:""}
        {product[item].size.includes('XL')?<p className='font-semibold mr-4'>XL</p>:""}
        {product[item].size.includes('XXL')?<p className='font-semibold mr-4'>XXL</p>:""}
        </div>
        <div className='flex pl-2 items-center mt-2'>
          {product[item].color.includes('red')?<p className='w-4 h-4 rounded-full ml-0 mr-2 bg-red-500'></p>:""}
          {product[item].color.includes('blue')?<p className='w-4 h-4 rounded-full mr-2 bg-blue-500'></p>:""}
          {product[item].color.includes('green')?<p className='w-4 h-4 rounded-full mr-2 bg-green-500'></p>:""}
          {product[item].color.includes('yellow')?<p className='w-4 h-4 rounded-full mr-2 bg-yellow-500'></p>:""}
          {product[item].color.includes('white')?<p className='w-4 h-4 rounded-full mr-2 bg-white-500'></p>:""}
          {product[item].color.includes('black')?<p className='w-4 h-4 rounded-full mr-2 bg-black'></p>:""}
        </div>
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

let product=await Product.find({category:"hoodi"})
let hoodies={}
for(let products of product){
    if(products.title in hoodies){
              if(!hoodies[products.title].color.includes(products.color) &&products.availableQ>0){
                      hoodies[products.title].color.push(products.color)
                      hoodies[products.title].size.push(products.size)
              }
    }
    else{
        hoodies[products.title]=JSON.parse(JSON.stringify(products))
        if(products.availableQ>0){
            hoodies[products.title].color=[products.color]
            hoodies[products.title].size=[products.size]
        }
    }
}
  return {
    
    props: {product: JSON.parse(JSON.stringify(hoodies))}, // will be passed to the page component as props
  }
}