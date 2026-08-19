import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'
import WhatsappAndCall from "../components/WhatsappAndCall";


const Layout = ({ children }) => {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");
  return (
    <div>
      {!isAdminPage && <Navbar />}

      <main style={{ marginTop: isAdminPage ? 0 : "90px" }}>
        {children}
      </main>

      {!isAdminPage && <WhatsappAndCall />}
      {!isAdminPage && <Footer />}
    </div>
  )
}

export default Layout