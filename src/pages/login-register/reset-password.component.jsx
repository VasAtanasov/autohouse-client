import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { Loader } from '../../components';
import { RESET_STATUS } from './login-register.container';
import { FormButton, FormControl } from '../../components';

const ResetPasswordForm = ({
  username,
  dispatch,
  loading,
  handlePasswordReset,
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
        <Form onSubmit={handleSubmit(handlePasswordReset)}>
          <Form.Group controlId="formGroupNewPassword">
            <Form.Label>New password</Form.Label>
            <FormControl
              name="password"
              type="password"
              ref={register({ required: true })}
            />
            <div className="error-message-container">
              {errors.password?.type === 'required' && (
                <p>Please enter a password.</p>
              )}
            </div>
          </Form.Group>
          <Form.Group controlId="formGroupCode">
            <Form.Label>Verification code</Form.Label>
            <FormControl
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
            <FormButton disabled={loading} variant="info" type="submit" block>
              {loading ? <Loader small white /> : 'Reset Password'}
            </FormButton>
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

export default ResetPasswordForm;
