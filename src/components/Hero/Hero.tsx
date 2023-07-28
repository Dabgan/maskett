import Menu from '@/components/Menu/Menu';
import Image from 'next/image';
import styles from './Hero.module.scss';
import HeroText from '../HeroText/HeroText';

const HeroContainer = () => {
    return (
        <>
            <Image src="/hero1.png" fill alt="hero image" />
            <div className={styles.heroContainer}>
                <Menu></Menu>
                <HeroText />
            </div>
        </>
    );
};

export default HeroContainer;
