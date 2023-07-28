import Menu from '@/components/Menu/Menu';
import Image from 'next/image';
import styles from './Hero.module.scss';
import HeroText from '../HeroText/HeroText';
import heroImage from '../../../public/hero1.png';

const HeroContainer = () => {
    return (
        <>
            <Image
                src={heroImage}
                fill
                alt="hero image"
                quality={100}
                placeholder="blur"
                sizes="100vw"
                style={{ objectFit: 'cover' }}
            />
            <div className={styles.heroContainer}>
                <Menu></Menu>
                <HeroText />
            </div>
        </>
    );
};

export default HeroContainer;
