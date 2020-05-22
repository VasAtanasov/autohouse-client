import React from 'react';
import LoginOrRegister from './login-register.component';
import LoginForm from './login.component';
import RegisterForm from './register.component';
import {
  LoginRegisterWrapper,
  LoginRegisterContainer,
} from './login-register.styles';
import { renderIf } from '../../utils/helpers';
import { loginOrRegister } from '../../services/user/user.api';
import { connect } from 'react-redux';
import {
  loginRequestAsync,
  registerRequestAsync,
} from '../../services/user/user.actions';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import homeRoutes from '../../routes/home';

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
// const VERIFY_REGISTRATION = 'VERIFY_REGISTRATION';

export const CHECK_USERNAME_STATUS_START = 'CHECK_USERNAME_STATUS';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_STATUS = 'SET_STATUS';
export const CHECK_USERNAME_STATUS_ERROR = 'CHECK_USERNAME_STATUS_ERROR';
export const RESET_STATUS = 'RESET_STATUS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_ERROR = 'LOGIN_ERROR';

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
    registerRequestAsync({
      username,
      ...data,
    });
    console.log(data);
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
            handleRegisterRequest={handleRegisterRequest}
          />
        ))}
      </LoginRegisterWrapper>
    </LoginRegisterContainer>
  );
};

export default connect(null, { loginRequestAsync, registerRequestAsync })(
  LoginRegister
);
