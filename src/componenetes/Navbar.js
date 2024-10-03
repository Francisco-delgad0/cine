import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light">
      <div className="container-fluid">
        <NavLink 
          to="/Homepage" 
          className={({ isActive }) => `navbar-link text-white ${isActive ? 'active-link' : ''}`} 
        >
          CineApp
        </NavLink>
        <NavLink 
          to="/Cartelera" 
          className={({ isActive }) => `nav-link text-white ${isActive ? 'active-link' : ''}`} 
        >
          Cartelera
        </NavLink>
        <NavLink 
          to="/Cines" 
          className={({ isActive }) => `nav-link text-white ${isActive ? 'active-link' : ''}`} 
        >
          Cines
        </NavLink>
        <NavLink 
          to="/Confiteria" 
          className={({ isActive }) => `nav-link text-white ${isActive ? 'active-link' : ''}`} 
        >
          Confitería
        </NavLink>
        <NavLink 
          to="/Login" 
          className={({ isActive }) => `nav-link text-white ${isActive ? 'active-link' : ''}`} 
        >
          Iniciar Sesión
        </NavLink>
        <span className="nav-indicador"></span>
      </div>
    </nav>
  );
}

export default Navbar;
