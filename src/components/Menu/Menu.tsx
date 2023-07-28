'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Menu.module.scss';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../public/logo.svg';

const Menu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log('🚀🚀 \x1b[36m ~ file: Menu.tsx:11 ~ Menu ~ isMenuOpen:', isMenuOpen);
        setMenuOpen(!isMenuOpen);
    };

    const pathName = usePathname();
    const isActive = (path: string): string => (pathName == path ? styles.active : '');

    return (
        <nav className={styles.menu}>
            <div className={styles.logo}>
                <Image src={logo} alt="company logo" className={styles.logo}></Image>
            </div>
            <ul className={`${styles.links} ${isMenuOpen ? styles.open : ''}`}>
                <Link href="/" className={isActive('/')}>
                    Strona Główna
                </Link>
                <Link href="/" className={isActive('/about')}>
                    O nas
                </Link>
                <Link href="/" className={isActive('projects')}>
                    Realizacje
                </Link>
                <Link href="/" className={isActive('contact')}>
                    Kontakt
                </Link>
            </ul>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={`${styles.line} ${isMenuOpen ? styles.open : ''}`} />
                <div className={`${styles.line} ${isMenuOpen ? styles.open : ''}`} />
                <div className={`${styles.line} ${isMenuOpen ? styles.open : ''}`} />
            </div>
        </nav>
    );
};

export default Menu;
