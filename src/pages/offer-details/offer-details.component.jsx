import React from 'react';
import Gallery from './components/gallery/gallery.component';
import CarDetails from './components/car-details/car-details.component';
import {
  DetailsPageContainer,
  DetailsHeadline,
  StageData,
  VehicleFeatures,
  OfferDescription,
  SellerInfo,
} from './offer-details.styles';
import { loadOfferDetails } from '../../services/offer/offer.api';
import { Spinner } from '../../components';

const Description = ({ description }) => {
  const addInfoIndex = description.indexOf('[!@@Additional Info@@!]');
  console.log(addInfoIndex);
  return (
    <React.Fragment>
      <p>{description.slice(0, addInfoIndex)}</p>
      <h5>Additional Info</h5>
      <p>
        {description
          .slice(
            addInfoIndex + '[!@@Additional Info@@!]'.length,
            description.length
          )
          .split('$COMMA')
          .join(',')
          .split('w/')
          .join('\n')}
      </p>
    </React.Fragment>
  );
};

const OfferDetails = ({ match }) => {
  const offerId = match.params.id;

  const [loading, setLoading] = React.useState(true);
  const [offer, setOffer] = React.useState({});
  const [offerImages, setOfferImages] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await loadOfferDetails(offerId);
        setOffer(response.data.data.offer);
        setOfferImages(response.data.data.images);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    })();
  }, [offerId]);

  const {
    // id,
    accountDisplayName,
    accountFirstName,
    accountLastName,
    contactDetailsPhoneNumber,
    contactDetailsWebLink,
    createdAt,
    description,
    price,
    vehicleMakerName,
    vehicleModelName,
    vehicleTrim,
    vehicleYear,
    vehicleFeatures,
    webLink,
  } = offer;

  console.log(offer);

  return (
    <DetailsPageContainer>
      {loading || !offer ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Gallery images={offerImages} />
          <DetailsHeadline>
            <div className="headline-container">
              <div className="offer-headline">
                <div className="offer-title">
                  <span className="detail-makemodel">
                    {vehicleYear} {vehicleMakerName} {vehicleModelName}
                  </span>{' '}
                  <span className="detail-version">{vehicleTrim}</span>
                </div>
              </div>
            </div>
          </DetailsHeadline>
          <hr />
          <StageData>
            <div className="stage-headline">
              {'$ ' + price?.toLocaleString()}
            </div>
          </StageData>
          <hr />
          <CarDetails offer={offer}></CarDetails>
          <hr />
          <VehicleFeatures>
            <h4>Vehicle Features</h4>
            {(vehicleFeatures || []).map((feature, index) => (
              <span key={feature + index}>{feature}</span>
            ))}
          </VehicleFeatures>
          <hr />
          <OfferDescription>
            <h4>Description</h4>
            <div className="offer-description">
              <Description description={description} />
            </div>
          </OfferDescription>
          <hr />
          <SellerInfo>
            <h4>Seller Info</h4>
          </SellerInfo>
        </React.Fragment>
      )}
    </DetailsPageContainer>
  );
};

export default OfferDetails;
