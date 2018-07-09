import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createItem } from '../actions/itemActions';

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
        <form onSubmit={this.handleOnSubmit} >
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleOnChange} /> <br></br>
          <input
            type="text"
            placeholder="Amount"
            name="amount"
            onChange={this.handleOnChange} /><br></br>
            <input
              type="text"
              placeholder="Notes"
              name="notes"
              onChange={this.handleOnChange} /><br></br>
          <input
            type="submit"
            value="Add Item" />
        </form>
      </div>
    );
  }
};

export default connect(null, { createItem })(ItemsNew);
