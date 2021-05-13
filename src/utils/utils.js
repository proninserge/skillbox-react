const renderSvgDirectly = (svg) => {
    return <span dangerouslySetInnerHTML={{__html: `${svg}`}} />;
};

export {renderSvgDirectly};