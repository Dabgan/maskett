'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Menu.module.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../public/logo.svg';

const Menu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const pathName = usePathname();
    const isActive = (path: string): string => (pathName == path ? styles.active : '');

    return (
        <nav className={styles.menu}>
            <div className={styles.logo}>
                <Image src={logo} width={180} alt="teksam logo"></Image>
            </div>
            <div className={`${styles.links} ${isMenuOpen ? styles.open : ''}`}>
                <Link href="/" className={isActive('/')}>
                    Strona Główna
                </Link>
                ``
                <Link href="/about" className={isActive('/about')}>
                    O nas
                </Link>
                <Link href="/projects" className={isActive('projects')}>
                    Realizacje
                </Link>
                <Link href="/contact" className={isActive('contact')}>
                    Kontakt
                </Link>
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={`${styles.line} ${isMenuOpen ? styles.open : ''}`} />
                <div className={`${styles.line} ${isMenuOpen ? styles.open : ''}`} />
                <div className={`${styles.line} ${isMenuOpen ? styles.open : ''}`} />
            </div>
        </nav>
    );
};

export default Menu;
