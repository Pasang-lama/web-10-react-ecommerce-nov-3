import React from 'react'
import Logo from '../../assets/logo-basel.svg'
import { Link } from 'react-router'
function Header() {
    return (
        <>
            <header className='header'>
                <div className="top-header d-flex justify-content-between">
                    <div className="contact"><i className="bi bi-phone-fill"></i> +977 9800000000</div>
                    <ul className="d-flex gap-3 mb-0">
                        <li><a href="">My Account </a></li>
                        <li><Link to={`/cart`}>Cart </Link></li>
                        <li><a href="">our location </a></li>
                        <li> <Link to={`/contact`}>Contact us</Link></li>
                    </ul>
                </div>
                <div className="nav-bar d-flex justify-content-between align-items-center">
                    <nav>
                        <ul className='d-flex gap-3'>
                            <li><a href="">Home</a></li>
                            <li><Link to={`/shop`}>Shop</Link></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Features</a></li>
                        </ul>
                    </nav>
                    <Link to={`/`}>
                        <img src={Logo} alt="" />
                    </Link>
                    <div className="account">
                        Login / Register
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
