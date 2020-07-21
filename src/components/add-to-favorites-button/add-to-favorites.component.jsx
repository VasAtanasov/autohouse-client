import React from 'react';
import { ButtonContainer } from './add-to-favorites.styles';
import { updateFavorites } from '../../services/user/user.actions';
import { connect } from 'react-redux';

const AddToFavorites = ({ offerId, updateFavorites }) => {
  const handleAddToList = async (event) => {
    event.preventDefault();
    await updateFavorites(offerId);
  };

  return (
    <ButtonContainer onClick={handleAddToList}>
      <span className="star-icon">
        <i className="flaticon-star-1" />
        {/* <i className="flaticon-star-2 active" /> */}
      </span>
      <span className="button-text">Add to favorites</span>
    </ButtonContainer>
  );
};

export default connect(null, { updateFavorites })(AddToFavorites);
