import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const {user} = useSelector((state)=> state.user);
  return (
    <header className="bg-slate-400 p-4">
        <div className="flex items-center justify-between max-w-7xl m-auto">
            <NavLink to={'/'}>
                <h1 className="flex flex-wrap text-md sm:text-2xl">
                        <span className="text-slate-600">Zen</span>
                        <span className="text-slate-800">Estates</span>
                </h1>
            </NavLink>
            <form className="flex items-center justify-center px-4 py-2 rounded-xl bg-slate-200">
                <input className="bg-transparent focus:outline-none" type="text" placeholder="Search..."/>
                <FaSearch className="text-slate-600"/>
            </form>
            <ul className="flex gap-7 text-sm sm:text-lg">
                <NavLink className="hidden sm:inline" to={'/'}><li>Home</li></NavLink>
                <NavLink className="hidden sm:inline" to={'/about'}><li>About</li></NavLink>
                <NavLink to={'/profile'}>
                    {user ? <img className="w-7 h-7 rounded-full object-cover" src={user.avatar} alt="profile" /> : <li>Sign In</li>}
                </NavLink>
            </ul>
        </div>
    </header>
  )
}

export default NavBar
