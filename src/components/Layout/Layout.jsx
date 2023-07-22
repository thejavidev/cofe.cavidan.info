import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <AnimatePresence>
        {children}
      </AnimatePresence>

      <Footer />
    </>
  )
}

export default Layout
