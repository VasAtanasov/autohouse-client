import React from 'react';
import { FiltersContainer } from './filters.styles';
import CollapseCriteria from '../collapse-criteria/collapse-criteria.component';
import CheckboxCriteria from '../collapse-criteria/checkbox-criteria.component';
import { Slider } from '../../../components';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createFilter } from '../../../services/filter/filter.action';

const filterSections = [
  {
    title: 'Fuel type',
    isActive: true,
    key: 'fuelTypes',
    iconClass: 'flaticon-gas-station',
  },
  {
    title: 'Transmission',
    isActive: true,
    key: 'transmissionTypes',
    iconClass: 'flaticon-shifter',
  },
  {
    title: 'Mileage',
    isActive: true,
    key: 'mileages',
    iconClass: 'flaticon-road',
  },
  {
    title: 'First registration',
    isActive: true,
    key: 'registrationYears',
    iconClass: 'flaticon-car-key',
  },
  {
    title: 'Power',
    isActive: false,
    key: 'horsePowers',
    iconClass: 'flaticon-engine',
  },
  {
    title: 'Body type',
    isActive: false,
    key: 'bodyTypes',
    iconClass: 'flaticon-convertible',
  },
  {
    title: 'Price',
    isActive: false,
    key: 'prices',
    iconClass: 'flaticon-coin',
  },
  {
    title: 'Features',
    isActive: false,
    key: 'feature',
    iconClass: 'flaticon-turbo-engine',
  },
  {
    title: 'Colour',
    isActive: false,
    key: 'bodyColors',
    iconClass: 'flaticon-contrast',
  },
  {
    title: 'Damage',
    isActive: false,
    key: 'damageTypes',
    iconClass: 'flaticon-car-accident',
  },
  {
    title: 'Emission standard',
    isActive: false,
    key: 'effluentStandards',
    iconClass: 'flaticon-smoke',
  },
  {
    title: 'Sear count',
    isActive: false,
    key: 'seatCount',
    iconClass: 'flaticon-car-door',
  },
];

const PriceRangeCollapse = connect(({ statistics, filter }) => ({
  maxPrice: statistics.maxPrice,
  minPrice: statistics.minPrice,
  priceFrom: filter.priceFrom,
  priceTo: filter.priceTo,
}))(({ maxPrice, minPrice, priceFrom, priceTo, register }) => (
  <CollapseCriteria
    title="Price Range"
    iconClass={'flaticon-coin'}
    isActive={true}
  >
    <Slider
      max={maxPrice}
      min={minPrice}
      filter="price"
      from={priceFrom || minPrice}
      to={priceTo || maxPrice}
      register={register}
    />
  </CollapseCriteria>
));

const YearRangeCollapse = connect(({ statistics, filter }) => ({
  maxYear: statistics.maxYear,
  minYear: statistics.minYear,
  yearFrom: filter.yearFrom,
  yearTo: filter.yearTo,
}))(({ register, maxYear, minYear, yearFrom, yearTo }) => (
  <CollapseCriteria
    title="Year Range"
    iconClass={'flaticon-car-key'}
    isActive={true}
  >
    <Slider
      max={maxYear}
      min={minYear}
      to={yearTo || maxYear}
      from={yearFrom || minYear}
      filter="year"
      register={register}
    />
  </CollapseCriteria>
));

const Filters = ({
  filter,
  createFilter,
  metadata,
  searchCriteriaNamesForCheckboxCriteria = [],
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: filter,
  });

  const onSubmit = (data) => {
    createFilter({ ...filter, ...data });
  };

  return (
    <FiltersContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PriceRangeCollapse register={register} />
        <YearRangeCollapse register={register} />
        <input type="submit" value="Submit" />
      </form>
      {/* {filterSections.map((section, idx) => (
      <CollapseCriteria key={section.title + idx} {...section}>
        {searchCriteriaNamesForCheckboxCriteria.includes(section.key) ? (
          <CheckboxCriteria criteria={metadata[section.key]} />
        ) : null}
      </CollapseCriteria>
    ))} */}
    </FiltersContainer>
  );
};

const mapStateToProps = ({ filter }) => ({ filter });

export default connect(mapStateToProps, { createFilter })(Filters);
