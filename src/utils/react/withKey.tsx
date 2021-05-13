const withKey = (key?: string) => {
    return <PropsType extends Record<string, unknown>, Component extends React.ComponentType<PropsType>>(reactComponent: Component) =>
        (props: PropsType, index: number) =>
            React.createElement(
                reactComponent,
                { ...props, key: key ? props[key as keyof PropsType] : index },
                []
            );
};

export default withKey;