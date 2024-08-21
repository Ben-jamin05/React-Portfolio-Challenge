// src/components/Header.jsx
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <h1>Benjamin Hill</h1>
      <nav>
        <ul className='nav'>
          <li className='flexLink'><Link to="/" >About Me</Link></li>
          <li className='flexLink'><Link to="/portfolio" >Portfolio</Link></li>
          <li className='flexLink'><Link to="/contact" >Contact</Link></li>
          <li className='flexLink'><Link to="/resume" >Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
