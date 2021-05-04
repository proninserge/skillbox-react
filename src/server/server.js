import express from 'express';
import ReactDOM from 'react-dom/server';
import {App} from '../App';
import {indexTemplate} from './indexTemplate';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    console.log(req.headers.host);
    res.send(
        indexTemplate(ReactDOM.renderToString(App())),
    );
});

app.listen(3030, '0.0.0.0', () => {
    console.log('Server started on host 3030');
});