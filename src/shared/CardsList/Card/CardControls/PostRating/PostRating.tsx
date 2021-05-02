import styles from './postrating.less';

export function PostRating() {
    return (
        <div className={styles.postRating}>
            <button className={styles.ratingUp}>+</button>
            <span className={styles.ratingAmount}>666</span>
            <button className={styles.ratingDown}>-</button>
        </div>
    );
}