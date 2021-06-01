import styles from './cardcontrols.less';
import { PostRating } from './PostRating/PostRating';
import { PostComments } from './PostComments/PostComments';
import { PostActions } from './PostActions/PostActions';

interface ICardControlsProps {
    ups: string,
    downs: string,
}

export function CardControls(props: ICardControlsProps) {
    const {ups, downs} = props;

    return (
        <div className={styles.cardControls}>
            <PostRating ups={ups} downs={downs} />
            <PostComments />
            <PostActions />
        </div>
    );
}