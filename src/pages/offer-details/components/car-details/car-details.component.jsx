import React from 'react';
import { CarDetailsWrapper, VehicleDetail } from './car-details.styles';
import Row from 'react-bootstrap/Row';

const VehicleDetailWrapper = ({ iconClass, labelText, description }) => (
  <VehicleDetail lg={4} md={6}>
    <div className="detail-label">
      <i className={iconClass} />
      <span className="caption">{labelText}</span>
    </div>
    <div className="detail-description">{description}</div>
  </VehicleDetail>
);

const CarDetails = ({ offer }) => {
  const {
    locationCity,
    vehicleMileage,
    vehicleDoors,
    vehicleState,
    vehicleBodyStyle,
    vehicleTransmission,
    vehicleDrive,
    vehicleColor,
    vehicleFuelType,
    vehicleHasAccident,
  } = offer;

  return (
    <CarDetailsWrapper>
      <h4>Vehicle Information</h4>
      <Row>
        <VehicleDetailWrapper
          iconClass="flaticon-automobile-salesman"
          labelText="State"
          description={vehicleState}
        />
        <VehicleDetailWrapper
          iconClass="flaticon-road"
          labelText="Mileage"
          description={vehicleMileage}
        />
        <VehicleDetailWrapper
          iconClass="flaticon-sedan-car-model"
          labelText="Body Style"
          description={vehicleBodyStyle}
        />
        <VehicleDetailWrapper
          iconClass="flaticon-shifter"
          labelText="Transmission"
          description={vehicleTransmission}
        />
        <VehicleDetailWrapper
          iconClass="flaticon-car-steering-wheel"
          labelText="Drive"
          description={vehicleDrive}
        />
        <VehicleDetailWrapper
          iconClass="flaticon-contrast"
          labelText="Color"
          description={vehicleColor}
        />
        <VehicleDetailWrapper
          iconClass="flaticon-gas-station"
          labelText="Fuel Type"
          description={vehicleFuelType}
        />
        <VehicleDetailWrapper
          iconClass="flaticon-car-accident"
          labelText="Has Accident"
          description={vehicleHasAccident === 'false' ? 'No' : 'Yes'}
        />
        <VehicleDetailWrapper
          iconClass="flaticon-car-door"
          labelText="Doors"
          description={vehicleDoors}
        />
        <VehicleDetailWrapper
          iconClass="flaticon-maps-and-flags"
          labelText="Location"
          description={locationCity}
        />
      </Row>
    </CarDetailsWrapper>
  );
};

export default CarDetails;
