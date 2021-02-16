import {
  configureStore,
  createSlice,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../redux-saga";

const slice = createSlice({
  name: "slice",
  initialState: {
    counter: 1
  },
  reducers: {
    increamentClicked() {},
    increament: (state, action) => ({
      ...state,
      counter: state.counter + action.payload
    }),
    decreamentClicked() {},
    decreament: (state, action) => ({
      ...state,
      counter: state.counter - action.payload
    })
  }
});

// export our actions
export const {
  increament,
  decreament,
  increamentClicked,
  decreamentClicked
} = slice.actions;

// insted of Redux.combineReducers()
const rootReducer = combineReducers({
  counterReducer: slice.reducer
  // otherReducer: otherSlice.reducer
});
const sagaMiddleware = createSagaMiddleware();
// our store insted of Redux.createStore(reducer)

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
