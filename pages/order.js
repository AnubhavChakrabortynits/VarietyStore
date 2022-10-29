import React from 'react'

export default function order() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Variety Store</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Order ID=#221186</h1>
       
        <p class="leading-relaxed mb-4">Your Order Has Been Succesfully Placed</p>
        <div class="flex border-t border-gray-200 py-2 font-bold">
          <span class="text-purple-500">Item</span>
          <span class="ml-auto text-purple-500">Quantity</span>
          <span class="ml-auto text-purple-500">Price</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Hoodie</span>
          <span class="ml-auto text-gray-900">1</span>
          <span class="ml-auto text-gray-900">999$</span>
        </div>
      
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Hoodie</span>
          <span class="ml-auto text-gray-900">1</span>
          <span class="ml-auto text-gray-900">999$</span>
        </div>
      
        <div class="flex my-4">
          <span class="title-font font-medium text-xl text-gray-900">SubTotal:$58.00</span>
          <button class="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Track Order</button>
          
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
    </div>
  )
}
