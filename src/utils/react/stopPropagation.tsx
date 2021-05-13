const stopPropagation = <T extends (evt: any) => void>(cb: T) => {
    return <E extends React.SyntheticEvent<any>>(evt: E) => {
        evt.stopPropagation();
        cb(evt);
    }
};

export default stopPropagation;