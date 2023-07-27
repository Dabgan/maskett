import styles from './HeroText.module.scss';

const HeroText = () => {
    return (
        <div className={styles.heroTextContainer}>
            <h1 className={styles.title}>Stawiamy na skalę i jakość</h1>
            <button className={styles.button}>Zobacz zrealizowane projekty</button>
        </div>
    );
};

export default HeroText;
