import React from 'react'
import Header from '../UI/Header/Header'
import Footer from '../UI/Footer/Footer'

const MainLayout = ({children}) => {
  return (
    <>
    <Header/>
    <main>
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout