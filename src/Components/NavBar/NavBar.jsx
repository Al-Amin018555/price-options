import React, { useState } from 'react';
import Link from '../Link/Link';
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";



const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { path: "/", name: "Home", id: 1 },
        { path: "/about", name: "About", id: 2 },
        { path: "/services", name: "Services", id: 3 },
        { path: "/contact", name: "Contact", id: 4 },
        { path: "/login", name: "Login", id: 5 }
    ];
    return (
        <nav>
            <div className='text-2xl md:hidden' onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <IoCloseOutline />
                        :
                        <CiMenuBurger />
                }

                {/* <CiMenuBurger></CiMenuBurger> */}


            </div>
            <ul className={`md:flex absolute md:static duration-1000 bg-yellow-300 p-5
                 ${open ? 'top-6' : '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>

    );
};

export default NavBar;