import Menu from '@/components/Menu/Menu';
import Image from 'next/image';
import styles from './Hero.module.scss';
import HeroText from '../HeroText/HeroText';

const HeroContainer = () => {
    return (
        <div className={styles.heroContainer}>
            <Image src="/hero.jpg" fill alt="hero image" />
            <div className={styles.layoutContainer}>
                <Menu></Menu>
                <HeroText />
            </div>
        </div>
    );
};

export default HeroContainer;
