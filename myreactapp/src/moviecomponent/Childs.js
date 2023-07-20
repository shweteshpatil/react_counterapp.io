import React from 'react'

const Childs = ({childGift,childGift1="default",postman}) => {

let returnGift="flower";
postman(returnGift);

  return(


    <>
    <h1>I am from childs and my gift is: </h1>
    <h1>{childGift}</h1>
    
    
    
    
    </>
  )

}

export default Childs