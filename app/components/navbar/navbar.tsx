"use client";

import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import styles from './Navbar.module.css';
import BackgroundSlider from '../slider/slider';



interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <li className={styles.navItem}>
    <a href={href}>{children}</a>
  </li>
);

interface NavButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className={styles.navButton}
  >
    {children}
  </button>
);

const Navbar: React.FC = () => {
  return (
    <>
    <BackgroundSlider/>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="http://acidum.like-themes.com/wp-content/uploads/2017/11/acidum_logo.png" alt="Logo" className={styles.logoImg} />
          </div>
          <ul className={styles.navItems}>
            <NavItem href="/">HOME</NavItem>
            <NavItem href="/about">ABOUT</NavItem>
            <NavItem href="/blog">BLOG</NavItem>
            <NavItem href="/gallery">GALLERY</NavItem>
            <NavItem href="/shop">SHOP</NavItem>
            <NavItem href="/contacts">CONTACTS</NavItem>
            <NavItem href="/elements">ELEMENTS</NavItem>
          </ul>
          <div className={styles.navActions}>
            <NavButton onClick={() => console.log('Cart clicked')}>
              <FaShoppingCart size={16} />
              <span className={styles.cartCount}>0</span>
            </NavButton>
            <FaSearch className={styles.searchIcon} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
