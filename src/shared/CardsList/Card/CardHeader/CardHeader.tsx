import styles from './cardheader.less';
import {toReadableDate} from '@utils/utils';
import PostTitle from './PostTitle/PostTitle';

interface ICardHeaderProps {
    thumbnail: string,
    created: string,
    title: string,
    author: string,
};

export function CardHeader(props: ICardHeaderProps) {
    const {thumbnail, created, title, author} = props;

    return (
        <div className={styles.cardHeader}>
            <div className={styles.metaData}>
                <div className={styles.userData}>
                    <div className={styles.userAvatar}>
                        <img src={thumbnail} alt="Avatar pic"/>
                    </div>
                    <a href="#" className={styles.userLink}>{author}</a>
                </div>
                <span className={styles.timeStamp}>
                    <span className={styles.mobileLabel}>опубликовано</span>
                    {toReadableDate(created)}
                </span>
            </div>
            <PostTitle title={title}/>
        </div>
    );
}