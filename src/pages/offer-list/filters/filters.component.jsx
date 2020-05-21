import React from 'react';
import CollapseCriteria from '../collapse-criteria/collapse-criteria.component';
import { Slider, CheckBoxContainer } from '../../../components';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  createFilter,
  resetFilter,
} from '../../../services/filter/filter.action';
import {
  FiltersContainer,
  SearchFiltersSection,
  SearchFiltersHeader,
} from './filters.styles';
import { SelectWrapper, SelectGroup } from '../offer-list.styles';
import initialState from '../../../services/initial-state';

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

const MileageRangeCollapse = connect(({ statistics, filter }) => ({
  maxMileage: statistics.maxMileage,
  minMileage: statistics.minMileage,
  mileageFrom: filter.mileageFrom,
  mileageTo: filter.mileageTo,
}))(({ register, maxMileage, minMileage, mileageFrom, mileageTo }) => (
  <CollapseCriteria
    title="Mileage Range"
    iconClass={'flaticon-road'}
    isActive={true}
  >
    <Slider
      max={maxMileage}
      min={minMileage}
      to={mileageTo || maxMileage}
      from={mileageFrom || minMileage}
      filter="mileage"
      register={register}
    />
  </CollapseCriteria>
));

const FeaturesCollapse = ({ feature, register }) => {
  return (
    <CollapseCriteria
      title="Features"
      iconClass={'flaticon-turbo-engine'}
      isActive={false}
    >
      <div>
        {Object.entries(feature).map(([key, value]) => (
          <CheckBoxContainer key={key}>
            <input
              name="features"
              type="checkbox"
              id={key}
              ref={register}
              value={key}
            />
            <label htmlFor={key}>{value}</label>
          </CheckBoxContainer>
        ))}
      </div>
    </CollapseCriteria>
  );
};

const StateCollapse = ({ state, register }) => {
  return (
    <CollapseCriteria
      title="Condition"
      iconClass={'flaticon-automobile-salesman'}
      isActive={false}
    >
      <div>
        {Object.entries(state).map(([key, value]) => (
          <CheckBoxContainer key={key}>
            <input
              name="state"
              type="checkbox"
              id={key}
              ref={register}
              value={key}
            />
            <label htmlFor={key}>{value}</label>
          </CheckBoxContainer>
        ))}
      </div>
    </CollapseCriteria>
  );
};

const SellerCollapse = ({ accountType, register }) => {
  return (
    <CollapseCriteria
      title="Seller"
      iconClass={'flaticon-user-1'}
      isActive={false}
    >
      <div>
        {Object.entries(accountType).map(([key, value]) => (
          <CheckBoxContainer key={key}>
            <input
              name="seller"
              type="checkbox"
              id={key}
              ref={register}
              value={key}
            />
            <label htmlFor={key}>{value}</label>
          </CheckBoxContainer>
        ))}
      </div>
    </CollapseCriteria>
  );
};

