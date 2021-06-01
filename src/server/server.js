import express from 'express';
import ReactDOM from 'react-dom/server';
import {App} from '../App';
import {indexTemplate} from './indexTemplate';
import axios from 'axios';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(<App></App>)),
    );
});

app.get('/auth', (req, res) => {
    // console.log(req.query.code);
    axios.post(
        'https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3030/auth`,
        {
            auth: {
                username: process.env.CLIENT_ID,
                password: 'ya9z6UWxyJhSPKEF8vCd2dRJZPkfjA'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    )
     .then(({data}) => {
        res.send(
            indexTemplate(ReactDOM.renderToString(<App></App>), data['access_token']),
        );
     })
     .catch(console.log);
});

app.listen(3030, '0.0.0.0', () => {
    console.log('Server started on host 3030');
});