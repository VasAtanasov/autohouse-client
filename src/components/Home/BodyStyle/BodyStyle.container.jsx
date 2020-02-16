import React from 'react';
import Col from 'react-bootstrap/Col';
import BodyTypeCard from './BodyStyle.component';
import bodyStyles from './bodyStyles';

const BrowseByBody = () => {
    const pathToImages = '/images/body-styles/';
    const carImageSuffix = '-angled';

    const extensionJpg = '.jpg';

    return bodyStyles.map((obj, idx) => (
        <Col key={`${obj.bodyStyle}__${idx}`} xs={6} sm={4} lg={2} md={3}>
            <BodyTypeCard
                bodyType={obj.name}
                imageSrc={`${pathToImages}${obj.bodyStyle}${extensionJpg}`}
                hoverImageSrc={`${pathToImages}${obj.bodyStyle}${carImageSuffix}${extensionJpg}`}
            />
        </Col>
    ));
};

export default BrowseByBody;
