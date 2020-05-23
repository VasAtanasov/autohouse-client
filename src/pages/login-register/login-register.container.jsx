import React from 'react';
import LoginOrRegister from './login-register.component';
import LoginForm from './login.component';
import RegisterForm from './register.component';
import VerifyRegistrationForm from './verify-registration.component';
import ResetPasswordRequestForm from './reset-password-request.component';
import ResetPasswordForm from './reset-password.component';
import {
  LoginRegisterWrapper,
  LoginRegisterContainer,
} from './login-register.styles';
import { renderIf } from '../../utils/helpers';
import {
  loginOrRegister,
  verifyRegistration,
  passwordResetRequest,
  passwordResetComplete,
} from '../../services/user/user.api';
import { connect } from 'react-redux';
import {
  loginRequestAsync,
  registerRequestAsync,
} from '../../services/user/user.actions';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import homeRoutes from '../../routes/home';
import { AuthCheck } from '../../components';
const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const VERIFY_REGISTRATION = 'VERIFY_REGISTRATION';
export const PASSWORD_RESET = 'PASSWORD_RESET';

export const CHECK_USERNAME_STATUS_START = 'CHECK_USERNAME_STATUS';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_STATUS = 'SET_STATUS';
export const CHECK_USERNAME_STATUS_ERROR = 'CHECK_USERNAME_STATUS_ERROR';
export const RESET_STATUS = 'RESET_STATUS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST';
export const VERIFY_REGISTRATION_REQUEST = 'VERIFY_REGISTRATION_REQUEST';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const VERIFY_REGISTRATION_ERROR = 'VERIFY_REGISTRATION_ERROR';
export const PASSWORD_RESET_ERROR = 'PASSWORD_RESET_ERROR';

const LOGIN_REGISTER_STATE = {
  loading: false,
  username: '',
  status: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case RESET_STATUS:
      return {
        ...state,
        status: null,
      };
    case CHECK_USERNAME_STATUS_START:
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case VERIFY_REGISTRATION_REQUEST:
    case PASSWORD_RESET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
        loading: false,
      };
    case CHECK_USERNAME_STATUS_ERROR:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
    case VERIFY_REGISTRATION_ERROR:
    case PASSWORD_RESET_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

const LoginRegister = ({ loginRequestAsync, registerRequestAsync }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    ...LOGIN_REGISTER_STATE,
  });
  let history = useHistory();

  const { loading, username, status } = state;

  const handleLoginOrRegister = async (data) => {
    try {
      dispatch({ type: CHECK_USERNAME_STATUS_START });
      const response = await loginOrRegister(data);
      dispatch({ type: SET_STATUS, payload: response.data.action.status });
    } catch (err) {
      dispatch({ type: CHECK_USERNAME_STATUS_ERROR });
    }
  };

  const handleLogin = async (data) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      await loginRequestAsync({
        username,
        ...data,
      });
      toast.success('LOGIN SUCCESSFUL');
      history.push(homeRoutes.home.path);
    } catch (err) {
      toast.error('LOGIN FAILED');
      dispatch({ type: LOGIN_ERROR });
    }
  };

  const handleRegisterRequest = async (data) => {
    try {
      dispatch({ type: REGISTER_REQUEST });
      await registerRequestAsync({
        username,
        ...data,
      });
      dispatch({ type: SET_STATUS, payload: VERIFY_REGISTRATION });
      toast.success('REGISTRATION SUCCESSFUL');
    } catch (err) {
      toast.error('REGISTRATION FAILED');
      dispatch({ type: REGISTER_ERROR });
    }
  };

  const handleVerifyRegistration = async ({ code }) => {
    try {
      dispatch({ type: VERIFY_REGISTRATION_REQUEST });
      const response = await verifyRegistration(username, code);
      console.log(response);
      dispatch({ type: SET_STATUS, payload: LOGIN });
      toast.success('REGISTRATION VERIFIED, PLEASE LOGIN');
    } catch (err) {
      toast.error('INVALID OR INCORRECT CODE');
      dispatch({ type: VERIFY_REGISTRATION_ERROR });
    }
  };

  const handlePasswordResetRequest = async ({ username }) => {
    try {
      console.log(username);
      dispatch({ type: PASSWORD_RESET_REQUEST });
      const response = await passwordResetRequest(username);
      console.log(response);
      dispatch({ type: SET_STATUS, payload: PASSWORD_RESET });
      toast.success('PASSWORD RESET CODE SENT');
    } catch (err) {
      toast.error('INVALID OR INCORRECT CODE');
      dispatch({ type: PASSWORD_RESET_ERROR });
    }
  };

  const handlePasswordReset = async ({ password, code }) => {
    try {
      console.log(username);
      dispatch({ type: PASSWORD_RESET_REQUEST });
      const response = await passwordResetComplete(username, password, code);
      console.log(response);
      dispatch({ type: SET_STATUS, payload: LOGIN });
      toast.success('PASSWORD RESET SUCCESSFUL');
    } catch (err) {
      toast.error('PASSWORD RESET FAILED');
      dispatch({ type: PASSWORD_RESET_ERROR });
    }
  };

  return (
    <LoginRegisterContainer>
      <LoginRegisterWrapper>
        {renderIf(status === null, () => (
          <LoginOrRegister
            username={username}
            dispatch={dispatch}
            loading={loading}
            handleLoginOrRegister={handleLoginOrRegister}
          />
        ))}
        {renderIf(status && status === LOGIN, () => (
          <LoginForm
            dispatch={dispatch}
            username={username}
            loading={loading}
            handleLogin={handleLogin}
          />
        ))}
        {renderIf(status && status === REGISTER, () => (
          <RegisterForm
            dispatch={dispatch}
            username={username}
            loading={loading}
            handleRegisterRequest={handleRegisterRequest}
          />
        ))}
        {renderIf(status && status === VERIFY_REGISTRATION, () => (
          <VerifyRegistrationForm
            dispatch={dispatch}
            username={username}
            loading={loading}
            handleVerifyRegistration={handleVerifyRegistration}
          />
        ))}
        {renderIf(status && status === PASSWORD_RESET_REQUEST, () => (
          <ResetPasswordRequestForm
            dispatch={dispatch}
            username={username}
            loading={loading}
            handlePasswordResetRequest={handlePasswordResetRequest}
          />
        ))}
        {renderIf(status && status === PASSWORD_RESET, () => (
          <ResetPasswordForm
            dispatch={dispatch}
            username={username}
            loading={loading}
            handlePasswordReset={handlePasswordReset}
          />
        ))}
      </LoginRegisterWrapper>
      <AuthCheck />
    </LoginRegisterContainer>
  );
};

export default connect(null, { loginRequestAsync, registerRequestAsync })(
  LoginRegister
);
