import React from 'react';
import { connect } from 'react-redux';
import {
    SearchContainer,
    TypeLabel,
    BodyStyleList,
    BodyStyleButton,
    BodyStyleIcon,
    BodyStyleLabel,
    ScrollListContainer,
    OuterContainer,
} from './quick-search.styles';
import QuickSearchModal from './quick-search-modal.component';

import { createStructuredSelector } from 'reselect';

import {
    selectBodyStyles,
    selectMakers,
} from '../../../../services/common/common.selectors';

const pathToImages = '/images/body-styles/';
const carImageSuffix = '-angled';
const extensionJpg = '.jpg';

const BodyStyleModalBody = ({ bodyStyles }) => (
    <QuickSearchModal modalTitle={'Body Style'}>
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
    </QuickSearchModal>
);

const MakerModelModalBody = ({ makers }) => (
    <QuickSearchModal modalTitle={'Maker & Model'}>
        <OuterContainer>
            <ScrollListContainer>
                <ul>
                    {makers.map((maker) => (
                        <li
                            key={`${maker.id}_${maker.name}`}
                            data-id={maker.id}
                            data-maker={maker.name}
                        >
                            {maker.name}
                        </li>
                    ))}
                </ul>
            </ScrollListContainer>
        </OuterContainer>
    </QuickSearchModal>
);

const QuickSearch = ({ bodyStyles, makers }) => {
    return (
        <SearchContainer>
            <div className="type">
                <TypeLabel>Search By</TypeLabel>
                <BodyStyleModalBody bodyStyles={bodyStyles} />
                <MakerModelModalBody makers={makers} />
            </div>
        </SearchContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    bodyStyles: selectBodyStyles,
    makers: selectMakers,
});

export default connect(mapStateToProps)(QuickSearch);
