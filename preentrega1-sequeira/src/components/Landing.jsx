import React from 'react'
import ItemListContainer from './Navbar/ItemListContainer'
import { NavbarComponent } from './Navbar/Navbar'


const Landing = () => {
  return (
<>
    
    
    <NavbarComponent />

    <div class="alert alert-info" role="alert" >
      <ItemListContainer greeting='Aca va a ir toda la info sobre la web' />
    </div>

</>    
  )
}

export default Landing