import React from 'react'
import { useState } from 'react'
import Childs from './Childs'

const Parents = () => {

  let gift = "car"

  const[postman,setPostman]=useState("");




  // const getReturnGift=()=>{


  //   return returnGift
  // }

  // let result=getReturnGift();


  return(
    <>
    <h1>Hello from parent Component value of return gift is:{postman}</h1>
    <hr/>
    <Childs childGift={gift} postman={setPostman}/>
    
    
    
    
    </>
  )
 
}

export default Parents