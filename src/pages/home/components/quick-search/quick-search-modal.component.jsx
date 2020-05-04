import React from 'react';
import { PopUpDialog } from '../../../../components';

import { SearchButton } from './quick-search.styles';

const useComponentVisible = (initialIsVisible) => {
    const [visible, setVisible] = React.useState(initialIsVisible);
    const ref = React.useRef(null);

    const handleHideDropdown = (event) => {
        if (event.key === 'Escape') {
            setVisible(false);
        }
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisible(false);
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

    return [ref, visible, setVisible];
};

const QuickSearchModal = ({ modalTitle, children }) => {
    const [ref, visible, setVisible] = useComponentVisible(false);

    return (
        <React.Fragment>
            <SearchButton onClick={() => setVisible(true)}>
                {modalTitle}
            </SearchButton>
            {visible && (
                <PopUpDialog
                    ref={ref}
                    title={`Select ${modalTitle}`}
                    handleClose={() => setVisible(false)}
                >
                    {children}
                </PopUpDialog>
            )}
        </React.Fragment>
    );
};

export default QuickSearchModal;
