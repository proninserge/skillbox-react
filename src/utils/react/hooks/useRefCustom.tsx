const useRefCustom = <T extends HTMLElement>(handler: () => void) => {
    const ref = React.useRef<T>(null);

    React.useEffect(()=>{

        const handleOutsideClick = (evt: MouseEvent) => {
            if (evt.target instanceof Node && !ref.current?.contains(evt.target)) {
                evt.preventDefault();
                handler();
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return [ref];
};

export default useRefCustom;