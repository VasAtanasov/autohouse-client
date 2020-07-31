import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { ErrorMessage } from '@hookform/error-message';
import { ErrorMessageContainer } from '../../../../components';

export const ErrorsContainer = ({ errors }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (!!errors && Object.entries(errors).length > 0) {
      setShow(true);
    }
  }, [errors]);

  return (
    show && (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <ErrorMessageContainer>
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="makerName"
          />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="modelName"
          />
          <ErrorMessage className="m-bt" as={'p'} errors={errors} name="year" />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="bodyStyle"
          />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="fuelType"
          />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="transmission"
          />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="drive"
          />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="state"
          />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="color"
          />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="mileage"
          />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="doors"
          />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="hasAccident"
          />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="zipCode"
          />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="features"
          />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="price"
          />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="description"
          />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="images"
          />
          <ErrorMessage
            className="m-bt"
            as={'p'}
            errors={errors}
            name="contactDetailsPhoneNumber"
          />
        </ErrorMessageContainer>
      </Alert>
    )
  );
};

export default ErrorsContainer;
