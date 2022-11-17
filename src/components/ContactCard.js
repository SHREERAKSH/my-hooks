import React from 'react'

const ContactCard=(props)=> {
    const {name,email}=props.contact;
console.log(props.name)
  return (
    <div>
       <div className='list' >  
 
 <div>  

 <div> {name}</div>
<div> {email}</div> 

<button className='btn' >delete</button>
  </div>



</div>
    </div>
  )
}
export default ContactCard;