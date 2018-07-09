import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

class ItemsList extends Component {
  constructor(props){
    super(props)
  }


  render () {
    const itemList = this.props.items.map(item => <li>{item.amount} {item.name} {item.notes} <NavLink to={`/items/${item.id}`}>View Item</NavLink> </li>)
    return (
      <div>
        <h4>The List</h4>
        <ul>{itemList}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { items: state.itemsReducer.items };
};

export default connect(mapStateToProps)(ItemsList);
