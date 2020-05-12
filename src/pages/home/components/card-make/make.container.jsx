import React from 'react';
import BrandComponent from './make.component';
import { MakeCardsContainer } from './make.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMakersIcons } from '../../../../services/common/common.selectors';

const MakeSection = ({ makersIcons, handleSearch }) => (
  <MakeCardsContainer>
    {makersIcons.map(({ brand, icon }, idx) => (
      <div
        className="maker-button-wrapper"
        key={`${idx + 132}_${brand}`}
        onClick={() => handleSearch({ makerName: brand })}
      >
        <BrandComponent text={brand} iconClass={icon} />
      </div>
    ))}
  </MakeCardsContainer>
);

const mapStateToProps = createStructuredSelector({
  makersIcons: selectMakersIcons,
});

export default connect(mapStateToProps)(MakeSection);
