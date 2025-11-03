import React from 'react'
import Logo from '../../assets/logo-basel.svg'

function Header() {
    return (
        <>
            <header className='header'>
                <div className="top-header d-flex justify-content-between">
                    <div className="contact"><i className="bi bi-phone-fill"></i> +977 9800000000</div>
                    <ul className="d-flex gap-3 mb-0">
                        <li><a href="">My Account </a></li>
                        <li><a href="">Cart </a></li>
                        <li><a href="">our location </a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="nav-bar d-flex justify-content-between align-items-center">
                    <nav>
                        <ul className='d-flex gap-3'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Shop</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Features</a></li>
                        </ul>
                    </nav>
                    <a href="">
                        <img src={Logo} alt="" />
                    </a>
                    <div className="account">
                        Login / Register
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
