import React from 'react';
import {
    SearchContainer,
    TypeLabel,
    SearchButton,
} from './quick-search.styles';
import { PopUpDialog } from '../../../../components';

const QuickSearch = () => {
    const [showBodyStyle, setShowBodyStyle] = React.useState(false);
    const [showMakeModel, setShowMakeModel] = React.useState(false);

    return (
        <SearchContainer>
            <div className="type">
                <TypeLabel>Search By</TypeLabel>
                <SearchButton onClick={() => setShowBodyStyle(true)}>
                    Body Style
                </SearchButton>
                {showBodyStyle && (
                    <PopUpDialog
                        title={'Body Style'}
                        handleClose={() => setShowBodyStyle(false)}
                    />
                )}
                <SearchButton onClick={() => setShowMakeModel(true)}>
                    Make & Model
                </SearchButton>
                {showMakeModel && (
                    <PopUpDialog
                        title={'Make & Model'}
                        handleClose={() => setShowMakeModel(false)}
                    />
                )}
            </div>
        </SearchContainer>
    );
};

export default QuickSearch;
