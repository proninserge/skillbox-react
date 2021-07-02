import axios from 'axios';
import { useStore } from 'react-redux';

interface IUserData {
    name?: string;
    iconImg?: string;
};


const useUserData = () => {
    const [data, setData] = React.useState<IUserData>({});
    
    const store = useStore();
    const token = store.getState().token;

    React.useEffect(() => {
        axios.get('https://oauth.reddit.com/api/v1/me',
            {headers: {Authorization: `bearer ${token}`}
        })
        .then((resp) => {
            const userData = resp.data;
            setData({name: userData.name, iconImg: userData.icon_img});
        })
        .catch(console.log);
    }, [token]);

    return [data];
};

export default useUserData;