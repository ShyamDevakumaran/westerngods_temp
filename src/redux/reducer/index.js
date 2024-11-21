import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { inventoryReducer } from "./inventoryReducer";
import { masterReducer } from "./masterReducer";
import { productReducer } from "./productReducer";
import { wishlistReducer } from "./wishlistReducer";

const allReducers = combineReducers({
  authReducer: authReducer.reducer,
  masterReducer: masterReducer.reducer,
  inventoryReducer: inventoryReducer.reducer,
  productReducer: productReducer.reducer,
  wishlistReducer :wishlistReducer.reducer
});

const rootReducer = (state, action) => allReducers(state, action);
export default rootReducer;
