import styles from './HeroText.module.scss';

const HeroText = () => {
    return (
        <div className={styles.heroTextContainer}>
            <h1 className={styles.title}>Zachowaj spokój we własnym domu: zrobimy wszystko za Ciebie!</h1>
            <p>Nasza firma oferuje pełen zakres usług remontowo-budowlanych i gwarantuje jakość wykonanej pracy</p>
            <button className={styles.button}>Umów się na konsultację</button>
        </div>
    );
};

export default HeroText;
