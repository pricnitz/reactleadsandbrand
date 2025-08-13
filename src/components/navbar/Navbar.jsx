import React from 'react'
import logo from '../../assets/logos/l.png'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-full bg-[linear-gradient(to_bottom,theme(colors.secondary)_0%,theme(colors.secondary)_65%,theme(colors.primarytransparent)_80%,transparent_100%)] text-white p-4'>
      <nav className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='text-lg font-bold max-w-80'>
          <img src={logo} alt="Logo" />
        </div>
        <ul className='flex gap-10'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/team">Team</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
