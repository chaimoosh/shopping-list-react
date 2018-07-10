import React from 'react';
import { NavLink } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.amount}</p>
      <p>{item.notes}</p>
    </div>
  )
}

export default ItemCard
