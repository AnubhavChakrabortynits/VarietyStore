import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {

  const [cart,setCart]=useState({})
  const [subTotal,setSubTotal]=useState(0)
  const router=useRouter()

  const addtoCart=(itemcode,qty,price,name,size,variant)=>{
  let newCart=cart;
  if(itemcode in cart){
    newCart[itemcode].qty=newCart[itemcode].qty+qty;
  }
  else{
newCart[itemcode]={qty:1,price,name,size,variant}
  }
  setCart(newCart)
 console.log(Object.keys(newCart))
  saveCart(newCart)
  
  }

  const saveCart=(cartobj)=>{
    localStorage.setItem('cart',JSON.stringify(cartobj))
    let subt=0
    let keyarr=Object.keys(cartobj)
    for(let i=0;i<keyarr.length;i++){

      subt+=((cartobj[keyarr[i]].price)*(cartobj[keyarr[i]]?.qty))
  }

  setSubTotal(subt)
  localStorage.setItem('subt',String(subt))
}

  const clearCart=(cartobj)=>{
 setCart({})
 saveCart({})
  }

  const removeCartItem=(itemcode,qty,price,name,size,variant)=>{
    let newCart=cart;
    if(itemcode in cart){
      newCart[itemcode].qty=newCart[itemcode].qty-qty;
    }
    if(newCart[itemcode].qty<=0){
      delete newCart[itemcode]
    }
    setCart(newCart)
    saveCart(newCart)
    
  }

  const buyNow=(itemcode,qty,price,name,size,variant)=>{
   

  let newCart={itemcode:{qty:1,price,name,size,variant}};
  setCart(newCart)
  saveCart(newCart)
  
  router.push('/checkout')
  }

useEffect(()=>{
 
  try{
    if(localStorage.getItem('cart')){
      console.log(localStorage.getItem('cart'))
  setCart(JSON.parse(localStorage.getItem('cart')))
  setSubTotal(parseInt(localStorage.getItem('subt')))
    }
    else{
      localStorage.setItem('subt',String(0))
      setSubTotal(0)
    }
  }
  catch(e){
    console.log(e)
    localStorage.clear()

  }
},[])
  return <>
<Navbar cart={cart} addtoCart={addtoCart} removecart={removeCartItem} clearcart={clearCart} subtotal={subTotal} />
<Component buyNow={buyNow} cart={cart} addtoCart={addtoCart} removecart={removeCartItem} clearcart={clearCart} subtotal={subTotal} {...pageProps} />
<Footer cart={cart} addtoCart={addtoCart} removecart={removeCartItem} clearcart={clearCart} subtotal={subTotal}/>
  </>
}

export default MyApp
