import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {
  loadUserDetails,
  updateUserRole,
  toggleActive,
} from '../../../../services/admin/admin.api';
import { UserDetailsTable, ActionButton } from './user-details-modal.styles';
import Select from '../select/select.component';
import { toast } from 'react-toastify';

const UserDetailsModal = ({
  show = false,
  handleClose,
  handleUpdateUser,
  user,
}) => {
  const [userDetails, setUserDetails] = React.useState({});
  const [isEdited, setIsEdited] = React.useState(false);
  const [isUserActive, setIsUserActive] = React.useState(true);
  const selectRef = React.useRef(null);

  React.useEffect(() => {
    setIsUserActive(user?.enabled);
  }, [user]);

  React.useEffect(() => {
    if (!!user && user.id) {
      (async () => {
        const response = await loadUserDetails(user.id);
        console.log(response.data);
        setUserDetails(response.data);
      })();
    }

    return () => {
      setUserDetails({});
      setIsEdited(false);
    };
  }, [user]);

  const handleUpdate = async () => {
    if (selectRef) {
      const newRole = selectRef.current.querySelector('div.value').textContent;
      if (!newRole) {
        toast.error('Role must be selected');
      }
      const currentRole = userDetails.role;
      if (currentRole === newRole) {
        setIsEdited(false);
        return;
      }
      try {
        const response = await updateUserRole(user.id, currentRole, newRole);
        toast.success('User role updated');
        handleUpdateUser(response.data);
      } catch (error) {
        toast.error('Role change failed.');
      }
    }
  };

  const handleToggleActive = async (event) => {
    event.preventDefault();
    try {
      const response = await toggleActive(user.id);
      setIsUserActive(response.data);
      handleUpdateUser(response.data);
      toast.success(
        `${userDetails?.username} ${response.data ? 'activated' : 'disabled'}.`
      );
    } catch (error) {
      toast.error(
        `Something went wrong with ${
          isUserActive ? 'deactivating' : 'activating'
        } offer.`
      );
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Body>
        <UserDetailsTable>
          <tbody>
            {!!user && user?.hasAccount && (
              <tr>
                <td colSpan="1">
                  <div className="name">
                    {userDetails?.account?.firstName}{' '}
                    {userDetails?.account?.lastName}
                  </div>
                </td>
              </tr>
            )}
            <tr>
              <td className="details-td">
                <div className="label">Username</div> :{' '}
                <div className="details-item">{user?.username}</div>
                <br />
                <div className="label">Is active</div> :{' '}
                <div className="details-item">
                  {user?.enabled ? 'Yes' : 'No'}
                </div>
                <br />
                <div ref={selectRef} className="roles-container">
                  <div className="label">Role</div> :{' '}
                  {isEdited ? (
                    <Select
                      placeholder="Pick roles"
                      options={[
                        { value: 'ROOT' },
                        { value: 'ADMIN' },
                        { value: 'USER' },
                      ]}
                      values={[userDetails.role]}
                    />
                  ) : (
                    <React.Fragment>
                      <div className="details-item">{userDetails.role}</div>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`tooltip-edit-roles`}>
                            Edit roles
                          </Tooltip>
                        }
                      >
                        <img
                          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI2OC43MjUgMjY4LjcyNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjY4LjcyNSAyNjguNzI1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnIGlkPSJFZGl0Ij4KCTxwYXRoIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDsiIGQ9Ik0xNjEuMzU5LDU2LjMzN2MtNy4wNDEtNy4wNDktMTguNDU4LTcuMDQ5LTI1LjQ5OCwwbC02LjM3NCw2LjM4MSAgIGwtODkuMjQzLDg5LjMzN2wwLjAyMywwLjAyM2wtMi44MTIsMi44MmMwLDAtOC45NjgsOS4wMzItMjkuMjE2LDc0LjM5OWMtMC4xNDIsMC40NTctMC4yODMsMC45MTEtMC40MjYsMS4zNzQgICBjLTAuMzYxLDEuMTcxLTAuNzI2LDIuMzYxLTEuMDk0LDMuNTY3Yy0wLjMyNiwxLjA2Ni0wLjY1NiwyLjE1NC0wLjk4NywzLjI0OWMtMC4yNzksMC45MjMtMC41NTYsMS44MzYtMC44MzksMi43NzkgICBjLTAuNjQyLDIuMTQtMS4yOTIsNC4zMTgtMS45NTUsNi41NjdjLTEuNDU1LDQuOTM3LTUuMDA5LDE2LjA3LTAuOTksMjAuMWMzLjg3LDMuODgyLDE1LjEyLDAuNDY3LDIwLjA0My0wLjk5MyAgIGMyLjIzMi0wLjY2Miw0LjM5NS0xLjMxMSw2LjUxOS0xLjk1MmMwLjk4MS0wLjI5NiwxLjkzMi0wLjU4NiwyLjg5MS0wLjg3OGMxLjAzMS0wLjMxNCwyLjA1Ny0wLjYyNiwzLjA2Mi0wLjkzNSAgIGMxLjI2OS0wLjM5LDIuNTItMC43NzUsMy43NS0xLjE1N2MwLjM2Ny0wLjExNCwwLjcyNy0wLjIyNywxLjA5MS0wLjM0YzYyLjE5Mi0xOS4zNjUsNzMuMzU3LTI4LjQ1Myw3NC4yODUtMjkuMjg0ICAgYzAuMDA3LTAuMDA1LDAuMDA3LTAuMDA1LDAuMDEyLTAuMDFjMC4wMzktMC4wMzYsMC4wNjYtMC4wNiwwLjA2Ni0wLjA2bDIuODc5LTIuODg2bDAuMTkzLDAuMTkzbDg5LjI0NS04OS4zMzdsLTAuMDAxLTAuMDAxICAgbDYuMzc0LTYuMzgxYzcuMDQxLTcuMDQ4LDcuMDQxLTE4LjQ3NiwwLTI1LjUyNUwxNjEuMzU5LDU2LjMzN3ogTTEwMy4zOTksMjE5Ljc4MmMtMC4wNzgsMC4wNTMtMC4xODQsMC4xMjItMC4yOTYsMC4xOTMgICBjLTAuMDYyLDAuMDQtMC4xMzcsMC4wODctMC4yMTEsMC4xMzNjLTAuMDc1LDAuMDQ3LTAuMTU3LDAuMDk4LTAuMjQ0LDAuMTUxYy0wLjA3NywwLjA0Ny0wLjE1NywwLjA5NS0wLjI0MywwLjE0NyAgIGMtMi45NjksMS43NzctMTEuNjgyLDYuMzYyLTMyLjgyOCwxNC4wMTdjLTIuNDcxLDAuODk0LTUuMTYyLDEuODQyLTcuOTgxLDIuODE5bC0zMC4wNi0zMC4wOTFjMC45OC0yLjg0LDEuOTI5LTUuNTUxLDIuODI2LTguMDQxICAgYzcuNjM4LTIxLjIzNSwxMi4yMTktMjkuOTc0LDEzLjk4Ni0zMi45MzljMC4wNDMtMC4wNzEsMC4wODItMC4xMzYsMC4xMjEtMC4yYzAuMDYyLTAuMTAyLDAuMTItMC4xOTcsMC4xNzQtMC4yODQgICBjMC4wNDMtMC4wNjksMC4wODgtMC4xNDEsMC4xMjYtMC4yYzAuMDcxLTAuMTExLDAuMTQtMC4yMTcsMC4xOTMtMC4yOTZsMi4yLTIuMjA2bDU0LjQ4NSw1NC41NDJMMTAzLjM5OSwyMTkuNzgyeiBNMjYzLjM1MSw1Ni4zMzcgICBsLTUwLjk5Ny01MS4wNWMtNy4wNDEtNy4wNDgtMTguNDU2LTcuMDQ4LTI1LjQ5OCwwbC0xMi43NDgsMTIuNzYzYy03LjA0MSw3LjA0OC03LjA0MSwxOC40NzYsMCwyNS41MjRsNTAuOTk2LDUxLjA1ICAgYzcuMDQsNy4wNDgsMTguNDU3LDcuMDQ4LDI1LjQ5OCwwbDEyLjc0OS0xMi43NjJDMjcwLjM5Miw3NC44MTMsMjcwLjM5Miw2My4zODUsMjYzLjM1MSw1Ni4zMzd6IiBmaWxsPSIjODg4ODg4Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
                          className="edit"
                          alt="edit icon"
                          aria-label="edit-roles"
                          onClick={() => setIsEdited(true)}
                        />
                      </OverlayTrigger>
                    </React.Fragment>
                  )}
                </div>
              </td>
            </tr>
            {!!user && !user?.hasAccount && (
              <tr>
                <td className="description-td">
                  <h6>User has no account.</h6>
                </td>
              </tr>
            )}
            {!!user && user?.hasAccount && (
              <tr>
                <td className="description-td">
                  <h4>Account details</h4>
                  <div className="label">Display Name</div> :{' '}
                  <div className="details-item">
                    {userDetails?.account?.displayName}
                  </div>
                  <br />
                  <div className="label">Phone Number</div> :{' '}
                  <div className="details-item">
                    {userDetails?.account?.contactDetails?.phoneNumber}
                  </div>
                  <br />
                  {userDetails?.account?.contactDetails?.webLink && (
                    <React.Fragment>
                      <div className="label">Web Link</div> :{' '}
                      <div className="details-item">
                        {userDetails?.account?.contactDetails?.webLink}
                      </div>
                      <br />
                    </React.Fragment>
                  )}
                  <div className="label">Location</div> :{' '}
                  <div className="details-item">
                    {userDetails?.account?.address?.locationCityRegion},{' '}
                    {userDetails?.account?.address?.locationCity}
                  </div>
                  <br />
                  <div className="label">Street</div> :{' '}
                  <div className="details-item">
                    {userDetails?.account?.address?.street}
                  </div>
                  <br />
                </td>
              </tr>
            )}
          </tbody>
        </UserDetailsTable>
      </Modal.Body>
      <Modal.Footer>
        {isEdited && (
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        )}{' '}
        {!!user && (
          <ActionButton
            className={isUserActive ? '' : 'is-disabled'}
            onClick={handleToggleActive}
            variant={isUserActive ? 'warning' : 'primary'}
          >
            {isUserActive ? 'Disable' : 'Activate'}
          </ActionButton>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserDetailsModal;
