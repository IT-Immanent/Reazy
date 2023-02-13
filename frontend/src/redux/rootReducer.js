import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/auth";
//slices

const rootPersistConfig = {
    key: "root",
    storage,
    keyPrefix: "redux-",
  };
  
  const rootReducer = combineReducers({
    // app: appReducer,
    auth: authReducer
  });
  
  export { rootPersistConfig, rootReducer };