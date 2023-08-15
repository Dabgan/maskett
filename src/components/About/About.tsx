import styles from './About.module.scss';
import Image from 'next/image';
import about from '../../../public/planning.png';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>O nas</h1>
                <h2 className={styles.subtitle}>Remonty domów pod klucz</h2>
                <p>
                    Nasza firma zajmuje się remontami domów i mieszkań. Nasi fachowcy posiadają wieloletnie
                    doświadczenie w branży budowlanej i remontowej, zawsze służą fachową pomocą i radą w każdej kwestii
                    związanej z remontem domu.
                </p>
                <p>
                    Używamy tylko wysokiej jakości materiałów i narzędzi, aby zapewnić najwyższą jakość prac
                    naprawczych. Staramy się wyjść naprzeciw potrzebok każdego z naszych klientów i zapewnić im
                    komfortowe i bezpieczne życie we własnym domu.
                </p>
                <div className={styles.countersContainer}>
                    <div className={styles.counter}>
                        <span>25</span>
                        <p>Koncepcja projektu</p>
                    </div>
                    <div className={styles.counter}>
                        <span>350+</span>
                        <p>Zrealizowane projekty</p>
                    </div>
                    <div className={styles.counter}>
                        <span>46+</span>
                        <p>Rodzaje prac</p>
                    </div>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <Image
                    src={about}
                    alt="about"
                    style={{ width: '100%', height: '100%', display: 'block' }}
                    width={0}
                    height={0}
                ></Image>
            </div>
        </div>
    );
};

export default About;
