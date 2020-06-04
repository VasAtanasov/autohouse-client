import React from 'react';
import { CreateUpdateOfferWrapper } from './create-update-offer.styles';
import { AccountCheck } from '../../components';

const CreateUpdateOffer = () => {
  return (
    <CreateUpdateOfferWrapper>
      <AccountCheck pathToRedirect="/user/settings/edit-personal-info" />
    </CreateUpdateOfferWrapper>
  );
};

export default CreateUpdateOffer;
