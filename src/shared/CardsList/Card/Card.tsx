import { CardHeader } from './CardHeader/CardHeader';
import { CardControls } from './CardControls/CardControls';
import { CardMenu } from './CardMenu/CardMenu';
import styles from './card.less';

const postId = '123';

export function Card() {
    return (
        <li className={styles.card}>
            <CardHeader />
            <div className={styles.postPreview}>
                <img src="https://cdn.dribbble.com/users/730703/screenshots/15503300/media/384ddbf6e843acf7457b5946f053df76.jpg?compress=1&resize=300x225" alt="Post preview"/>
            </div>
            <CardMenu postId={postId} />
            <CardControls />
        </li>
    );
}