const MakerModelCollapse = connect(({ filter, makers }) => ({
  maker: filter.makerName,
  model: filter.modelName,
  trim: filter.trim,
  makers: makers.makers,
}))(({ register, maker, model, trim, makers }) => {
  const [selectedMaker, setSelectedMaker] = React.useState(maker || '');
  const [selectedModel, setSelectedModel] = React.useState(model || '');

  return (
    <CollapseCriteria
      title="Maker & Model"
      iconClass={'flaticon-sedan-car-front'}
      isActive={true}
    >
      <SelectGroup>
        <SelectWrapper>
          <select
            as="select"
            id="maker-name-select"
            name="makerName"
            ref={register}
            value={selectedMaker}
            onChange={(event) => setSelectedMaker(event.target.value)}
          >
            <option value="">Any maker</option>
            {Object.keys(makers)
              .sort()
              .map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
          </select>
        </SelectWrapper>
      </SelectGroup>
      <SelectGroup>
        <SelectWrapper>
          <select
            name="modelName"
            id="model-name-select"
            value={selectedModel}
            onChange={(event) => setSelectedModel(event.target.value)}
            ref={register}
            disabled={selectedMaker ? false : true}
          >
            <option value="">Any model</option>
            {selectedMaker &&
              makers[selectedMaker].models
                .map((obj) => obj.name)
                .sort()
                .map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
          </select>
        </SelectWrapper>
      </SelectGroup>
    </CollapseCriteria>
  );
});

const FuelTypeCollapse = connect(({ filter }) => ({
  fuelType: filter.fuelType,
}))(({ register, fuelType, fuelTypes }) => {
  const [selectedFuelType, setSelectedFuelType] = React.useState(
    fuelType || ''
  );

  return (
    <CollapseCriteria
      title="Fuel Type"
      iconClass={'flaticon-gas-station'}
      isActive={true}
    >
      <SelectGroup>
        <SelectWrapper>
          <select
            as="select"
            id="fuel-type-select"
            name="fuelType"
            ref={register}
            value={selectedFuelType}
            onChange={(event) => setSelectedFuelType(event.target.value)}
          >
            <option value="">Any Fuel Type</option>
            {Object.entries(fuelTypes).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </SelectWrapper>
      </SelectGroup>
    </CollapseCriteria>
  );
});

const BodyStyleCollapse = connect(({ filter }) => ({
  fuelType: filter.fuelType,
}))(({ register, bodyStyle, bodyStyles }) => {
  const [selectedBodyStyle, setSelectedBodyStyle] = React.useState(
    bodyStyle || ''
  );

  return (
    <CollapseCriteria
      title="Body Style"
      iconClass={'flaticon-convertible'}
      isActive={false}
    >
      <SelectGroup>
        <SelectWrapper>
          <select
            as="select"
            id="body-style-select"
            name="bodyStyle"
            ref={register}
            value={selectedBodyStyle}
            onChange={(event) => setSelectedBodyStyle(event.target.value)}
          >
            <option value="">Any Body Style</option>
            {Object.entries(bodyStyles).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </SelectWrapper>
      </SelectGroup>
    </CollapseCriteria>
  );
});

const TransmissionCollapse = connect(({ filter }) => ({
  transmission: filter.transmission,
}))(({ register, transmission, transmissions }) => {
  const [selectedTransmission, setSelectedTransmission] = React.useState(
    transmission || ''
  );

  return (
    <CollapseCriteria
      title="Transmission"
      iconClass={'flaticon-shifter'}
      isActive={true}
    >
      <SelectGroup>
        <SelectWrapper>
          <select
            as="select"
            id="transmission-select"
            name="transmission"
            ref={register}
            value={selectedTransmission}
            onChange={(event) => setSelectedTransmission(event.target.value)}
          >
            <option value="">Any Transmission</option>
            {Object.entries(transmissions).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </SelectWrapper>
      </SelectGroup>
    </CollapseCriteria>
  );
});

const DriveCollapse = connect(({ filter }) => ({
  drive: filter.drive,
}))(({ register, drive, drives }) => {
  const [selectedDrive, setSelectedDrive] = React.useState(drive || '');

  return (
    <CollapseCriteria
      title="Drive"
      iconClass={'flaticon-car-steering-wheel'}
      isActive={false}
    >
      <SelectGroup>
        <SelectWrapper>
          <select
            as="select"
            id="drive-select"
            name="drive"
            ref={register}
            value={selectedDrive}
            onChange={(event) => setSelectedDrive(event.target.value)}
          >
            <option value="">Any Drive</option>
            {Object.entries(drives).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </SelectWrapper>
      </SelectGroup>
    </CollapseCriteria>
  );
});

const ColorCollapse = connect(({ filter }) => ({
  color: filter.color,
}))(({ register, color, colors }) => {
  const [selectedColor, setSelectedColor] = React.useState(color || '');

  return (
    <CollapseCriteria
      title="Color"
      iconClass={'flaticon-contrast'}
      isActive={false}
    >
      <SelectGroup>
        <SelectWrapper>
          <select
            as="select"
            id="color-select"
            name="color"
            ref={register}
            value={selectedColor}
            onChange={(event) => setSelectedColor(event.target.value)}
          >
            <option value="">Any Color</option>
            {Object.entries(colors).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </SelectWrapper>
      </SelectGroup>
    </CollapseCriteria>
  );
});

const HasAccidentCollapse = connect(({ filter }) => ({
  hasAccident: filter.hasAccident,
}))(({ register, hasAccident }) => {
  const [selected, setSelected] = React.useState(hasAccident || '');

  return (
    <CollapseCriteria
      title="Has Accident"
      iconClass={'flaticon-car-accident'}
      isActive={true}
    >
      <SelectGroup>
        <SelectWrapper>
          <select
            as="select"
            id="accident-select"
            name="hasAccident"
            ref={register}
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
          >
            <option value="">Show Also</option>
            <option value="false">Don't Show</option>
            <option value="true">Show Only</option>
          </select>
        </SelectWrapper>
      </SelectGroup>
    </CollapseCriteria>
  );
});

const Filters = ({
  filter,
  statistics,
  createFilter,
  resetFilter,
  metadata,
}) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: filter,
  });

  const onSubmit = (data) => {
    createFilter({ ...filter, ...data });
  };

  return (
    <FiltersContainer>
      <SearchFiltersSection className="search-filters-section">
        <SearchFiltersHeader>
          <div className="page-title">Search Filters</div>
          <button
            onClick={() => {
              reset({
                ...initialState.filter,
                priceTo: statistics.maxPrice,
                priceFrom: statistics.minPrice,
                yearTo: statistics.maxYear,
                yearFrom: statistics.minYear,
                mileageTo: statistics.maxMileage,
                mileageFrom: statistics.minMileage,
              });
              document.querySelectorAll('.range-slider').forEach((slider) => {
                slider.noUiSlider.reset();
              });
              resetFilter();
            }}
            className="clear-button"
          >
            Reset
          </button>
        </SearchFiltersHeader>
      </SearchFiltersSection>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MakerModelCollapse register={register} />
        <PriceRangeCollapse register={register} />
        <YearRangeCollapse register={register} />
        <MileageRangeCollapse register={register} />
        {metadata && (
          <TransmissionCollapse
            register={register}
            transmissions={metadata.transmission}
          />
        )}
        {metadata && (
          <FuelTypeCollapse register={register} fuelTypes={metadata.fuelType} />
        )}
        <HasAccidentCollapse register={register} />
        {metadata && (
          <FeaturesCollapse register={register} feature={metadata.feature} />
        )}
        {metadata && (
          <StateCollapse register={register} state={metadata.state} />
        )}
        {metadata && (
          <SellerCollapse
            register={register}
            accountType={metadata.accountType}
          />
        )}
        {metadata && (
          <BodyStyleCollapse
            register={register}
            bodyStyles={metadata.bodyStyle}
          />
        )}
        {metadata && (
          <DriveCollapse register={register} drives={metadata.drive} />
        )}
        {metadata && (
          <ColorCollapse register={register} colors={metadata.color} />
        )}
        <input type="submit" value="Submit" />
      </form>
    </FiltersContainer>
  );
};

const mapStateToProps = ({ filter, statistics }) => ({ filter, statistics });

export default connect(mapStateToProps, { createFilter, resetFilter })(Filters);
