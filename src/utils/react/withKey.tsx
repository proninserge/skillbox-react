const withKey = (key?: string) => {
    return <PropsType, Component extends React.ComponentType<PropsType>>(reactComponent: Component) =>
        (props: PropsType, index: number) =>
            React.createElement(
                reactComponent,
                { ...props, key: key ? key : index },
                []
            );
};

export default withKey;