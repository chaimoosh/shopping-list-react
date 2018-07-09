import fetch from 'isomorphic-fetch'

const getItems = items => {
  return {
    type: "GET_ITEMS",
    items
  };
};

export const addItem = item => {
  return {
    type: "CREATE_ITEM",
    item
  };
};

const removeItem = id => {
  return {
    type: "DELETE_ITEM",
    id
  };
};

const editItem = item => {
  return {
    type: "UPDATE_ITEM",
    item
  };
};


export const fetchItems = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/items')
      .then(response => response.json())
      .then(items => dispatch(getItems(items)))
      .catch(error => console.log(error));
  };
};

export const createItem = item => {
  return dispatch => {
    return fetch('http://localhost:3001/api/items', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(item => {
        dispatch(addItem(item));
      })
      .catch(error => console.log(error));
  };
};

export const deleteItem = id => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(response => {
        if (response.ok) {
          dispatch(removeItem(id));
        } else {
          window.alert("Unable to delete");
        }
      })
      .catch(error => console.log(error));
  };
};

export const updateItem = (item, id) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(item => {
        dispatch(editItem(item));
      })
      .catch(error => console.log(error));
  };
};
