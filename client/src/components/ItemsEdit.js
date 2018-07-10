import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../actions/itemActions';
import ItemCard from './ItemCard'
import FormCard from './FormCard'

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
          <ItemCard item={this.props.item} />
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
