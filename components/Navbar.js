import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiFillCloseCircle,AiFillPlusCircle,AiFillMinusCircle,AiFillDelete} from 'react-icons/ai';
import {BsBagCheckFill} from 'react-icons/bs'


export default function Navbar() {

  const toggleCart=()=>{

    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')}
      else{
        ref.current.classList.add('translate-x-full')
        ref.current.classList.remove('translate-x-0')
      }

    }
  

  const ref=useRef()
  return (
    <div className='flex md:flex-row md:justify-start flex-col justify-center items-center md:shadow-md '>
    <div className="logo mx-3">
<img src='https://images-platform.99static.com/iIhd3I11LfUA3pt-TGCdCb0mpbg=/500x500/top/smart/99designs-contests-attachments/48/48489/attachment_48489540' style={{height:"70px"}}/>
    </div>
    <div className="nav py-2">
      <ul className='flex items-center space-x-2 font-bold md:text-xl'>
        <li><Link href={'/tshirts'}><a>T-Shirts</a></Link></li>
        <li><Link href={'/hoodies'}><a>Hoodies</a></Link></li>
        <li><Link href={'/mugs'}><a>Mugs</a></Link></li>
        <li><Link href={'/'}><a>Accessories</a></Link></li>
        <li><Link href={'/stickers'}><a>Stickers</a></Link></li> 
      </ul>
    </div>

    <div className="cart absolute right-0 mx-5 top-4 cursor-pointer " onClick={toggleCart}>

     <AiOutlineShoppingCart className='md:text-3xl text-xl' />
    </div>

<div ref={ref} style={{minHeight:"100vh"}} className=" w-72 sidebar bg-purple-100 absolute top-0 right-0 cursor-pointer text-2xl transform transition-transform translate-x-full p-10">
<h2 className="font-bold text-xl text-center">Shopping Cart</h2>
    <span onClick={toggleCart} className="absolute  w-2/3  cursor-pointer text-2xl text-purple-500" style={{top:"5px",right:"0",position:"absolute"}}><AiFillCloseCircle/></span>


    <ol className='list-decimal font-semibold text-sm'>
      <li>
      <div className="item flex my-5">

      <div className='text-sm  w-2/3 font-semibold'>Get All You Want Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque alias autem non! </div>
        <div className='w-1/3  flex items-center justify-center font-semibold text-lg space-x-2'>
          <AiFillPlusCircle className='cursor-pointer text-purple-500'/> <span className='space-x-2'>1</span> <AiFillMinusCircle className='text-purple-500 cursor-pointer' />
        </div>

      </div>
        
      </li>
      <li>
      <div className="item flex my-5">

      <div className='text-sm  w-2/3 font-semibold'>Get All You Want Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque alias autem non! </div>
        <div className='w-1/3  flex items-center justify-center font-semibold text-lg space-x-2'>
          <AiFillPlusCircle className='cursor-pointer text-purple-500'/> <span className='space-x-2'>1</span> <AiFillMinusCircle className='text-purple-500 cursor-pointer' />
        </div>

      </div>
        
      </li>
      <li>
      <div className="item flex my-5">

      <div className='text-sm  w-2/3 font-semibold'>Get All You Want Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque alias autem non! </div>
        <div className='w-1/3  flex items-center justify-center font-semibold text-lg space-x-2'>
          <AiFillPlusCircle className='cursor-pointer text-purple-500'/> <span className='space-x-2'>1</span> <AiFillMinusCircle className='text-purple-500 cursor-pointer' />
        </div>

      </div>
        
      </li>
      <li>
      <div className="item flex my-5">

      <div className='text-sm  w-2/3 font-semibold'>Get All You Want Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque alias autem non! </div>
        <div className='w-1/3  flex items-center justify-center font-semibold text-lg space-x-2'>
          <AiFillPlusCircle className='cursor-pointer text-purple-500'/> <span className='space-x-2'>1</span> <AiFillMinusCircle className='text-purple-500 cursor-pointer' />
        </div>

      </div>
        
      </li>
      <li>
      <div className="item flex my-5">

      <div className='text-sm  w-2/3 font-semibold'>Get All You Want Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque alias autem non! </div>
        <div className='w-1/3  flex items-center justify-center font-semibold text-lg space-x-2'>
          <AiFillPlusCircle className='cursor-pointer text-purple-500'/> <span className='space-x-2'>1</span> <AiFillMinusCircle className='text-purple-500 cursor-pointer' />
        </div>

      </div>
        
      </li>
      <li>
      <div className="item flex my-5">

      <div className='text-sm  w-2/3 font-semibold'>Get All You Want Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque alias autem non! </div>
        <div className='w-1/3  flex items-center justify-center font-semibold text-lg space-x-2'>
          <AiFillPlusCircle className='cursor-pointer text-purple-500'/> <span className='space-x-2'>1</span> <AiFillMinusCircle className='text-purple-500 cursor-pointer' />
        </div>

      </div>
        
      </li>


    </ol>
    <div className="flex justify-center items-center text-md gap-2">
    <button className="flex mx-auto mt-16 text-white  bg-purple-500 border-0 py-2 px-4 focus:outline-none hover:bg-purple-600 rounded text-sm items-center"><BsBagCheckFill/>Checkout</button>
    <button className="flex mx-auto mt-16 text-white  bg-purple-500 border-0 py-2 px-4 focus:outline-none hover:bg-purple-600 rounded text-sm items-center"><AiFillDelete/>Clear</button>
    </div>

</div>
    
    
    </div>
  )
}
