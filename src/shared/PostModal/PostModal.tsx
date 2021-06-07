import styles from './postmodal.less';
import ReactDOM from 'react-dom';
import preventDefault from '@utils/react/preventDefault';
import useRefCustom from '@utils/react/hooks/useRefCustom';
import CommentsList from '@components/CommentsList/CommentsList';

interface IPostModalProps {
    title: string;
    handleCloseButtonClick: () => void;
};

const PostModal = (props: IPostModalProps) => {
    const {title, handleCloseButtonClick} = props;

    const [ref] = useRefCustom<HTMLDivElement>(handleCloseButtonClick);

    return(
        <div className={styles.postModal} ref={ref}>
            <button className={styles.closeModal} onClick={preventDefault(handleCloseButtonClick)}>X</button>
            <h2 className={styles.postHeader}>{title}</h2>
            <div className={styles.postMain}>
                <p>
                    Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное,
                    как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям.
                    Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость
                    кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов,
                    которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу
                    обществу.
                </p>
                <p>
                    Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное,
                    как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям.
                    Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость
                    кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов,
                    которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу
                    обществу.
                </p>
            </div>
            <CommentsList />            
        </div>
    );
};

const PostModalPortaled = (props: IPostModalProps) => {
    const {title, handleCloseButtonClick} = props;

    const node = document.querySelector('#modal_root');
    if (!node) return null;

    return ReactDOM.createPortal(<PostModal title={title} handleCloseButtonClick={handleCloseButtonClick} />, node);
};



export {PostModal, PostModalPortaled};
