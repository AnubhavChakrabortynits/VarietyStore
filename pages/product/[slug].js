import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

import mongoose, { mongo } from 'mongoose'
import Product from '../../modals/Product'

export default function post({cart,addtoCart,removecart,clearcart,subtotal,product,variants}) {

  const router=useRouter()
  const checkservice=async()=>{
     let pins=await fetch('http://localhost:3000/api/pincode')
     let pindata=await pins.json();
   
     if(pindata?.includes(parseInt(pin))){
      setService(true)
     }
     else{
      setService(false);
     }
     
    
  }

  const refreshVariant=(newcolor,newsize)=>{
let url=`http://localhost:3000/product/${variants[newcolor][newsize]['slug']}`
window.location=url
  }

  const [pin,setPin]=useState('')
  const [service,setService]=useState(null)
  const [color,setColor]=useState(product.color)
  const [size,setSize]=useState(product.size)
  console.log(color)
  return (
<>
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-1/2 sm:px-24 px-2 object-cover object-center rounded" src={product.img}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed">{product.desc}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div class="flex">
            <span class="mr-3">Color</span>
            {console.log(variants)}
            {Object.keys(variants).includes('white') && Object.keys(variants['white']).includes(size)? <button onClick={(e)=>{refreshVariant('white',size)}} className={`border-2 border-gray-300 bg-white mx-1 rounded-full w-6 h-6 focus:outline-none ${color=='white'?'border-black':'border-gray-300'}`}></button>:""}
            {Object.keys(variants).includes('red') && Object.keys(variants['red']).includes(size)? <button onClick={(e)=>{refreshVariant('red',size)}} className={`border-2 border-gray-300 bg-red-500 mx-1 rounded-full w-6 h-6 focus:outline-none ${color=='red'?'border-black':'border-red-300'}`}></button>:""}
            {Object.keys(variants).includes('blue') && Object.keys(variants['blue']).includes(size)? <button onClick={(e)=>{refreshVariant('blue',size)}} className={`border-2 border-gray-300 bg-blue-500 mx-1 rounded-full w-6 h-6 focus:outline-none ${color=='blue'?'border-black':'border-gray-300'}`}></button>:""}
            {Object.keys(variants).includes('yellow') && Object.keys(variants['yellow']).includes(size)? <button onClick={(e)=>{refreshVariant('yellow',size)}} className={`border-2 border-gray-300 mx-1 rounded-full bg-yellow-500 w-6 h-6 focus:outline-none ${color=='yellow'?'border-black':'border-gray-300'}`}></button>:""}
            {Object.keys(variants).includes('green') && Object.keys(variants['green']).includes(size)? <button onClick={(e)=>{refreshVariant('green',size)}} className={`border-2 border-gray-300 bg-green-500 rounded-full w-6 h-6 focus:outline-none ${color=='green'?'border-black':'border-gray-300'}`}></button>:""}
            {Object.keys(variants).includes('black') && Object.keys(variants['black']).includes(size)? <button onClick={(e)=>{refreshVariant('black',size)}} className={`border-2 border-gray bg-black rounded-full w-6 h-6 focus:outline-none ${color=='black'?'border-black':'border-gray-300'}`}></button>:""}
            
          </div>
          <div class="flex ml-6 items-center">
            <span class="mr-3">Size</span>
            <div class="relative">
              <select value={size} onChange={(e)=>{
                refreshVariant(color,e.target.value)
              }} class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
               {Object.keys(variants[color]).includes('S') &&   <option value={'S'}>S</option>}
               {Object.keys(variants[color]).includes('M') &&   <option value={'M'}>M</option>}
               {Object.keys(variants[color]).includes('L') &&   <option value={'L'}>L</option>}
               {Object.keys(variants[color]).includes('XL') &&   <option value={'XL'}>XL</option>}
               {Object.keys(variants[color]).includes('XXL') &&   <option value={'XXL'}>XXL</option>}
                
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button class="flex ml-5 text-white bg-purple-500 border-0 py-2 px-4 focus:outline-none hover:bg-purple-600 rounded md:text-xsm" onClick={()=>{addtoCart(router.query.slug,1,999,"Hoodie",size,color)}} >Add to Cart</button>
          <button class="flex ml-5 text-white bg-purple-500 border-0 py-2 px-4 focus:outline-none hover:bg-purple-600 rounded md:text-xsm">Buy Now</button>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>

        <div className="pin mt-6 flex space-x-2 test-sm">
          <input value={pin} onChange={(e)=>{setPin(e.target.value)}} type="text" className='px-2 border-2 border-purple-100 rounded-md' placeholder='pincode' />
          <button className='flex ml-5 text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded' onClick={checkservice}>check</button>
        </div>
        <div className={`pinmessage text-sm ${service==true?"text-green-400":"text-red-400"} `}>
        {service==true?'Yay,Delivery is available for this pincode':'Sorry,We do not deliver to this pincode'}

        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export async function getServerSideProps(context){

  if(!mongoose.connections[0].readyState){
    await mongoose.connect("mongodb://localhost:27017/varietystore",{ useNewUrlParser: true,
    useUnifiedTopology: true})
}

let product=await Product.findOne({slug: context.query.slug})
let variants=await Product.find({title: product.title})
let colorSizeSlug={}
for(let item of variants){
  if(Object.keys(colorSizeSlug).includes(item.color)){
    colorSizeSlug[item.color][item.size]={slug: item.slug}
  }
  else{
    colorSizeSlug[item.color]={}
    colorSizeSlug[item.color][item.size]={slug: item.slug}

  }
}
return {
  props: {variants: JSON.parse(JSON.stringify(colorSizeSlug)),product: JSON.parse(JSON.stringify(product))}
}


}