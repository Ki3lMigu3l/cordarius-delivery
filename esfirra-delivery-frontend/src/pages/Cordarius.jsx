import React from 'react'
import '../styles/Cordarius.css'
import Navbar from '../components/navbar/Navbar'
import banner from '../assets/Banner-Cordarius-Desktop.png'

const Cordarius = () => {
    
  return (
    <div>
      <Navbar/>
      <div className='cordarius-container'>
        <img className='cordarius-banner' src={banner} alt="" />
      </div>
      <div className='cordarius-btn-container'>
            <button className='cordarius-btn'>Faça o seu pedido!
            <i className="fa-solid fa-cart-shopping gap-btn"></i>
            </button>
      </div>
    </div>
  )
}

export default Cordarius
