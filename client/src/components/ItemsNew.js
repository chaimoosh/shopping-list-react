import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createItem } from '../actions/itemActions';
import FormCard from './FormCard'

class ItemsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      amount: '',
      notes: ''
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { createItem, history } = this.props
    createItem(this.state);
    console.log('D')
    history.push('/items');
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Add an Item</h2>
        <FormCard handleOnSubmit={this.handleOnSubmit} handleOnChange={this.handleOnChange} />
      </div>
    );
  }
};

export default connect(null, { createItem })(ItemsNew);
