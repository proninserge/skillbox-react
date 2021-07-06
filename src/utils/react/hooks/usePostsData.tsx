import { ApiActionCreator } from '@store/api-actions';
import { useDispatch, useStore } from 'react-redux';

interface IPostsData {
    data: IPostsDataKeyData;
    kind: string;
};

interface IPostsDataKeyData {
    author: string;
    title: string;
    id: string;
    preview: IPreviewImage;
    created_utc: string;
    thumbnail: string;
    ups: string;
    downs: string;
};

interface IPreviewImage {
    images: [{source: {url: string, width: string, height: string}}];
};

const usePostsData = () => {  
    const store = useStore();
    const token = store.getState().USER.token;

    const posts: IPostsData[] = store.getState().POSTS.posts;

    const dispatch = useDispatch();

    React.useEffect(() => {
        if (token) {
            dispatch(ApiActionCreator.savePosts());
        }
    }, [token]);

    return [posts];
};

export {usePostsData, IPostsDataKeyData, IPostsData};