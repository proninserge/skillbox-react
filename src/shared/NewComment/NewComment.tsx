import useIsMounted from '@utils/react/hooks/useIsMounted';
import preventDefault from '@utils/react/preventDefault';
import styles from './newcomment.less';
import { ChangeEvent } from 'react';

interface INewCommentProps {
    handleReplySend: () => void;
};

const NewComment = (props: INewCommentProps) => {
    const {handleReplySend} = props;

    const [isMounted] = useIsMounted();

    const [comment, setComment] = React.useState(`User Name, `);

    const handleCommentInput = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(evt.target.value);
    };

    const newCommentRef = React.useRef<HTMLTextAreaElement>(null);

    if (isMounted && newCommentRef.current) {
        newCommentRef.current.focus();
        newCommentRef.current.selectionStart = newCommentRef.current.value.length
    }

    return (
        <form className={styles.newCommentForm} onSubmit={preventDefault(handleReplySend)}>
            <textarea className={styles.textArea} ref={newCommentRef} value={comment} onChange={preventDefault(handleCommentInput)}/>
            <button type="submit">Комментировать</button>
        </form>
    );
};

export default NewComment;