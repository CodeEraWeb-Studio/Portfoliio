import React from 'react'


const ContactPage = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>    
    </div>
  )
}

export default ContactPage