import Hero from './components/hero/Hero'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import React from 'react'

function App() {


  return (
    <>
      <div id='up' className='container'>
        <Header />
        <Hero />
        <div className='divider' />
        <Main />
        <div className='divider' />
        <Contact />
        <div className='divider' />
        <Footer />
        <a href='#up'>
          <button className='icon-keyboard_arrow_up scroll2Top'></button>
        </a>
      </div>  
    </>
  )
}

export default App
