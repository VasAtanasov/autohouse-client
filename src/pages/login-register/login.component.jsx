import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { Loader } from '../../components';
import { FormButton, FormControl } from '../../components';
import {
  RESET_STATUS,
  SET_STATUS,
  PASSWORD_RESET_REQUEST,
} from './login-register.container';

const LoginForm = ({ dispatch, username, loading, handleLogin }) => {
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
            <Form.Group controlId="formGroupSubmitButton">
              <FormButton variant="info" type="submit" block disabled={loading}>
                {loading ? <Loader small white /> : 'Sign in'}
              </FormButton>
            </Form.Group>
            <Form.Group controlId="formGroupBackButton">
              <Button
                as="a"
                variant="link"
                disabled={loading}
                block
                onClick={() => dispatch({ type: RESET_STATUS })}
              >
                Go Back
              </Button>
            </Form.Group>
            <Button
              disabled={loading}
              as="a"
              variant="link"
              className="defaultLink"
              onClick={() =>
                dispatch({ type: SET_STATUS, payload: PASSWORD_RESET_REQUEST })
              }
            >
              Forgot your password?
            </Button>
          </fieldset>
        </Form>
      </main>
    </React.Fragment>
  );
};

export default LoginForm;
