import styles from './postrating.less';
import {getPostRating} from '@utils/utils';

interface IPostRatingProps {
    ups: string,
    downs: string,
}

export function PostRating(props: IPostRatingProps) {
    const {ups, downs} = props;

    return (
        <div className={styles.postRating}>
            <button className={styles.ratingUp}>+</button>
            <span className={styles.ratingAmount}>{getPostRating(ups, downs)}</span>
            <button className={styles.ratingDown}>-</button>
        </div>
    );
}