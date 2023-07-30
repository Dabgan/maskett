import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div>
                <h1>O nas</h1>
                <h2>Remonty pod klucz</h2>
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
                <div>
                    <div>
                        <span>25</span>
                        <p>Koncepcja projektu</p>
                    </div>
                </div>
            </div>
            {/* <Image></Image> */}
            <div></div>
        </div>
    );
};

export default About;
