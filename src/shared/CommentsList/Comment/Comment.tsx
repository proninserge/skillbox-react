import styles from './comment.less';
import NewComment from '@components/NewComment/NewComment';
import preventDefault from '@utils/react/preventDefault';
import { useStore } from 'react-redux';

const Comment = () => {
    const store = useStore();
    const token = store.getState().USER.token;

    const handleReplyButtonClick = () => {
        setReplyOpen(true)
    };

    const handleReplySend = () => {
        setReplyOpen(false)
    };

    const [isReplyOpen, setReplyOpen] = React.useState(false);

    return (
        <>
            <li className={styles.comment}>
                <div className={styles.top}>
                    <a href="#">User Name</a>
                </div>
                <div className={styles.body}>
                    <p>
                        Принимая во внимание показатели успешности, разбавленное изрядной долей эмпатии,
                        рациональное мышление прекрасно подходит для реализации анализа существующих паттернов поведения.
                        Равным образом, убеждённость некоторых оппонентов, в своём классическом представлении.
                    </p>
                </div>
                <div className={styles.controls}>
                    <button onClick={preventDefault(handleReplyButtonClick)}>Ответить</button>
                </div>
            </li>

            {token && isReplyOpen && <NewComment handleReplySend={handleReplySend}/>}
        </>
        
    );
};

export default Comment;