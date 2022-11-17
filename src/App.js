
import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'

function App() {
  const [contacts,setContacts]=useState([]);
  const add=(name,email)=>{
    console.log(name,email)
    setContacts([...contacts,name,email])
    console.log(setContacts)
  }
  
  // const contacts=[

  //   {

  //     id:'1',
  //     name:'Shreeraksha',
  //     email:'shreerakshashetty4@gmail.com'
  //   },

  //   {

  //     id:'2',
  //     name:'Shetty',
  //     email:'shetty4@gmail.com'
  //   }

  // ]
  return(
    <div>

<Header name='shreeraksha'/>
<Header name='ram'/>
<Header name='sham'/>
{/* <AddContact add={add}/>
<ContactList contacts={contacts}/> */}
{/* <AddContact/>
<ContactList/> */}



    </div>
//   const [firstName,setFirstName]=useState('')
//   const [lastName,setLastName]=useState('')
//   const [address,setAddress]=useState('')
//   const [email,setEmail]=useState('')
//   const [submit,setSubmit]=useState(false)
//   const[valid,setValid]=useState(false)
 
// const handleSubmit=(e)=>{
//  //for validation v r using yup library  npm install yup
//   e.preventDefault();
//   if(firstName&&lastName&&address&&email){
//     setValid(true); //just for validation
//     console.log(e)
//   }
//   setSubmit(true)
//   console.log(setSubmit)
//  }
 
 
 
//   return (
//     <div className='form-container'>
// <form  onSubmit={handleSubmit}  className='register-form' >
// {submit&& valid?'hey sucessfully submitted':null}
// <div>
// <input className='form-field'
// placeholder='FirstName'
// value={firstName}
// onChange={(e)=>{setFirstName(e.target.value)}}
// name="firstName"/>

// {submit && !firstName?<span>plse enter fst name</span>:null}
// </div>
// <div>
// <input className='form-field'
// placeholder='LastName'
// value={lastName}
// onChange={(e)=>{setLastName(e.target.value)}}
// name="lastName"/>

// {submit && !lastName?<span>plse enter last name</span>:null}
// </div>
// <div>
// <input className='form-field'
// placeholder='Address'
// onChange={(e)=>{setAddress(e.target.value)}}
// value={address}
// name="address"/>

// {submit && !address?<span>plse enter address</span>:null}
// </div>
// <div>
// <input className='form-field'
// placeholder='Email'
// onChange={(e)=>{setEmail(e.target.value)}}
// value={email}
// name="email"/>

// {submit && !email?<span>plse enter email</span>:null}
// </div>
// <button type="submit">Submit</button>
// </form>




//     </div>
  );
}

export default App;
