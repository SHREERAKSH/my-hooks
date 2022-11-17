// import React from 'react'

// const Header=() =>{
//   return (
//     <div className='header'>
//       <div className='header-container'>
//         <h2>Contact Manager</h2>
//       </div>
//     </div>
//   )
// }
// export default Header;



import React from 'react'

function Header({name}) {
  return (
    <div>
      <h1>My name is {name}</h1>
    </div>
  )
}
export default Header;