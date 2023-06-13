import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import useOnClickOutside from './useOnClickOutside';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  const [navbarOpen, setNavbarOpen] = useState(false);

  useOnClickOutside(ref, dropdown, () => setDropdown(false));

  return (
    <nav className="navbar">
      <button type="button" className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
        {navbarOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </button>
      <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
        {links.map((link) => (
          <li key={link.text}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
        <button
          type="button"
          className="services"
          onClick={() => setDropdown((prev) => !prev)}
        >
          Services
          {' '}
          <span>&#8595;</span>
        </button>
        {dropdown && (
          <ul>
            <li>
              <a href="/design">Design</a>
            </li>
            <li>
              <a href="/development">Development</a>
            </li>
          </ul>
        )}
        <li>
          <a href="/login">Login</a>
        </li>
        <li className="log-in">
          <span>Log in to edit to-dos</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
