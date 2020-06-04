import React from 'react';
import { Wrapper, ImageContainer } from './peugeot-404.styles';
import { Link } from 'react-router-dom';
import ErrorImage from './assets/images/peugeot404.png';

const Peugeot404 = () => (
  <Wrapper>
    <p className="_404">404</p>
    <p className="centerText">
      Sorry. We can't find the page that you are looking for.
    </p>
    <p className="centerText">
      <Link className="link" to="/home">
        Go back to homepage
      </Link>
    </p>
    <div className="image-wrapper">
      <ImageContainer
        src={ErrorImage}
        alt="Peugeot 404, 1960-1975"
        title="Peugeot 404, 1960-1975"
      />
    </div>
    <p className="centerText">Peugeot 404, 1960-1975</p>
  </Wrapper>
);

export default Peugeot404;
