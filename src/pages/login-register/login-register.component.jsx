import React from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { Loader } from '../../components';
import { SET_USERNAME } from './login-register.container';
import {
  FormButton,
  FormControl,
  ErrorMessageContainer,
} from '../../components';

const LoginOrRegister = ({
  username,
  dispatch,
  loading,
  handleLoginOrRegister,
}) => {
  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });

  return (
    <React.Fragment>
      <header className="login-register-wrapper-header">
        <h1>Sign in or Register</h1>
      </header>
      <main className="login-register-wrapper-main">
        <Form onSubmit={handleSubmit(handleLoginOrRegister)}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email Address</Form.Label>
            <FormControl
              name="username"
              type="email"
              ref={register({ required: true, maxLength: 50 })}
              defaultChecked={username}
              onChange={(event) =>
                dispatch({ type: SET_USERNAME, payload: event.target.value })
              }
            />
            <ErrorMessageContainer>
              {errors.username?.type === 'required' && (
                <p>Please enter an email.</p>
              )}
              {errors.username?.type === 'maxLength' && (
                <p>Email is too long.</p>
              )}
            </ErrorMessageContainer>
          </Form.Group>
          <Form.Group controlId="formGroupNextButton">
            <FormButton disabled={loading} variant="info" type="submit" block>
              {loading ? <Loader small white /> : 'Next'}
            </FormButton>
          </Form.Group>
        </Form>
      </main>
    </React.Fragment>
  );
};

export default LoginOrRegister;
