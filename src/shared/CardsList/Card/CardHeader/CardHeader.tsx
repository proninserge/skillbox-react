import styles from './cardheader.less';
import {toReadableDate} from '@utils/utils';

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
            <h2 className={styles.title}>
                <a href="#" className={styles.postLink}>{title}</a>
            </h2>
        </div>
    );
}