import React from 'react';
import { FiltersContainer } from './filters.styles';
import CollapseCriteria from '../collapse-criteria/collapse-criteria.component';
import CheckboxCriteria from '../collapse-criteria/checkbox-criteria.component';
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

const Filters = ({ metadata, searchCriteriaNamesForCheckboxCriteria = [] }) => (
  <FiltersContainer>
    {filterSections.map((section, idx) => (
      <div key={section.title + idx}>
        <CollapseCriteria key={section.title + idx} {...section}>
          {searchCriteriaNamesForCheckboxCriteria.includes(section.key) ? (
            <CheckboxCriteria criteria={metadata[section.key]} />
          ) : null}
        </CollapseCriteria>
      </div>
    ))}
  </FiltersContainer>
);

export default Filters;
