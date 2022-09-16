import './navbar.scss'
import React, { useState } from 'react';
import logo from './../../../assets/img/logo.png' 
import { CgMenuLeft } from 'react-icons/cg';



const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg  bg-dark fixed-top">
            <a className="navbar-brand text-info font-weight-bolder" href="/">
                <img className='mx-4 logo-item' src={logo} style={{ width: '150px' }} />
            </a>
            <button className="custom-toggler navbar-toggler shadow-none" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span >
                    <CgMenuLeft className='navbar-toggler-icon '/>
                </span>
            </button>

            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse `}>
                <a className='nav-link-item  mx-4  text-white' href="">Anasayfa</a>
                <a className='nav-link-item mx-4 text-white' href="">Hakkımızda</a>
                <a className='nav-link-item mx-4 text-white ' href="">Neler Yapıyoruz?</a>
                <a className='nav-link-item mx-4  text-white  ' href="">Ürünler</a>
                <a className='nav-link-item mx-4 text-white ' href="">Kvkk Politikalarımız</a>
                <a className='nav-link-item mx-4 text-white ' href="">İletişim</a>
            </div>
        </nav>
    );
}

export default Header;