const NOOP = () => {};

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

export {NOOP, PostControl, POST_CONTROLS};
