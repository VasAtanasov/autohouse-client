import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const DashboardContent = () => {
  return (
    <Jumbotron>
      <h1>Welcome to admin panel!</h1>
      <p>
        Here you can administrate users and offers from "autohouse" web
        application
      </p>
      <p>
        <Button as={Link} to="/admin/users" variant="info">
          Manage users
        </Button>
      </p>
    </Jumbotron>
  );
};

export default DashboardContent;
