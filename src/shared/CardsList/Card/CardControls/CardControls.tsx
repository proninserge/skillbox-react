import styles from './cardcontrols.less';
import { PostRating } from './PostRating/PostRating';
import { PostComments } from './PostComments/PostComments';
import { PostActions } from './PostActions/PostActions';

export function CardControls() {
    return (
        <div className={styles.cardControls}>
            <PostRating />
            <PostComments />
            <PostActions />
        </div>
    );
}