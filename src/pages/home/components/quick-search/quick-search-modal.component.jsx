import React from 'react';
import { PopUpDialog } from '../../../../components';

import { SearchButton } from './quick-search.styles';

const useComponentVisible = (initialIsVisible) => {
    const [isComponentVisible, setIsComponentVisible] = React.useState(
        initialIsVisible
    );
    const ref = React.useRef(null);

    const handleHideDropdown = (event) => {
        if (event.key === 'Escape') {
            setIsComponentVisible(false);
        }
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', handleHideDropdown, true);
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('keydown', handleHideDropdown, true);
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return [ref, isComponentVisible, setIsComponentVisible];
};

const QuickSearchModal = ({ modalTitle, children }) => {
    const [
        ref,
        isComponentVisible,
        setIsComponentVisible,
    ] = useComponentVisible(false);
    return (
        <React.Fragment>
            <SearchButton onClick={() => setIsComponentVisible(true)}>
                Body Style
            </SearchButton>
            {isComponentVisible && (
                <PopUpDialog
                    ref={ref}
                    title={modalTitle}
                    handleClose={() => setIsComponentVisible(false)}
                >
                    {children}
                </PopUpDialog>
            )}
        </React.Fragment>
    );
};

export default QuickSearchModal;
