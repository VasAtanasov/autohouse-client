import React, { useState } from 'react';
import { BodyTypeCardContainer } from './BodyStyle.styles';

const BodyTypeCard = props => {
    const { imageSrc, hoverImageSrc, bodyType } = props;

    const [display, setDisplay] = useState('none');

    return (
        <BodyTypeCardContainer
            onMouseEnter={() => setDisplay('block')}
            onMouseLeave={() => setDisplay('none')}
        >
            <img src={imageSrc} className="preloader" alt={bodyType} />
            <img src={hoverImageSrc} className="preloader" alt={bodyType} />
            <div
                className="body-type-image"
                style={{ backgroundImage: `url(${imageSrc})` }}
            >
                <span
                    className="overlay"
                    style={{
                        backgroundImage: `url(${hoverImageSrc})`,
                        display: display
                    }}
                ></span>
            </div>
            <span className="caption">{bodyType}</span>
        </BodyTypeCardContainer>
    );
};

export default BodyTypeCard;
