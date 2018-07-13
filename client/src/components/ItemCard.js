import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/itemActions';
import { bindActionCreators } from 'redux';

class ItemCard extends Component {
  constructor(props) {
    super(props)
  }

  addLike = event => {
    event.preventDefault();
    let item = Object.assign({}, this.props.item, this.props.item.likes += 1)
    this.props.actions.updateItem(item, this.props.item.id);
  }

  // handleOnSubmit = event => {
  //   event.preventDefault();
  //   const { updateItem, history } = this.props
  //   updateItem(this.state, this.props.item.id);
  //   history.push(`/items/${this.props.item.id}`);
  // }

  render() {
  return (
    <div>
      {this.props.item.name}<br></br>
      {this.props.item.amount}<br></br>
      {this.props.item.notes}<br></br>
      {this.props.item.likes}<br></br>
      <button onClick={this.addLike}>Like</button>
    </div>
  )
}
}

const mapStateToProps = state => {
  return { items: state.itemsReducer.items };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard)
