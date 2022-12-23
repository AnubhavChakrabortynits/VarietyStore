import React from 'react'
import { useEffect } from 'react'
import {useRouter} from 'next/router'


export default function myaccount() {
 const router=useRouter()
useEffect(()=>{
    if(!localStorage.getItem('token')){
        router.push('/login')
    }
})
  return (
    <div>myaccount</div>
  )
}
