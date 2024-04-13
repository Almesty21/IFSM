import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [asideNav, setAsideNav] = useState(false); // New state for aside navigation

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
    setAsideNav(!asideNav); // Toggle asideNav as well
  };

  // Toggle function to handle the aside navigation's display
  const handleAsideNav = () => {
    setAsideNav(!asideNav);
    if (nav && asideNav) {
      setNav(false); // Close navbar if it's open
    }
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Search' },
    { id: 2, text: 'Contact' },
    { id: 3, text: 'Student Exchange Program'},
  ];

  // Array containing aside navigation items
  const asideNavItems = [
    { id: 1, text: 'Who we are' },
    { id: 2, text: 'Programs' },
    { id: 3, text: 'Standing Committees' },
    { id: 4, text: 'Policy Advocacy' },
    { id: 5, text: 'Events & Trainings' },
    { id: 6, text: 'Opportunities' },
    { id: 7, text: 'Media Center' },
    { id: 8, text: 'Join us' },
    { id: 9, text: 'News' },
  ];

  return (
    <div className='bg-black block w-100 flex justify-between items-center h-24 px-4 text-white'>
      {/* Logo */}
      <h1 className='text-3xl font-bold text-[#00df9a]'>IFSM.</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
            onClick={handleAsideNav} // Call handleAsideNav when clicking on navItems
          >
            {item.text}
          </li>
        ))}
        <button className="mr-2" onClick={handleAsideNav}>
          {asideNav ? <AiOutlineClose size={20} /> : <GiHamburgerMenu size={20} />}
        </button>
      </ul>
    
      {/* Mobile Navigation Icon for navItems */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav || asideNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu for navItems */}
      <ul
        className={
          (nav || asideNav)
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>IFSM.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}

        {/* Render asideNavItems in mobile navigation only if asideNav is true */}
        {asideNav && asideNavItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
            onClick={handleAsideNav} // Close the menu when clicking on asideNavItems
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
