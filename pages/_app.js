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
    newCart[itemcode].qty=newCart[itemcode].qty+qty;
  }
  else{
newCart[itemcode]={qty:1,price,name,size,variant}
  }
  setCart(newCart)
  saveCart(newCart)
  
  }

  const saveCart=(cartobj)=>{
    localStorage.setItem('cart',JSON.stringify(cartobj))
    let subt=0
    for(let i=1;i<=Object.keys(cartobj).length;i++){
 
      subt+=((cartobj[i].price)*(cartobj[i].qty))
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
<Component cart={cart} addtoCart={addtoCart} removecart={removeCartItem} clearcart={clearCart} subtotal={subTotal} {...pageProps} />
<Footer cart={cart} addtoCart={addtoCart} removecart={removeCartItem} clearcart={clearCart} subtotal={subTotal}/>
  </>
}

export default MyApp
