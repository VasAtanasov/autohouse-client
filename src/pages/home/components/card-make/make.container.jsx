import React from 'react';
import BrandComponent from './make.component';
import { MakeCardsContainer } from './make.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMakersIcons } from '../../../../services/common/common.selectors';

const MakeSection = ({ makersIcons }) => (
  <MakeCardsContainer>
    {makersIcons.map(({ brand, icon }, idx) => (
      <BrandComponent
        key={`${idx + 132}_${brand}`}
        text={brand}
        iconClass={icon}
      />
    ))}
  </MakeCardsContainer>
);

const mapStateToProps = createStructuredSelector({
  makersIcons: selectMakersIcons,
});

export default connect(mapStateToProps)(MakeSection);
