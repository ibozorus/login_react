import '../styles/mat_example.css';
import styles from '../styles/mat_example.module.css';

export default function MatExample() {

    return (
        <>
            <section className="section1">
                <div className="wrapper">
                    <img
                        src="./images/banner.jpg"
                        alt="banner"
                        className="image"
                    />
                    <p>
                        Sample Image
                    </p>
                </div>
            </section>
            <section className={styles.section1}>
                <div className={styles.wrapper}>
                    <h1>
                        PIRTPI
                    </h1>
                    <h4>
                        PIRTPIRTPIRTPIRTPIRTP
                    </h4>
                </div>
            </section>
        </>
    )
}
