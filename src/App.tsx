import './main.global.less';
import { hot } from 'react-hot-loader/root';
import { Layout } from '@components/Layout/Layout';
import { Header } from '@components/Header/Header';
import { Content } from '@components/Content/Content';
import { CardsList } from '@components/CardsList/CardsList';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import {rootReducer} from '@store/reducers/root-reducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

function AppComponent() {
    return(
        <Provider store={store}>
            <Layout>
                <Header />
                <Content>
                    <CardsList />
                </Content>
            </Layout>
        </Provider>
    );
};

const App = hot(AppComponent);

export {App}