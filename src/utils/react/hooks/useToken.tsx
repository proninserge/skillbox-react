import { ApiActionCreator } from "@store/api-actions";
import { useDispatch } from "react-redux";

const useToken = () => {
    const dispatch = useDispatch();
    
    const [token, setToken] = React.useState('');

    React.useEffect(() => {
        if (window.__token__ !== 'undefined') {
            setToken(window.__token__);
            dispatch(ApiActionCreator.saveToken());
        }
    }, []);

    return [token];
};

export default useToken;