import React, { useEffect, useState } from 'react'
import Navbar from './Addtocart/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Product from './Addtocart/Product/Product'
import Cart from './Addtocart/Cart/Cart'
import axios from "axios"
import Readmore from './Addtocart/Readmore/Readmore'
import Login from './Addtocart/Login/Login'
import Signup from './Addtocart/Signup/Signup'

const App = () => {
  
  const [datas,setdata] =  useState([])
  const task = async() =>{
    const fetchdata = await axios.get("https://fakestoreapi.com/products")
    setdata(fetchdata.data)
  }

  useEffect(()=>{
    task()
  },[])


  const [addtc,setaddtc] = useState([])
  const [amount,setamount] = useState(0)
    const atc =(e)=>{
      if(addtc.includes(e)){
        alert("already exist")
      }else{
        const copydata = [...addtc]
        copydata.push(e)
        setaddtc(copydata) 
        setamount(amount + e.price)
      }
    }

    const del =(i,e)=>{
      const copydataa = [...addtc]
      copydataa.splice(i,1)
      setaddtc(copydataa) 
      console.log("hello")
        setamount(amount - e.price)
    }

    const [rm,setrm] = useState("")

    const readm =(e)=>{
      console.log(e)
      setrm(e)
    }
 
  return (
    
    <div>
      <Navbar cartcount = {addtc.length} />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/product' element={<Product datas = {datas} atc = {atc} readm ={readm} />} />
        <Route path='/cart' element={<Cart addtc = {addtc}  del = {del} amount={amount} />} />
        <Route path='/readmore' element={<Readmore rm = {rm} />} />
      </Routes>
    </div>
  )
}

export default App
