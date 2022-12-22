import React from 'react'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'


export default function signup() {
  const router=useRouter()
  const [name,setName]=useState()
  const [pass,setPass]=useState()
  const [email,setEmail]=useState()

  const handleSubmit=async(e)=>{
    e.preventDefault()
 const formBody={name: name,email: email,password: pass}
    const data=await fetch(`http://localhost:3000/api/signup`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
   
      body: JSON.stringify(formBody)
    })
    
    let response=await data.json()
    const val=response.success || response.error
    if(response.success){
    toast.success(val, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
     setTimeout(()=>{router.push('/login')},2000)
    }
    else{
      toast.error('Please Enter valid Data', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }
    console.log(response)
    setName('')
    setEmail('')
    setPass('')
  }
  useEffect(() => {
    if(localStorage.getItem('token')){
     router.push('/')
    }
     })
  return (
    <div className='mb-4'>

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
      <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8">
    <div>
      <img class="mx-auto h-18 w-20" src='https://images-platform.99static.com/iIhd3I11LfUA3pt-TGCdCb0mpbg=/500x500/top/smart/99designs-contests-attachments/48/48489/attachment_48489540' alt="Variety Store"/>
      <h2 class="mt-5 text-center text-3xl font-bold tracking-tight text-gray-900">Sign Up</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Already Signed Up??
      <Link href={'/login'}><a class="font-medium text-purple-600 hover:text-purple-500"> Login</a></Link> 
      </p>
    </div>
    <form onSubmit={handleSubmit} class="mt-8 space-y-6" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
        <div>
          <label for="name" class="sr-only">Name</label>
          <input id="name" name="name" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm" placeholder="Name"/>
        </div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm" placeholder="Password"/>
        </div>
        
      </div>

     

      <div>

        <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
         
            <svg class="h-5 w-5 text-purple-500 group-hover:text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign Up
        </button>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}
