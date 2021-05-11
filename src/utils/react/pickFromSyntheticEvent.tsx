const pickFromSyntheticEvent = <T extends HTMLElement>() => {
    return <K extends keyof T>(key: K) => 
        <E extends ((t: T[K]) => void)>(cb: E) =>
            (evt: React.SyntheticEvent<T>) => 
                cb(evt.currentTarget[key]);
};

const getInputElementValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
const getInputElementChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

export {getInputElementValue, getInputElementChecked};