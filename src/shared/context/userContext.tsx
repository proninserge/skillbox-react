import useUserData from "@utils/react/hooks/useUserData";

interface IUserContextData {
    name?: string;
    iconImg?: string;
};

const userContext = React.createContext<IUserContextData>({});

const UserContextProvider = (props: {children: React.ReactNode}) => {
    const {children} = props;

    const [data] = useUserData();

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    );
};

export {IUserContextData, userContext, UserContextProvider};