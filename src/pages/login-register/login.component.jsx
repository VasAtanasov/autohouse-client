import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';

import { RESET_STATUS } from './login-register.container';

const LoginForm = ({ dispatch, username, handleLogin }) => {
  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });

  return (
    <React.Fragment>
      <header className="login-register-wrapper-header">
        <h1>Welcome back!</h1>
      </header>
      <main className="login-register-wrapper-main">
        <Form onSubmit={handleSubmit(handleLogin)}>
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
            <Form.Group controlId="formGroupSubmitButton">
              <Button
                className="login-button"
                variant="primary"
                type="submit"
                block
              >
                Sign in
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
            <Button as="a" variant="link" className="defaultLink">
              Forgot your password?
            </Button>
          </fieldset>
        </Form>
      </main>
    </React.Fragment>
  );
};

export default LoginForm;
