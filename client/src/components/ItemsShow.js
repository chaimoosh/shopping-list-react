import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/itemActions';
import { bindActionCreators } from 'redux';
import { NavLink } from "react-router-dom";
import ItemCard from './ItemCard'

class ItemsShow extends Component {
  constructor(props){
    super(props)
  }

  handleOnClick = () => {
    this.props.actions.deleteItem(this.props.item.id);
    //history.push('/items');
  };


  render() {
  return (
    <div>
      <h3>Item</h3>
      <ItemCard item={this.props.item} />
      <p><button onClick={this.handleOnClick}>Delete</button></p>
      <p><NavLink to={`${this.props.item.id}/edit`}>Edit Item</NavLink></p>
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
