import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'
function MyApp({ Component, pageProps }) {

  const [cart,setCart]=useState({})
  const [subTotal,setSubTotal]=useState(0)
  const [user,setUser]=useState({value: null})
  const [key,setKey]=useState()
  const [progress,setProgress]=useState(0)
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

  const handleRouteChange=()=>{
    setProgress(100)
  }
  const handleRouteChangeStart=()=>{
    setProgress(40)
  }

useEffect(()=>{
  router.events.on('routeChangeStart', handleRouteChangeStart)
  router.events.on('routeChangeComplete', handleRouteChange)
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
  const token=localStorage.getItem('token')
  if(token){
  setUser({value: token})
  setKey(Math.random())
  }
},[router.query])
  return <>
   <LoadingBar loaderSpeed={200} waitingTime={300} color={'#F108F9'} progress={progress} onLoaderFinished={() => setProgress(0) } />

{ <Navbar key={key} setkey={setKey} setuser={setUser} user={user} cart={cart} addtoCart={addtoCart} removecart={removeCartItem} clearcart={clearCart} subtotal={subTotal} />}
<Component buyNow={buyNow} cart={cart} addtoCart={addtoCart} removecart={removeCartItem} clearcart={clearCart} subtotal={subTotal} {...pageProps} />
<Footer cart={cart} addtoCart={addtoCart} removecart={removeCartItem} clearcart={clearCart} subtotal={subTotal}/>
  </>
}

export default MyApp
