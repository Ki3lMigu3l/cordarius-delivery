import React from 'react'
import '../styles/Cordarius.css'
import Navbar from '../components/navbar/Navbar'
import banner from '../assets/Banner-Cordarius-Desktop.png'
import Cardapio from '../components/cardapio/Cardapio'

const Cordarius = () => {
    
  return (
    <><><div>
      <Navbar />
      <div className='cordarius-container'>
        <img className='cordarius-banner' src={banner} alt="cordarius delivery banner" />
      </div>
      <div className='cordarius-title-cardapio'>
        <h2>Cardápio</h2>
      </div>
    </div><Cardapio /></></>
  )
}

export default Cordarius
