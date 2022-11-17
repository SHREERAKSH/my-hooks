import React from 'react'
import ContactCard from './ContactCard'
import './ContactList.css'
const ContactList=(props) =>props.contacts.map((contact)=> {
    console.log(props)
//     const renderContactList=props.contacts.map((contact)=> {
//         return (
//             <div>
//           <div>  
            
//             {contact.name}<br/>
//           <div> {contact.email}</div> 

//           <button className='btn' >delete</button>
//             </div>
// </div>

//         )
       
//     })

  return (
    <div className='list'>  
 
         <ContactCard contact={contact}/>

 
    
    </div>
)
})
export default ContactList;


