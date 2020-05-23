import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { Loader } from '../../components';
import { SET_USERNAME, RESET_STATUS } from './login-register.container';

const ResetPasswordRequestForm = ({
  username,
  dispatch,
  loading,
  handlePasswordResetRequest,
}) => {
  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });

  return (
    <React.Fragment>
      <header className="login-register-wrapper-header">
        <h1>Password reset</h1>
      </header>
      <main className="login-register-wrapper-main">
        <Alert variant="info">
          Please provide your email address below so we can send you a code to
          reset your password.
        </Alert>
        <Form onSubmit={handleSubmit(handlePasswordResetRequest)}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name="username"
              type="email"
              ref={register({ required: true, maxLength: 50 })}
              defaultValue={username}
              onChange={(event) =>
                dispatch({ type: SET_USERNAME, payload: event.target.value })
              }
            />
            <div className="error-message-container">
              {errors.username?.type === 'required' && (
                <p>Please enter a email.</p>
              )}
              {errors.username?.type === 'maxLength' && (
                <p>Email is too long.</p>
              )}
            </div>
          </Form.Group>
          <Form.Group controlId="formGroupSubmitButton">
            <Button
              disabled={loading}
              className="next-button"
              variant="primary"
              type="submit"
              block
            >
              {loading ? <Loader small white /> : 'Submit'}
            </Button>
          </Form.Group>
          <Form.Group controlId="formGroupBackButton">
            <Button
              as="a"
              variant="link"
              block
              disabled={loading}
              onClick={() => dispatch({ type: RESET_STATUS })}
            >
              Go back
            </Button>
          </Form.Group>
        </Form>
      </main>
    </React.Fragment>
  );
};

export default ResetPasswordRequestForm;
