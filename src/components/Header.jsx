import React, { useState } from 'react'
import { UilTimesCircle, UilBars } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'

const Header = () => {
    const [menu, setMenu] = useState(true)

    return (
        <div className="header_bg_main">
            <div className="header_center">
                <div className="container_left">
                    <div className="nav_logo">C</div>
                    <Link to="#" className="logo_heading">Counts</Link>
                </div>
                <div className="container_center">
                    <li><Link to="">Home</Link></li>
                    <li><Link to="">Solutions</Link></li>
                    <li><Link to="">Pricing</Link></li>
                    <li><Link to="">About Us</Link></li>
                </div>
                <button><a href="">LogIn</a></button>
                <div onClick={() => setMenu(!menu)} className="container_right">
                    {
                        (menu) ?
                            <UilBars size="30px" color="green" /> :
                            <UilTimesCircle size="30px" color="green" />
                    }
                </div>
            </div>
            {
                (menu) ?
                    "" :
                    <div className="dropdown_menu">
                        <li onClick={() => setMenu(!menu)}><Link to="">Home</Link></li>
                        <li onClick={() => setMenu(!menu)}><Link to="">Solutions</Link></li>
                        <li onClick={() => setMenu(!menu)}><Link to="">Pricing</Link></li>
                        <li onClick={() => setMenu(!menu)}><Link to="">About Us</Link></li>
                        <li onClick={() => setMenu(!menu)}><button><Link to="">LogIn</Link></button></li>
                    </div>

            }

        </div>
    )
}

export default Header