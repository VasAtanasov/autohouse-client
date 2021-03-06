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
import { connect } from 'react-redux';
import { AddToFavorites } from '../../components';
import Peugeot404 from '../peugeot-404/peugeot-404.component';

function useQuery(search) {
  return new URLSearchParams(search);
}

const Description = ({ description }) => {
  const addInfoIndex = description.indexOf('[!@@Additional Info@@!]');
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

const OfferDetails = ({ match, user, location }) => {
  const offerId = match.params.id;
  const query = useQuery(location.search);
  const pr = query.get('pr');
  const { isAuthenticated, account } = user;

  const [loading, setLoading] = React.useState(true);
  const [offer, setOffer] = React.useState({});
  const [error, setError] = React.useState(undefined);
  const [offerImages, setOfferImages] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await loadOfferDetails(offerId, pr);
        setOffer(response.data.data.offer);
        setOfferImages(response.data.data.images);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    })();
  }, [offerId, pr]);

  const {
    id,
    accountId,
    accountDisplayName,
    contactDetailsPhoneNumber,
    contactDetailsWebLink,
    description,
    price,
    vehicleMakerName,
    vehicleModelName,
    vehicleTrim,
    vehicleYear,
    vehicleFeatures,
  } = offer;

  return error ? (
    <Peugeot404 />
  ) : (
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
              <div className="offer-summary-action-buttons">
                {isAuthenticated && account?.id !== accountId && (
                  <AddToFavorites offerId={id} />
                )}
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
              {offer?.description && <Description description={description} />}
            </div>
          </OfferDescription>
          <hr />
          <SellerInfo>
            <h4>Seller Info</h4>
            <h5>{accountDisplayName}</h5>
            <h6>{contactDetailsPhoneNumber}</h6>
            <h6>{contactDetailsWebLink}</h6>
          </SellerInfo>
        </React.Fragment>
      )}
    </DetailsPageContainer>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(OfferDetails);
