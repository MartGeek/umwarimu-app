import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { ButtonToolbar} from 'react-bootstrap';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <p>Umwarimu</p>
        <ButtonToolbar>
          <DropdownButton title="Default button" id="dropdown-size-medium">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/courses'>Courses</NavLink>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </div>
    );
  };
};
