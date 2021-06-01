import { Card } from './Card/Card';
import styles from './cardslist.less';
import {postsContext} from '@components/context/postsContext';
import withKey from '@utils/react/withKey';
import {getPosts} from '@utils/utils';

export function CardsList() {
    const posts = React.useContext(postsContext);

    return (
        <>
            {
                posts.length !== 0 ?
                <ul className={styles.cardsList}>
                    {getPosts(posts).map(withKey('id')(Card))}
                </ul> : 
                <h2 className={styles.preload}>Nothing here just yet. Please sign in</h2>
            }
        </>
    );
}