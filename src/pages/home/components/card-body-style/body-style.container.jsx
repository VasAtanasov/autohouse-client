import React from 'react';

import BodyStyleCard from './body-style.component';
import { connect } from 'react-redux';
import { BodyStyleCardsContainer } from './body-style.styles';
import { createStructuredSelector } from 'reselect';

import { selectBodyStyles } from '../../../../services/common/common.selectors';

const pathToImages = '/images/body-styles/';
const carImageSuffix = '-angled';
const extensionJpg = '.jpg';

const BodyStyleSection = ({ bodyStyles, handleSearch }) => (
  <BodyStyleCardsContainer>
    {bodyStyles.map((obj, idx) => (
      <div
        className="body-style-wrapper"
        key={`${idx}_${obj.name}`}
        onClick={() => handleSearch({ bodyStyle: obj.bodyStyle.toUpperCase() })}
      >
        <BodyStyleCard
          bodyType={obj.name}
          imageSrc={`${pathToImages}${obj.bodyStyle}${extensionJpg}`}
          hoverImageSrc={`${pathToImages}${obj.bodyStyle}${carImageSuffix}${extensionJpg}`}
        />
      </div>
    ))}
  </BodyStyleCardsContainer>
);

const mapStateToProps = createStructuredSelector({
  bodyStyles: selectBodyStyles,
});

export default connect(mapStateToProps)(BodyStyleSection);
