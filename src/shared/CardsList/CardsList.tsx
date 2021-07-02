import { Card } from './Card/Card';
import styles from './cardslist.less';
import withKey from '@utils/react/withKey';
import {getPosts} from '@utils/utils';
import { RootState } from '@store/reducer/root-reducer';
import {IPostsData} from '@utils/react/hooks/usePostsData';
import { useSelector } from 'react-redux';

export function CardsList() {

    const posts = useSelector<RootState, IPostsData[]>(state => state.posts);

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