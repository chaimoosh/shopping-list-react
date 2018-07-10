import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import ItemCard from './ItemCard'

class ItemsList extends Component {
  constructor(props){
    super(props)
  }


  render () {
    const itemList = this.props.items.map(item => <div><ItemCard item={item} /> <NavLink to={`/items/${item.id}`}>View Item</NavLink></div>)
    return (
      <div>
        <h4>The List</h4>
        <div>{itemList}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { items: state.itemsReducer.items };
};

export default connect(mapStateToProps)(ItemsList);
