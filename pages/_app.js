import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import { useEffect, useState } from 'react'
function MyApp({ Component, pageProps }) {

  const [cart,setCart]=useState({})
  const [subTotal,setSubTotal]=useState(0)

  const addtoCart=(itemcode,qty,price,name,size,variant)=>{
  let newCart=cart;
  if(itemcode in cart){
    newCart[itemcode].qty=cart[itemcode].qty+qty;
  }
  else{
newCart[itemcode]={qty:1,price,name,size,variant}
  }
  setCart(newCart)
  saveCart(cart)
  
  }

  const saveCart=(cartobj)=>{
    localStorage.setItem('cart',JSON.stringify(cartobj))
    let subt=0
    for(let i=0;i<Object.keys(cartobj).length;i++){
      subt+=((cartobj[Object.keys[i]]?.price)*(cartobj[Object.keys[i]]?.qty))
  }
  setSubTotal(subt)
}

  const clearCart=(cartobj)=>{
 setCart({})
 saveCart({})
  }

  const removeCartItem=(itemcode,qty,price,name,size,variant)=>{
    let newCart=cart;
    if(itemcode in cart){
      newCart[itemcode].qty=cart[itemcode].qty-qty;
    }
    if(newCart[itemcode].qty<=0){
      delete newCart[itemcode]
    }
    setCart(newCart)
    saveCart(cart)
    
  }

useEffect(()=>{
 
  try{
    if(localStorage.getItem('cart')){
  setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }
  catch(e){
    console.log(e)
    localStorage.clear()
  }
},[])
  return <>
<Navbar cart={cart} addtoCart={addtoCart} removecart={removeCartItem} clearcart={clearCart} subtotal={subTotal} />
<Component cart={cart} addtoCart={addtoCart} removecart={removeCartItem} clearcart={clearCart} subtotal={subTotal} {...pageProps} />
<Footer cart={cart} addtoCart={addtoCart} removecart={removeCartItem} clearcart={clearCart} subtotal={subTotal}/>
  </>
}

export default MyApp
