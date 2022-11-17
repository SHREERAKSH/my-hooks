import React,{useState} from 'react'

const AddContact=(props) =>{
    // const {name,email}=props.add;
  const [name,setName]=useState('')  ;
  const [email,setEmail]=useState('');
//  const submit=(e)=>{
// e.preventDefault();
// if(!name ||!email){
//     alert('plse enter details')
// }else{
//     add(name,email)
//     setName('');
//     setEmail('')
//     console.log(setName)
// }
//   }

const submit=(e)=>{
    e.preventDefault();
    if(name===''||email===''){
        alert('plse enter all details')
    }
    else{
        props.add(name,email)
        console.log(props.add); 
    setName(" ");
    setEmail(" ")
  
   
    }
};


  return (
    <div>
        <h2>Add contact</h2>
   <form>
    <div>
   <input type="text" name='name' placeholder='Name'  onChange={(e)=>{setName({name:e.target.value})}}/>
   <label>Name</label>
   </div>
   <div>
   <input type="text" name='email' placeholder='email' onChange={(e)=>{setEmail({email:e.target.value})}}/>
   <label>Email</label>
   </div>
   <button onClick={submit}>Submit</button>
    </form>   
    </div>
  );
}
export default AddContact;