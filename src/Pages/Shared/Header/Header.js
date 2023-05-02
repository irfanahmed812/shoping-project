import React from 'react';
import logo from '../../../images/logopng.png'
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img className='logo-image' src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link fw-bold text-black" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold text-black" href="/about">About</a>
                            </li>
                            <li className="nav-item sing-in">
                                <a className="nav-link fw-bold text-black" href="/sign-in">Sing in </a>
                            </li>
                            <li className="nav-item sing-up ">
                                <a className="nav-link fw-bold text-white" href="/sign-up">Sing up </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;