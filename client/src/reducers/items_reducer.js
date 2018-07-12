// let items
export default function itemsReducer(state = {items: [],}, action) {
  switch (action.type) {
    case 'GET_ITEMS':
      return  {items: action.items};
    case 'CREATE_ITEM':
      return {items: state.items.concat(action.item)};
    case "DELETE_ITEM":
      return {items: state.items.filter(item => item.id !== action.id)};
    case "UPDATE_ITEM":
        return {items: state.items.map(
          item =>
            item.id === action.item.id
              ? Object.assign({}, ...item, action.item)
              : item
        )}
    default:
      return state
  }
}

// export function itemsHasErrored(state = false, action) {
//     switch (action.type) {
//         case 'ITEMS_HAS_ERRORED':
//             return action.hasErrored;
//
//         default:
//             return state;
//     }
// }
//
// export function itemsIsLoading(state = false, action) {
//     switch (action.type) {
//         case 'ITEMS_IS_LOADING':
//             return action.isLoading;
//
//         default:
//             return state;
//     }
// }
//
// export function items(state = [], action) {
//     switch (action.type) {
//         case 'ITEMS_FETCH_DATA_SUCCESS':
//             return action.items;
//
//         default:
//             return state;
//     }
// }
