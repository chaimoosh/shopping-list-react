import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import ItemCard from './ItemCard'

class ItemsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      likes: 0
    }
  }

  addLike = event => {
    let currentLikes = this.state.likes
    this.setState({
      likes: currentLikes += 1
    })
  }


  render () {
    const itemList = this.props.items.map(item => <div><ItemCard item={item} /> <NavLink to={`/items/${item.id}`}>View Item</NavLink></div>)
    return (
      <div>
        <h4>The List</h4>
        <div>{itemList}</div>
        <button onClick={this.addLike}>Like</button>
        <p>{this.state.likes}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { items: state.itemsReducer.items };
};

export default connect(mapStateToProps)(ItemsList);
