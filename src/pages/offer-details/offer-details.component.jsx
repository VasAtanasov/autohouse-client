import React from 'react';
import Gallery from './components/gallery/gallery.component';
import {
  DetailsPageContainer,
  DetailsHeadline,
  StageData,
} from './offer-details.styles';
import { loadOfferDetails } from '../../services/offer/offer.api';
import { Spinner } from '../../components';

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
    id,
    price,
    locationCity,
    locationId,
    createdAt,
    primaryPhotoKey,
    vehicleMakerName,
    vehicleMakerId,
    vehicleModelName,
    vehicleModelId,
    vehicleTrim,
    vehicleYear,
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
                    {vehicleMakerName} {vehicleModelName}
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
        </React.Fragment>
      )}
    </DetailsPageContainer>
  );
};

export default OfferDetails;
