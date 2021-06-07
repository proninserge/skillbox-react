import styles from './posttitle.less';
import {PostModalPortaled} from '@components/PostModal/PostModal';
import preventDefault from '@utils/react/preventDefault';

interface IPostTitleProps {
    title: string,
};

const PostTitle = (props: IPostTitleProps) => {
    const {title} = props;
    const [isModalOpen, setModalOpen] = React.useState(false);

    const handlePostTitleClick = () => {
        setModalOpen(true);
    };

    const handlePostModalCloseClick = () => {
        setModalOpen(false);
    };

    return (
        <>
            <h2 className={styles.title}>
                <a 
                    href="#"
                    className={styles.postLink}
                    onClick={preventDefault(handlePostTitleClick)}
                >{title}</a>
            </h2>

            {isModalOpen && <PostModalPortaled title={title} handleCloseButtonClick={handlePostModalCloseClick} />}
        </>
    );
};

export default PostTitle;