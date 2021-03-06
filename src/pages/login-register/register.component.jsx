import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { RESET_STATUS } from './login-register.container';
import { Loader } from '../../components';
import {
  FormButton,
  FormControl,
  ErrorMessageContainer,
} from '../../components';

const RegisterForm = ({
  dispatch,
  username,
  loading,
  handleRegisterRequest,
}) => {
  const { register, errors, handleSubmit, watch } = useForm({
    mode: 'onChange',
  });
  let password = watch('password');
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
              <FormControl
                name="password"
                type="password"
                ref={register({ required: true })}
              />
              <ErrorMessageContainer>
                {errors.password?.type === 'required' && (
                  <p>Please enter a password.</p>
                )}
              </ErrorMessageContainer>
            </Form.Group>
            <Form.Group controlId="formGroupConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <FormControl
                name="confirmPassword"
                type="password"
                ref={register({
                  required: true,
                  validate: {
                    notMatch: (confirmPassword) => password === confirmPassword,
                  },
                })}
              />
              <ErrorMessageContainer>
                {errors.confirmPassword?.type === 'required' && (
                  <p>Please enter a confirm password.</p>
                )}
                {errors.confirmPassword?.type === 'notMatch' && (
                  <p>Passwords must match</p>
                )}
              </ErrorMessageContainer>
            </Form.Group>
            <Form.Group controlId="formGroupSubmitButton">
              <FormButton variant="info" type="submit" disabled={loading} block>
                {loading ? <Loader small white /> : 'Sign up'}
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
          </fieldset>
        </Form>
      </main>
    </React.Fragment>
  );
};

export default RegisterForm;
