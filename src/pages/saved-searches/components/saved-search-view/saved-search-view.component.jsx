import React from 'react';
import { SavedSearchViewContainer } from './saved-search-view.styles';
import { connect } from 'react-redux';

const priceCriteria = (from, to) => {
  return `$${from.toLocaleString()} - $${to.toLocaleString()}`;
};

const yearCriteria = (from, to) => {
  return `${from} y. - ${to} y.`;
};

const milageCriteria = (from, to) => {
  return `${from.toLocaleString()} miles - ${to.toLocaleString()} miles`;
};

const SavedSearchView = ({
  filter,
  handleViewSavedSearch,
  handleDeleteSavedSearch,
  metadata,
}) => {
  const {
    bodyStyle,
    color,
    drive,
    features,
    fuelType,
    hasAccident,
    id,
    makerName,
    mileageFrom,
    mileageTo,
    modelName,
    priceFrom,
    priceTo,
    seller,
    state,
    transmission,
    yearFrom,
    yearTo,
  } = filter;

  return (
    <SavedSearchViewContainer key={filter.id}>
      <div className="details">
        <div className="description">
          <span className="headline">
            {!!makerName
              ? `${makerName}${modelName ? ` ${modelName}` : ''}`
              : 'All Makers & Models'}
          </span>
          <span>
            {priceCriteria(priceFrom, priceTo)};{' '}
            {yearCriteria(yearFrom, yearTo)};{' '}
            {milageCriteria(mileageFrom, mileageTo)};{' '}
            {!!hasAccident ? 'Has accidents' : 'Has no accidents'}
            {bodyStyle && ` ${metadata.bodyStyle[bodyStyle]};`}
            {color && ` ${metadata.color[color]};`}
            {drive && ` ${metadata.drive[drive]};`}
            {fuelType && ` ${metadata.fuelType[fuelType]};`}
            {transmission && ` ${metadata.transmission[transmission]};`}
            {features &&
              features.length > 0 &&
              ' ' +
                features
                  .map((feature) => metadata.feature[feature])
                  .join(' / ') +
                ';'}
            {seller && seller.length > 0 && ' ' + seller.join(' / ') + ';'}
            {state &&
              state.length > 0 &&
              ' ' +
                state.map((state) => metadata.state[state]).join(' / ') +
                ';'}
          </span>
        </div>
        <div className="menu">
          <span
            className="view"
            data-filter-id={id}
            onClick={handleViewSavedSearch}
          >
            View
          </span>
          <span
            data-filter-id={id}
            onClick={handleDeleteSavedSearch}
            className="delete"
          >
            Delete
          </span>
        </div>
      </div>
    </SavedSearchViewContainer>
  );
};

const mapStateToProps = ({ metadata }) => ({ metadata });

export default connect(mapStateToProps)(SavedSearchView);
