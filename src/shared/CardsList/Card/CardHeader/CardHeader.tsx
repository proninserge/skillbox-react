import styles from './cardheader.less';

export function CardHeader() {
    return (
        <div className={styles.cardHeader}>
            <div className={styles.metaData}>
                <div className={styles.userData}>
                    <div className={styles.userAvatar}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Amiel_-_Pepin_the_Short.jpg/1200px-Amiel_-_Pepin_the_Short.jpg" alt="Avatar pic"/>
                    </div>
                    <a href="#" className={styles.userLink}>Владимир Петров</a>
                </div>
                <span className={styles.timeStamp}>
                    <span className={styles.mobileLabel}>опубликовано</span>
                    5 часов назад
                </span>
            </div>
            <h2 className={styles.title}>
                <a href="#" className={styles.postLink}>Но представители современных социальных течений но представители современных социальных течений</a>
            </h2>
        </div>
    );
}