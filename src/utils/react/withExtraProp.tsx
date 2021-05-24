const withExtraProps = <ExtraPropsType, PropsType>(extraProps: ExtraPropsType, reactComponent: React.ComponentType<PropsType>) =>
    {return (props: PropsType) =>
        React.createElement(
            reactComponent,
            { ...props, ...extraProps },
            []
        );
    };

export default withExtraProps;
