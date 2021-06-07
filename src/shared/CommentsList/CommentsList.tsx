import Comment from './Comment/Comment';
import styles from './commentslist.less';

const CommentsList = () => {
    return (
        <ul className={styles.commentsList}>
            <Comment />
        </ul>
    );
};

export default CommentsList;