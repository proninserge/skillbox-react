import styles from './abstractdropdown.less';
import {NOOP} from '@utils/constants.js';

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
};

export function Dropdown(props: IDropdownProps) {
    const {button, children, isOpen, onOpen = NOOP, onClose = NOOP} = props;

    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

    React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

    const handleOpen = () => {
        if (isOpen !== undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    return (
        <div className={styles.container}>
            <div onClick={handleOpen}>
                {button}
            </div>
            {isDropdownOpen && (
                <div className={styles.listContainer}>
                    <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}