import styles from './postactions.less';

export function PostActions() {
    return (
        <div className={styles.postActions}>
            <button className={styles.sharePost}>
                SH
            </button>
            <button className={styles.savePost}>
                SV
            </button>
        </div>
    );
}