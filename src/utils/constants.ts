const NOOP = () => {};

const CLIENT_ID: string | undefined = process.env.CLIENT_ID;

const HREF_FOR_OAUTH2 = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3030/auth&duration=permanent&scope=read identity submit`;

const enum PostControl {
    COMMENTS = 'comments',
    SHARE = 'share',
    HIDE = 'hide',
    SAVE = 'save',
    COMPLAIN = 'complain',
    CLOSE = 'close',
}

const POST_CONTROLS = [
    {
        content: 'Комментарии',
        id: PostControl.COMMENTS
    },
    {
        content: 'Поделиться',
        id: PostControl.SHARE
    },
    {
        content: 'Скрыть',
        id: PostControl.HIDE   
    },
    {
        content: 'Сохранить',
        id: PostControl.SAVE
    },
    {
        content: 'Пожаловаться',
        id: PostControl.COMPLAIN
    },
    {
        content: 'Закрыть',
        id: PostControl.CLOSE
    },
];

export {NOOP, HREF_FOR_OAUTH2, PostControl, POST_CONTROLS};
