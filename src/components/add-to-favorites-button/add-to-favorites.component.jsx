import React from 'react';
import { ButtonContainer } from './add-to-favorites.styles';
import { addToFavorites } from '../../services/offer/offer.api';

const AddToFavorites = ({ offerId }) => {
  const handleAddToList = async (event) => {
    event.preventDefault();
    const response = await addToFavorites(offerId);
    console.log(response);
  };

  return (
    <ButtonContainer onClick={handleAddToList}>
      <span className="star-icon">
        <i className="flaticon-star-1" />
      </span>
      <span className="button-text">Add to list</span>
    </ButtonContainer>
  );
};

export default AddToFavorites;
