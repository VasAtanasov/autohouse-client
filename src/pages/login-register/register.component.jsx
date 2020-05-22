import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { RESET_STATUS } from './login-register.container';

const RegisterForm = ({ dispatch, username, handleRegisterRequest }) => {
  const {
    register,
    errors,
    handleSubmit,
    setError,
    clearError,
    watch,
  } = useForm({
    mode: 'onChange',
  });
  let password = watch('password');
  console.log(password);

  return (
    <React.Fragment>
      <header className="login-register-wrapper-header">
        <h1>Welcome to Autohouse!</h1>
      </header>
      <main className="login-register-wrapper-main">
        <Form onSubmit={handleSubmit(handleRegisterRequest)}>
          <fieldset>
            <legend className="legend">{username}</legend>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                ref={register({ required: true })}
              />
              {errors.password?.type === 'required' && (
                <p>Please enter a password.</p>
              )}
            </Form.Group>
            <Form.Group controlId="formGroupConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirmPassword"
                type="password"
                ref={register({ required: true })}
                onChange={(e) => {
                  const confirmPassword = e.target.value;
                  if (password === confirmPassword) {
                    clearError('confirmPassword');
                  } else {
                    setError(
                      'confirmPassword',
                      'notMatch',
                      'Passwords do not match'
                    );
                  }
                }}
              />
              {errors.confirmPassword?.type === 'required' && (
                <p>Please enter a confirm password.</p>
              )}
              {errors.confirmPassword?.type === 'notMatch' && (
                <p>{errors.confirmPassword.message}</p>
              )}
            </Form.Group>
            <Form.Group controlId="formGroupSubmitButton">
              <Button
                className="register-button"
                variant="primary"
                type="submit"
                block
              >
                Sign up
              </Button>
            </Form.Group>
            <Form.Group controlId="formGroupBackButton">
              <Button
                as="a"
                variant="link"
                block
                onClick={() => dispatch({ type: RESET_STATUS })}
              >
                Go back
              </Button>
            </Form.Group>
          </fieldset>
        </Form>
      </main>
    </React.Fragment>
  );
};

export default RegisterForm;
