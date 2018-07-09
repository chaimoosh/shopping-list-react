import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../actions/itemActions';

class ItemsEdit extends Component {
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
    const { updateItem, history } = this.props
    updateItem(this.state, this.props.item.id);
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
        <div>
          <h3>Item</h3>
          <p>{this.props.item.name}</p>
          <p>{this.props.item.amount}</p>
          <p>{this.props.item.notes}</p>
        </div>
        <h2>Update Item</h2>
        <form onSubmit={this.handleOnSubmit} ><br></br>
          <input
            type="text"
            placeholder={this.props.item.name}
            name="name"
            onChange={this.handleOnChange} /><br></br>
          <input
            type="text"
            placeholder={this.props.item.amount}
            name="amount"
            onChange={this.handleOnChange} /><br></br>
            <input
              type="text"
              placeholder={this.props.item.notes}
              name="notes"
              onChange={this.handleOnChange} /><br></br>
          <input
            type="submit"
            value="Update Item" />
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {

  const item = state.itemsReducer.items.find(item => item.id == ownProps.match.params.itemId)

  if (item) {
    return {item}
  } else {
    return { item: {}}
  }
};

export default connect(mapStateToProps, { updateItem })(ItemsEdit);
