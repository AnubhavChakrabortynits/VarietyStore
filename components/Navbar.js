import React, { useRef,useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiFillCloseCircle,AiFillPlusCircle,AiFillMinusCircle,AiFillDelete} from 'react-icons/ai';
import {BsBagCheckFill} from 'react-icons/bs'
import {MdAccountCircle} from 'react-icons/md'



export default function Navbar({user,key,setkey,setuser,cart,addtoCart,removecart,clearcart,subtotal}) {
  const [dropdown,setDropdown]=useState(false)
  
  const toggleCart=()=>{

    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')}
      else{
        ref.current.classList.add('translate-x-full')
        ref.current.classList.remove('translate-x-0')
      }

    }

    const toggleDropdown=()=>{
         if(dropdown===true){
         setDropdown(false)
         }
         else if(dropdown===false){
         setDropdown(true)
         }
    }


    const logout=()=>{
      localStorage.removeItem('token')
      setuser({value: null})
      setkey(Math.random())
    }
 

  const ref=useRef()
  return (
    <div className='flex md:flex-row md:justify-start flex-col justify-center sticky top-0 items-center md:shadow-md bg-white z-10' >
    <div className="">
<img src='https://images-platform.99static.com/iIhd3I11LfUA3pt-TGCdCb0mpbg=/500x500/top/smart/99designs-contests-attachments/48/48489/attachment_48489540' style={{height:"70px"}}/>
    </div>
    <div className="nav py-2">
      <ul className='flex items-center space-x-2 font-bold md:text-xl sm:text-sm'>
        <li  className='relative before:absolute before:left-0 before:rounded-[3px]  cursor-pointer  before:top-0 before:rounded-[3px] py-2 px-1 before:z-[-5] before:scale-x-0 before:hover:scale-x-100 hover:text-white before:h-full before:w-full before:bg-black before:content-[""] before:duration-300 '><Link href={'/tshirts'}><span>T-Shirts</span></Link></li>
        <li className='relative before:absolute before:left-0 before:rounded-[3px] py-2 px-1  before:top-0 before:z-[-5] before:scale-x-0 before:hover:scale-x-100 hover:text-white before:h-full before:w-full before:bg-black before:content-[""] before:duration-300 '><Link href={'/hoodies'}><a>Hoodies</a></Link></li>
        <li className='relative before:absolute before:left-0 before:rounded-[3px] py-2 px-1 before:top-0 before:z-[-5] before:scale-x-0 before:hover:scale-x-100 hover:text-white before:h-full before:w-full before:bg-black before:content-[""] before:duration-300 '><Link href={'/mugs'}><a>Mugs</a></Link></li>
        <li className='relative before:absolute before:left-0 before:rounded-[3px] py-2 px-1 before:top-0 before:z-[-5] before:scale-x-0 before:hover:scale-x-100 hover:text-white before:h-full before:w-full before:bg-black before:content-[""] before:duration-300 '><Link href={'/'}><a>Accessories</a></Link></li>
        <li className='relative before:absolute before:left-0 before:rounded-[3px] py-2   before:top-0 before:z-[-5] before:scale-x-0 before:hover:scale-x-100 hover:text-white before:h-full before:w-full before:bg-black before:content-[""] before:duration-300 '><Link href={'/stickers'}><a>Stickers</a></Link></li> 
      </ul>
    </div>

    <div className="cart absolute right-0 mx-5 top-4 cursor-pointer flex items-center gap-2" >
 {user.value && <MdAccountCircle onClick={toggleDropdown} className='md:text-3xl text-xl'/>}

 
{user.value===null ? <Link href={'/login'}><button className='bg-violet-500 hover:text-black hover:bg-violet-300 px-4 py-2 text-sm text-bold rounded-md font-bold text-white'>Login</button></Link> : ''}   

     <AiOutlineShoppingCart className='md:text-3xl text-xl' onClick={toggleCart} />

    {dropdown && <div className='absolute right-10 top-8 rounded-md px-5 py-2 w-40 bg-violet-300 '>
      <ul>
       <li className='py-2 text-sm font-[600] hover:text-white hover:bg-violet-700 text-center rounded-md '><Link href={'/account'}><a>My Account</a></Link></li>
       <li className='py-2 text-sm font-[600] hover:text-white hover:bg-violet-700 text-center rounded-md'><Link href={'/orders'}><a>My Orders</a></Link></li>
       <li className='py-2 text-sm font-[600] hover:text-white hover:bg-violet-700 text-center rounded-md' onClick={logout}>Logout</li>

        

      </ul>
     </div> }
    </div> 

<div ref={ref} style={{minHeight:"100vh"}} className=" w-72 overflow-y-scroll sidebar bg-purple-100 absolute top-0 right-0 cursor-pointer text-2xl transform transition-transform translate-x-full p-10">
<h2 className="font-bold text-xl text-center">Shopping Cart</h2>
    <div onClick={toggleCart} className="absolute  w-2/3  cursor-pointer text-2xl text-purple-500 absolute top-2 left-2" ><AiFillCloseCircle/></div>


    <ol className='list-decimal font-semibold text-sm'>
    {Object.keys(cart).length==0 && <div className='my-4 text-center'>No items in the cart</div>}
      {Object.keys(cart)?.map((item)=>{
      console.log(cart[item])
        return <li key={item}>
      <div className="item flex my-5">

      <div className='text-sm  w-2/3 font-semibold'>{cart[item].name}-{cart[item].size}-<button className={cart[item].variant=='black'?`h-3 w-3 mt-2 ml-1 rounded-full bg-black`:`h-3 w-3 mt-2 ml-1 rounded-full bg-${cart[item].variant}-500`}></button> </div>
        <div className='w-1/3  flex items-center justify-center font-semibold text-lg space-x-2'>
          <AiFillPlusCircle onClick={()=>{addtoCart(item,1,cart[item].price,cart[item].name,cart[item].size,cart[item].variant)}} className='cursor-pointer text-purple-500'/> <span className='space-x-2'>{cart[item]?.qty}</span> <AiFillMinusCircle onClick={()=>{
            removecart(item,1,cart[item].price,cart[item].name,cart[item].size,cart[item].variant)
          }} className='text-purple-500 cursor-pointer' />
        </div>

      </div>
        
      </li>
      })
      }
    
    
    
   
   

    </ol>
    <div className="total font-semibold my-1 text-sm text-center">SubTotal: {subtotal}$</div>
    <div className="flex justify-center items-center text-md gap-2">
   <Link href={'/checkout'}><a className="flex mx-auto mt-2 text-white  bg-purple-500 border-0 py-2 px-4 focus:outline-none hover:bg-purple-600 rounded text-sm items-center"><BsBagCheckFill/>Checkout</a></Link> 
    <button className="flex mx-auto mt-2 text-white  bg-purple-500 border-0 py-2 px-4 focus:outline-none hover:bg-purple-600 rounded text-sm items-center" onClick={clearcart}><AiFillDelete/>Clear</button>
    </div>

</div>
    
    
    </div>
  )
}
