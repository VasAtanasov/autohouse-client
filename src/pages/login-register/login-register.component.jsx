import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { Loader } from '../../components';
import { SET_USERNAME } from './login-register.container';

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
            <Form.Control
              name="username"
              type="email"
              ref={register({ required: true, maxLength: 50 })}
              onChange={(event) =>
                dispatch({ type: SET_USERNAME, payload: event.target.value })
              }
            />
            {errors.username?.type === 'required' && (
              <p>Please enter a email.</p>
            )}
            {errors.username?.type === 'maxLength' && <p>Email is too long.</p>}
          </Form.Group>
          <Form.Group controlId="formGroupNextButton">
            <Button
              disabled={loading}
              className="next-button"
              variant="primary"
              type="submit"
              block
            >
              {loading ? <Loader small white /> : 'Next'}
            </Button>
          </Form.Group>
        </Form>
      </main>
    </React.Fragment>
  );
};

export default LoginOrRegister;
