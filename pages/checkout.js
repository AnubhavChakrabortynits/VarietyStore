import React, { useState } from 'react'
import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiFillCloseCircle,AiFillPlusCircle,AiFillMinusCircle,AiFillDelete} from 'react-icons/ai';
import {BsBagCheckFill} from 'react-icons/bs'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';


export default function checkout({cart,clearcart,addtoCart,subtotal,removecart}) {

  const router=useRouter()
  const [name,setName]=useState(()=>'')
  const [email,setEmail]=useState(()=>'')
  const [phone,setPhone]=useState(()=>'')
  const [pincode,setPincode]=useState(()=>'')
  const [address,setA]=useState(()=>'')
  const [city,setCity]=useState(()=>'Los Angeles')
  const [state,setState]=useState(()=>'California')
  const [disabled,setDisabled]=useState(()=>true)

  const handleChange=(e)=>{
      if(e.target.name=='name'){
        setName(()=>e.target.value)
      }
      else if(e.target.name=='email'){
        setEmail(()=>e.target.value)
      }
      else if(e.target.name=='phone'){
        setPhone(()=>e.target.value)
      }
      else if(e.target.name=='pincode'){
        setPincode(()=>e.target.value)
      }
      else if(e.target.name=='address'){
        setA(()=>e.target.value)
      }
      else if(e.target.name=='state'){
        setState(()=>e.target.value)
      }
      else if(e.target.name=='city'){
        setCity(()=>e.target.value)
      }

      setTimeout(()=>{
        if(name && email && phone && pincode && address && city && state){
          setDisabled(()=>false)
        }
        else{
          setDisabled(()=>true)
        }
      },100)

   
  }

  const handleOrder=async()=>{
    const formBody={name: name,email: email,address:address,pincode:pincode,oid:'12176',subtotal:subtotal,cart:cart}
    const data=await fetch(`http://localhost:3000/api/pay`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
   
      body: JSON.stringify(formBody)
    })
    
    let response=await data.json()
    if(response.success){
      router.push('/order')
    }
    else{
      alert('some error ocuured')
    }
   // console.log(response)
  }
 
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      router.push('/login')
    }
  })
  return (
    <div className='container  mx-auto mb-6'>
    <Head>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
    </Head>
      <div className='font-bold text-xl text-center my-4 '>Checkout</div>
      <div className="text-xl mb-4 w-[90vw] mx-auto font-bold">1.Delivery Details</div>
      <div className='flex mb-6 w-[90vw] mx-auto'>
      <div className="px-2 w-1/2 mx-4">
        
        <div class="relative  w-full">
        <label htmlFor='name'> Name</label>
        <input type="text" id="name" name="name" value={name} onChange={(e)=>{handleChange(e)}} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      
      </div>
      <div className="px-2 w-1/2 mx-4">
       
        <div class="relative flex-grow w-full">
        <label htmlFor='email'> Email</label>
        <input type="email" value={email} onChange={(e)=>{handleChange(e)}} id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      
      </div>

      
      </div>
      <div className="flex mb-6 flex-col w-[90vw] mx-auto ">
     
      <div className="address w-full flex flex-col items-start px-6"> 
       
      <label htmlFor='address mb-2'>Address</label>
       <textarea rows={3} cols={8} value={address} onChange={(e)=>{handleChange(e)}} id="address" name="address" class="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea></div>
      </div>

      <div className="flex mb-6 w-[90vw] mx-auto">
        <div className="px-2 w-1/2 mx-4">
        <div class="relative flex-grow w-full">
        <label htmlFor='city' > City</label>
        <input type="text" readOnly={true} value={city} onChange={(e)=>{handleChange(e)}} id="city" name="city" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
        </div>

        <div className="px-2 w-1/2 mx-4">
        <div class="relative flex-grow w-full">
        <label htmlFor='state'> State</label>
        <input type="text" readOnly={true} value={state} onChange={(e)=>{handleChange(e)}} id="state" name="state" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
        </div>
      </div>
     

      <div className="flex mb-6 w-[90vw] mx-auto">
        <div className="px-2 w-1/2 mx-4">
        <div class="relative flex-grow w-full">
        <label htmlFor='phone'> Phone</label>
        <input type="number" value={phone} onChange={(e)=>{handleChange(e)}} id="phone" name="phone" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
        </div>

        <div className="px-2 w-1/2 mx-4">
        <div class="relative flex-grow w-full">
        <label htmlFor='pincode'>Pincode</label>
        <input type="number" value={pincode} onChange={(e)=>{handleChange(e)}} id="pincode" name="pincode" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
        </div>
      </div>
     
       
      <div className="text-xl font-bold  mb-4 w-[90vw] mx-auto">2.Review Cart</div>
       

      <div  className="  sidebar bg-purple-100 cursor-pointer text-2xl w-[90vw] mx-auto p-10">
<h2 className="font-bold text-xl text-center">Shopping Cart</h2>
    


    <ol className='list-decimal font-semibold text-sm'>
    {Object.keys(cart).length==0 && <div className='my-4 text-center'>No items in the cart</div>}
      {Object.keys(cart)?.map((item)=>{
        return <li key={item}>
      <div className="item flex my-5 items-center gap-6">

      <div className='text-sm   font-semibold'>{cart[item].name} </div>
        <div className='  flex items-center justify-center font-semibold text-lg space-x-2'>
          <AiFillPlusCircle onClick={()=>{addtoCart(item,1,cart[item].price,cart[item].name,cart[item].size,cart[item].variant)}} className='cursor-pointer text-purple-500'/> <span className='space-x-2'>{cart[item]?.qty}</span> <AiFillMinusCircle onClick={()=>{
            removecart(item,1,cart[item].price,cart[item].name,cart[item].size,cart[item].variant)
          }} className='text-purple-500 cursor-pointer' />
        </div>

      </div>
        
      </li>
      })
     
      }
    
    
    
   
   

    </ol>
   <span className="total font-semibold">SubTotal: {subtotal}$</span>
  
      
</div>
 <div className="max-4 w-[90vw] mx-auto"><button disabled={disabled} onClick={handleOrder} className='disabled:bg-purple-200 mt-4 text-white  bg-purple-500 border-0 py-2 px-4 focus:outline-none hover:bg-purple-600 rounded text-sm items-center' >Pay {subtotal}$</button></div>

    </div>
  )
}
