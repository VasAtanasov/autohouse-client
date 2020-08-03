import React from 'react';
import {
  loadUsersList,
  DEFAULT_PAGE_SIZE,
} from '../../../../services/admin/admin.api';
import Table from 'react-bootstrap/Table';
import { TableMain, PaginationContainer } from './users.styles';
import Paginate from '../pagination/pagination.component';
import { Spinner } from '../../../../components';
import UserDetailsModal from '../user-details-modal/user-details-modal.component';
import { ReactComponent as Minus } from '../../assets/minus.svg';
import { ReactComponent as Tick } from '../../assets/tick.svg';

const INITIAL_STATE = {
  loading: true,
  page: null,
  error: null,
  sort: 'updatedAt,desc',
  pageNumber: 0,
  show: false,
  selectedUser: null,
  updated: 0,
};

const LOAD_PAGE_START = 'LOAD_PAGE_START';
const LOAD_PAGE_SUCCESS = 'LOAD_PAGE_SUCCESS';
const LOAD_PAGE_FAILURE = 'LOAD_PAGE_FAILURE';
const SELECT_PAGE = 'SELECT_PAGE';
const OPEN_USER_DETAILS_MODAL = 'OPEN_USER_DETAILS_MODAL';
const CLOSE_USER_DETAILS_MODAL = 'CLOSE_USER_DETAILS_MODAL';
const UPDATE_USER_ROW = 'UPDATE_USER_ROW';

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PAGE_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        page: action.page,
      };
    case LOAD_PAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SELECT_PAGE:
      return {
        ...state,
        pageNumber: action.payload,
      };
    case OPEN_USER_DETAILS_MODAL:
      return {
        ...state,
        show: true,
        selectedUser: action.payload,
      };
    case CLOSE_USER_DETAILS_MODAL:
      return {
        ...state,
        show: false,
        selectedUser: null,
      };
    case UPDATE_USER_ROW:
      return {
        ...state,
        updated: state.updated + 1,
        selectedUser: null,
        show: false,
      };
    default:
      return state;
  }
};

const UsersContent = () => {
  const [state, dispatch] = React.useReducer(
    reducer,
    Object.assign({}, INITIAL_STATE)
  );

  const {
    loading,
    page,
    sort,
    pageNumber,
    show,
    selectedUser,
    updated,
  } = state;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumber]);

  React.useEffect(() => {
    (async () => {
      try {
        dispatch({ type: LOAD_PAGE_START });
        const response = await loadUsersList(sort, pageNumber);
        dispatch({ type: LOAD_PAGE_SUCCESS, page: response.data });
      } catch (err) {
        dispatch({
          type: LOAD_PAGE_FAILURE,
          page: { empty: true, content: [] },
        });
      }
    })();
  }, [sort, pageNumber, updated]);

  const onPageChange = (pageNumber) => {
    dispatch({ type: SELECT_PAGE, payload: pageNumber });
  };

  const handleUpdateUser = (updatedUser) => {
    dispatch({ type: UPDATE_USER_ROW, payload: updatedUser });
  };

  return (
    <React.Fragment>
      <TableMain>
        {loading || !page ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <UserDetailsModal
              show={show}
              user={selectedUser}
              handleClose={() => dispatch({ type: CLOSE_USER_DETAILS_MODAL })}
              handleUpdateUser={handleUpdateUser}
            />
            <Table striped bordered hover variant="dark" responsive="lg">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Is active</th>
                  <th>Has Account</th>
                </tr>
              </thead>
              <tbody>
                {!page && page.empty ? (
                  <h1>No users found</h1>
                ) : (
                  page?.content.map((user, index) => (
                    <tr
                      className="user-row"
                      key={index + 1}
                      onClick={() =>
                        dispatch({
                          type: OPEN_USER_DETAILS_MODAL,
                          payload: user,
                        })
                      }
                    >
                      <td>{pageNumber * DEFAULT_PAGE_SIZE + index + 1}</td>
                      <td>{user.username}</td>
                      <td>{user.enabled ? <Tick /> : <Minus />}</td>
                      <td>{user.hasAccount ? <Tick /> : <Minus />}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </React.Fragment>
        )}
      </TableMain>
      <PaginationContainer>
        {!loading && page && (
          <Paginate page={page} onPageChange={onPageChange} />
        )}
      </PaginationContainer>
    </React.Fragment>
  );
};

export default UsersContent;
