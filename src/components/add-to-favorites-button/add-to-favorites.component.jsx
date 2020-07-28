import React from 'react';
import { ButtonContainer } from './add-to-favorites.styles';
import { updateFavorites } from '../../services/user/user.actions';
import { connect } from 'react-redux';

const AddToFavorites = ({ offerId, updateFavorites, favorites }) => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (favorites.includes(offerId)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [offerId, favorites]);

  const handleAddToList = async (event) => {
    event.preventDefault();
    await updateFavorites(offerId);
  };

  //TODO increment saved count

  return (
    <ButtonContainer onClick={handleAddToList}>
      <span className="star-icon">
        {active ? (
          <i className="flaticon-star-2 active" />
        ) : (
          <i className="flaticon-star-1" />
        )}
      </span>
      <span className={'button-text ' + (active && 'active')}>
        Add{active && 'ed'} to favorites
      </span>
    </ButtonContainer>
  );
};

const mapStateToProps = ({ user }) => ({
  favorites: user.details.favorites,
});

export default connect(mapStateToProps, { updateFavorites })(AddToFavorites);
