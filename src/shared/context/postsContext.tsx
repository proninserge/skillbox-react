import {usePostsData} from "@utils/react/hooks/usePostsData";

interface IPostsContextData {
    data: IPostsContextDataKeyData;
    kind: string;
};

interface IPostsContextDataKeyData {
    author: string;
    title: string;
    id: string;
    preview: IPreviewImageContext;
    created_utc: string;
    thumbnail: string;
    ups: string;
    downs: string;
};

interface IPreviewImageContext {
    images: [{source: {url: string, width: string, height: string}}];
};

const postsContext = React.createContext<Array<IPostsContextData>>([]);

const PostsContextProvider = (props: {children: React.ReactNode}) => {
    const {children} = props;

    const [posts] = usePostsData();

    return (
        <postsContext.Provider value={posts}>
            {children}
        </postsContext.Provider>
    );
};

export {postsContext, PostsContextProvider};