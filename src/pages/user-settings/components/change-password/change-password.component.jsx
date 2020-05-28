import React from 'react';
import {
  AccountSettingsContainer,
  AccountSettingsTitle,
  SettingsMain,
  Required,
} from '../../user-settings.styles';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import {
  FormControl,
  FormButton,
  ErrorMessageContainer,
} from '../../../../components';
import Col from 'react-bootstrap/Col';
import { Loader } from '../../../../components';
import { Eye } from '../../assets/icons';
import { connect } from 'react-redux';
import { changePasswordAsync } from '../../../../services/user/user.actions';
import { toast } from 'react-toastify';

const ChangePassword = ({ changePasswordAsync }) => {
  const [loading, setLoading] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const { register, errors, handleSubmit, watch, reset } = useForm();
  const newPassword = watch('newPassword');

  const toggleVisible = () => setVisible(!visible);

  const handlePasswordChange = async (data) => {
    try {
      setLoading(true);
      await changePasswordAsync(data);
      setLoading(false);
      reset();
      toast.success('Password changed successfully');
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong');
    }
  };

  return (
    <AccountSettingsContainer>
      <AccountSettingsTitle>
        Change Password
        <Eye onClick={toggleVisible} />
      </AccountSettingsTitle>

      <SettingsMain>
        <Form onSubmit={handleSubmit(handlePasswordChange)}>
          <Form.Row>
            <Form.Group as={Col} md={6} controlId="current-password">
              {!errors.oldPassword && (
                <Form.Label>Current {<Required />}</Form.Label>
              )}
              <ErrorMessageContainer inline forLabel>
                {errors.oldPassword?.type === 'required' && (
                  <p>Current password is required.</p>
                )}
              </ErrorMessageContainer>
              <FormControl
                type={visible ? 'text' : 'password'}
                name="oldPassword"
                ref={register({ required: true })}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md={6} controlId="new-password">
              {!errors.newPassword && (
                <Form.Label>New {<Required />}</Form.Label>
              )}
              <ErrorMessageContainer inline forLabel>
                {errors.newPassword?.type === 'required' && (
                  <p>New password is required.</p>
                )}
              </ErrorMessageContainer>
              <FormControl
                type={visible ? 'text' : 'password'}
                name="newPassword"
                ref={register({ required: true })}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md={6} controlId="confirm-password">
              {!errors.confirmPassword && (
                <Form.Label>Re-type New {<Required />}</Form.Label>
              )}
              <ErrorMessageContainer inline forLabel>
                {errors.confirmPassword?.type === 'required' && (
                  <p>Confirm password is required.</p>
                )}
                {errors.confirmPassword?.type === 'match' && (
                  <p>Confirm password and New password do not match</p>
                )}
              </ErrorMessageContainer>
              <FormControl
                type={visible ? 'text' : 'password'}
                name="confirmPassword"
                ref={register({
                  required: true,
                  validate: {
                    match: (value) => value === newPassword,
                  },
                })}
              />
            </Form.Group>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Group as={Col} xs={6}>
              <FormButton type="submit" variant="success" block>
                {loading ? <Loader small white /> : 'Save Changes'}
              </FormButton>
            </Form.Group>
            <Form.Group as={Col} xs={6}>
              <FormButton variant="light" block onClick={() => reset()}>
                Cancel
              </FormButton>
            </Form.Group>
          </Form.Row>
        </Form>
      </SettingsMain>
    </AccountSettingsContainer>
  );
};

export default connect(null, { changePasswordAsync })(ChangePassword);
