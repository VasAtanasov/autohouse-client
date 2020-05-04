import React from 'react';
import { connect } from 'react-redux';

import {
    SearchContainer,
    TypeLabel,
    SearchButton,
    BodyStyleList,
    BodyStyleButton,
    BodyStyleIcon,
    BodyStyleLabel,
} from './quick-search.styles';
import { PopUpDialog } from '../../../../components';

import { createStructuredSelector } from 'reselect';

import { selectBodyStyles } from '../../../../redux/common/common.selectors';

const pathToImages = '/images/body-styles/';
const carImageSuffix = '-angled';
const extensionJpg = '.jpg';

const BodyStyleModalBody = ({ bodyStyles }) => (
    <BodyStyleList>
        {bodyStyles.map((obj, idx) => (
            <li key={`${idx}_${obj.name}`}>
                <BodyStyleButton
                    bodyType={obj.name}
                    hoverImage={`${pathToImages}${obj.bodyStyle}${carImageSuffix}${extensionJpg}`}
                >
                    <BodyStyleIcon
                        mainImage={`${pathToImages}${obj.bodyStyle}${extensionJpg}`}
                    />
                    <BodyStyleLabel>{obj.name}</BodyStyleLabel>
                </BodyStyleButton>
            </li>
        ))}
    </BodyStyleList>
);

const QuickSearch = ({ bodyStyles }) => {
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
                        title={'Select Body Style'}
                        handleClose={() => setShowBodyStyle(false)}
                    >
                        <BodyStyleModalBody bodyStyles={bodyStyles} />
                    </PopUpDialog>
                )}
                <SearchButton onClick={() => setShowMakeModel(true)}>
                    Make & Model
                </SearchButton>
                {showMakeModel && (
                    <PopUpDialog
                        title={'Select Maker'}
                        handleClose={() => setShowMakeModel(false)}
                    />
                )}
            </div>
        </SearchContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    bodyStyles: selectBodyStyles,
});

export default connect(mapStateToProps)(QuickSearch);
