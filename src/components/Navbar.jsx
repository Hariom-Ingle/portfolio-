import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../style';
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState(' ');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between item-center max-w-7x1 mx-auto">
        <Link 
          to= "/"
          className='flex item-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt="logo"
            className='w-9 h-9 object-contain'
          /> */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Hariom&nbsp;
            <span className='sm:block hidden'>
              | Web. Developer
            </span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title ? "white-text" : "text-secondary"} 
                hover:text-white text-[18px] cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href= {`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} 
            alt="menu" 
            className="w-[28] h-[28] object-contain cursor-pointer" 
            onClick={()=> setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 
              right-0 mx-4 my-2 rounded-xl min-w-[140px]`}
          >
            <ul className='list-none flex justify-end item-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id}
                  className={`${active === link.title ? "white-text" : "text-secondary"} 
                  font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title)}}
                >
                  <a href= {`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>              
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar