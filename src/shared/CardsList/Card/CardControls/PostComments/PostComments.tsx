import styles from './postcomments.less';

export function PostComments() {
    return (
        <div className={styles.postComments}>
            <button className={styles.toComments}>
                C
            </button>
            <span className={styles.commentsAmount}>13</span>
        </div>
    );
}