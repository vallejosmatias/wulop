import React from 'react'
import '../css/VentanaHome.css'

export const VentaHome = () => {
  return (
    <div className='container-btn'>
      <a href='#' className='btn-inicio'>¿Qué es Wulop?</a>
      <a className="btn-wpp" target="_blank" href="https://wa.me/+5491153382624?text=Hola! Me gustaría mas info."><i class="fa-brands fa-whatsapp">Whats App</i></a>
    </div>
  )
}
