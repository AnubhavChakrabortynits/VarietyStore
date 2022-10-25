import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function Navbar() {
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

    <div className="cart absolute right-0 mx-5 top-4">
     <AiOutlineShoppingCart className='md:text-3xl text-xl' />
    </div>
    
    </div>
  )
}
