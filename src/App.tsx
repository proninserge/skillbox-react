import './main.global.less';
import { hot } from 'react-hot-loader/root';
import { Layout } from '@components/Layout/Layout';
import { Header } from '@components/Header/Header';
import { Content } from '@components/Content/Content';
import { CardsList } from '@components/CardsList/CardsList';
import useToken from '@utils/react/hooks/useToken';
import tokenContext from '@components/context/tokenContext';
import {UserContextProvider} from '@components/context/userContext';
import {PostsContextProvider} from '@components/context/postsContext';

function AppComponent() {
    const [token] = useToken();

    return(
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <Layout>
                    <Header />
                    <Content>
                        <PostsContextProvider>
                            <CardsList />
                        </PostsContextProvider>
                    </Content>
                </Layout>
            </UserContextProvider>
        </tokenContext.Provider>
    );
};

export const App = hot(AppComponent)