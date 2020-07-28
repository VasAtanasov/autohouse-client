import React from 'react';
import { loadUsersList } from '../../../../services/admin/admin.api';
import Table from 'react-bootstrap/Table';
import { TableContainer, TableMain } from './users.styles';

const UsersContent = () => {
  const [usersPage, setUsersPage] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await loadUsersList();
        setUsersPage(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setUsersPage({ content: [], empty: true });
      }
    })();
  }, []);

  return (
    <TableContainer>
      <TableMain>
        <Table striped bordered hover variant="dark" responsive="lg">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Has Account</th>
              <th>Roles</th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              usersPage &&
              usersPage?.content.map((user, index) => (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.hasAccount ? 'Yes' : 'No'}</td>
                  <td>{user.roles.join(', ')}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </TableMain>
    </TableContainer>
  );
};

export default UsersContent;
