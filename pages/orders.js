import React from 'react'
import Order from '../modals/Order'
import mongoose from 'mongoose'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function () {
  const router=useRouter()



  useEffect(()=>{
    if(!localStorage.getItem('token')){
      router.push('/login')
    }
  })
  return (
    <div>
      <div className='container text-xl font-bold pt-6 mx-auto w-[95%]'>
   <div className='text-center'>My Orders</div>
  
<div class="flex flex-col mt-6">
  <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-gray-200 border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                First
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Last
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Otto
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @mdo
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Jacob
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Thornton
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td>
            </tr>
    
            
          
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect("mongodb://localhost:27017/varietystore",{ useNewUrlParser: true,
    useUnifiedTopology: true})
  
}

let orders=await Order.find({})

  return {
    
    props: {orders : orders}, // will be passed to the page component as props
  }
}