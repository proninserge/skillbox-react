const preventDefault = <T extends (evt: any) => void>(cb: T) => {
    return <E extends React.SyntheticEvent<any>>(evt: E) => {
        evt.preventDefault();
        cb(evt);
    }
};

export default preventDefault;
