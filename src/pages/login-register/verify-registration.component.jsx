import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useForm } from 'react-hook-form';
import { Loader } from '../../components';

const VerifyRegistrationForm = ({
  dispatch,
  username,
  loading,
  handleVerifyRegistration,
}) => {
  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });

  return (
    <React.Fragment>
      <header className="login-register-wrapper-header">
        <h1>Please enter an authentication code</h1>
      </header>
      <main className="login-register-wrapper-main">
        <Alert variant="info">
          We have emailed you a temporary authentication code. Please check your
          email and enter it below.
        </Alert>
        <Form onSubmit={handleSubmit(handleVerifyRegistration)}>
          <Form.Group controlId="formGroupCode">
            <Form.Label>Authentication code</Form.Label>
            <Form.Control
              name="code"
              type="password"
              ref={register({ required: true })}
            />
            <div className="error-message-container">
              {errors.password?.type === 'required' && (
                <p>Please enter a code.</p>
              )}
            </div>
          </Form.Group>
          <Form.Group controlId="formGroupSubmitButton">
            <Button
              className="login-button"
              variant="primary"
              type="submit"
              block
              disabled={loading}
            >
              {loading ? <Loader small white /> : 'Sign in'}
            </Button>
          </Form.Group>
        </Form>
      </main>
    </React.Fragment>
  );
};

export default VerifyRegistrationForm;
