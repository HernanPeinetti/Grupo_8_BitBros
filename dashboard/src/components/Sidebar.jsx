import React from 'react'
import { Link } from "react-router-dom";

// images
// import logo from '../../../public/icon/logo.svg'
const SideBar = () => {
    return (
        <>
            <ul className="navbar-nav sidebar sidebar-dark accordion" style={{backgroundColor: "rgb(33,37,41)"}} id="accordionSidebar">

                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" alt="Digital House" />
                    </div>
                </Link>

                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="bi bi-grid-fill"></i>
                        <span>Dashboard</span></Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">Páginas</div>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/products">
                        <i className="fas fa-fw fa-cubes"></i>
                        <span>Productos</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/users">
                        <i className="fa-solid fa-users"></i>
                        <span>Usuarios</span></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/categories">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Categorías</span></Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
        </>
    )
}

export default SideBar
