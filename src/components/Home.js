import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Dropdown from './Dropdown';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to umwarimu home page</h1>
        <Button bsStyle='success'>Apply Here</Button>
        <Dropdown />
      </div>
    )
  }
}
