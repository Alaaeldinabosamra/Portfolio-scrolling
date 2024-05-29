import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Speaking</a></li>
        <li><a href="">Users</a></li>
      </ul>

      <p>© powered by Samra space in 2024. All rights reserved.</p>
    </footer>
  )
}

export default Footer