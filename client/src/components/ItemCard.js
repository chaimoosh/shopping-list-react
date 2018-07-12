import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div>
      {item.name}<br></br>
      {item.amount}<br></br>
      {item.notes}
    </div>
  )
}

export default ItemCard
