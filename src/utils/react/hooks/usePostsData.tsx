import axios from 'axios';
import tokenContext from '@components/context/tokenContext';

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
    const [posts, setPosts] = React.useState<Array<IPostsData>>([]);
    const token = React.useContext(tokenContext);

    React.useEffect(() => {
        if (token) {
            axios.get('https://oauth.reddit.com/best',
                {headers: {Authorization: `bearer ${token}`, 'Content-Type': 'application/json; charset=UTF-8'}
            })
            .then((resp) => {
                const firstFivePosts = resp.data.data.children.slice(0, 5);
                setPosts(firstFivePosts);
            })
            .catch(console.log);
        }
    }, [token]);

    return [posts];
};

export {usePostsData, IPostsDataKeyData, IPostsData};