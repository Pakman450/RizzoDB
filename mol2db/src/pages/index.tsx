import Head from 'next/head'
import Image from 'next/image'
import { Big_Shoulders_Display, Inter } from 'next/font/google'
import SubHome from './SubHome'
import Login from './Login'
import {useState} from 'react'

// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })



export default function Home () {

  var i =1
  if (i==0){
    return(  
      // <body className='h-full'>
        <Login/>  
      // </body>
      )
  }else{
    return(<SubHome/>)
  }
}