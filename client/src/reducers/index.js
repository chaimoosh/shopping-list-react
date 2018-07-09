import { combineReducers } from "redux";

import itemsReducer from "./items_reducer";

export default combineReducers({
  itemsReducer
});

// import { items, itemsHasErrored, itemsIsLoading } from './items_reducer';
//
// export default combineReducers({
//     items,
//     itemsHasErrored,
//     itemsIsLoading
// });
