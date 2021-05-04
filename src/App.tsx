import './main.global.less';
import { hot } from 'react-hot-loader/root';
import { Layout } from '@components/Layout/Layout';
import { Header } from '@components/Header/Header';
import { Content } from '@components/Content/Content';
import { CardsList } from '@components/CardsList/CardsList';

function AppComponent() {
    return(
        <Layout>
            <Header></Header>
            <Content>
                <CardsList />
            </Content>
        </Layout>
    );
};

export const App = hot(AppComponent)