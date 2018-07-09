import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/itemActions';
import { bindActionCreators } from 'redux';

class ItemsShow extends Component {
  constructor(props){
    super(props)
  }

  handleOnClick = () => {
    this.props.actions.deleteItem(this.props.item.id);
  };


  render() {
  return (
    <div>
      <h3>Item</h3>
      <p>{this.props.item.name}</p>
      <p>{this.props.item.amount}</p>
      <p>{this.props.item.notes}</p>
      <button onClick={this.handleOnClick}>Delete</button>
    </div>
  )
}
}

  const mapStateToProps = (state, ownProps) => {

    const item = state.itemsReducer.items.find(item => item.id == ownProps.match.params.itemId)

    if (item) {
      return {item}
    } else {
      return { item: {}}
    }
  };

  const mapDispatchToProps = dispatch => {
    return { actions: bindActionCreators(actions, dispatch) };
  };
export default connect(mapStateToProps, mapDispatchToProps)(ItemsShow)
