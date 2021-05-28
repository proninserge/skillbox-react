import {HREF_FOR_OAUTH2} from '@/utils/constants';
import {IconAnon} from '@components/Icons/IconAnon';
import styles from './userblock.less';

interface IUserBlockProps {
    avatarSrc?: string;
    userName?: string;
}

const UserBlock = (props: IUserBlockProps) => {
    const {avatarSrc, userName} = props;

    return (
        <a 
            href={HREF_FOR_OAUTH2}
            className={styles.userBlock}
        >
            <div className={styles.userAvatarBox}>
                {avatarSrc ? <img src={avatarSrc} alt={userName} /> : <IconAnon />}
            </div>
            <div className={styles.userNameBox}>
                <span>{userName ? userName : 'Аноним'}</span>
            </div>
        </a>
    );
};

export default UserBlock;