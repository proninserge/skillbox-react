import { CardHeader } from './CardHeader/CardHeader';
import { CardControls } from './CardControls/CardControls';
import { CardMenu } from './CardMenu/CardMenu';
import styles from './card.less';
import {IPostsDataKeyData} from '@utils/react/hooks/usePostsData';

export function Card(props: IPostsDataKeyData) {
    const {author, title, id, preview, created_utc, thumbnail, ups, downs} = props;

    return (
        <li className={styles.card}>
            <CardHeader thumbnail={thumbnail} created={created_utc} title={title} author={author}/>
            <div className={styles.postPreview}>
                {preview ? <img src={preview.images[0].source.url} width={preview.images[0].source.width} height={preview.images[0].source.height} alt="Post preview"/> : <img src="https://cdn.dribbble.com/users/730703/screenshots/15503300/media/384ddbf6e843acf7457b5946f053df76.jpg?compress=1&resize=300x225" alt="Post preview"/>}
            </div>
            <CardMenu postId={id} />
            <CardControls ups={ups} downs={downs}/>
        </li>
    );
}