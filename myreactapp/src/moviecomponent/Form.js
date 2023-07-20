// import React from 'react'
// import { useState } from 'react'

// const Form = () => {

// const[name,setName]=useState("")
// const handleSubmit=(e)=>{

// e.preventdefault()

// }





//   return (



//     <>
//     <form onSubmit={handleSubmit}>
    
//     <input type='text'
//     name='fname'
//     id='fname'
//     onChange={(e)=>setName(e.target.value)}
//     />
    
//     <input type='submit' value="send"/>

    
//     <h1>value of Fullname is:{name}</h1>
    
//     </form>
    
    
//     </>
//   )
// }

// export default Form


import React,{useState} from 'react'

const Form = () => {

const[input,setInput]=useState({

    fname:"",
    lname:"",
    email:""

})

// handle submit function
const handleSubmit=(e)=>{
    e.preventDefault()

}


// handle change function
const handleChange=(e)=>{
setInput({

...input,
[e.target.name]:e.target.value

})


}

console.log(input);


  return (

<form onSubmit={handleSubmit}>




<input type='text'
name='fname'
id="fname"
placeholder='please eneter your firstname'
value={input.fname}

onChange={handleChange}/>
<br/>


<input type='text'
name='lname'
id="lname"
placeholder='please eneter your lastname'
value={input.lname}

onChange={handleChange}/>

<br/>

<input type='email'
name='email'
id="email"
placeholder='please eneter your mailid'
value={input.email}

onChange={handleChange}/>

<br/>
<input type='submit' value="send"/>


</form>
)
}

export default Form