import React, { useState } from 'react';
import styled from 'styled-components';

const BodyTypeCardContainer = styled.div`
    cursor: pointer;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 15px;

    & .preloader {
        display: none;
    }

    & .body-type-image {
        position: relative;
        width: 100%;
        height: 100px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

        & .overlay {
            position: absolute;
            width: 100%;
            height: 100px;
            cursor: pointer;
            display: none;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
    }

    & span.caption {
        display: inline-block;
        text-align: center;
        color: #555a60;
        margin: auto;
        font-weight: 600;
        font-weight: 500;
        letter-spacing: 0.5px;
        /* text-transform: uppercase; */
        transition: 0.2s;
        overflow: hidden;
        /* color: rgba(0, 0, 0, 0.85); */
        font-size: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    :hover span.caption {
        color: ${props => props.theme.colors.autoriaColor};
        /* letter-spacing: 3px;
        font-weight: 800; */
    }
`;

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
