import React from 'react';
import PriceComponent from './price.component';
import { PriceTagContainer } from './price.styles';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPriceTags } from '../../../../services/common/common.selectors';

const Price = ({ priceTags, handleSearch }) => (
  <Row noGutters>
    {priceTags.prices.map((tag) => (
      <PriceTagContainer key={tag.id} sm={6} md={4} lg={3}>
        <PriceComponent
          handleSearch={handleSearch}
          price={tag.price}
          id={tag.id}
          bodyTypes={priceTags.bodyTypes}
        />
      </PriceTagContainer>
    ))}
  </Row>
);

const mapStateToProps = createStructuredSelector({
  priceTags: selectPriceTags,
});

export default connect(mapStateToProps)(Price);
