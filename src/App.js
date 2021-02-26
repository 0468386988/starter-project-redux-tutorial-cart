import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// redux stuff

// store - stores data, think of state
// reducer - function that used to update store
// two arguments - state, action
// action - what happened / what update
// return updated or old state

import { createStore } from "redux";
import reducer from "./reducer";

// dispatch method - send actions to the store
// actions (object) - MUST HAVE TYPE PROPERTY - what kind of action
// DONOT MUTATE THE STATE - redux built on IMMUTABILITY (use copy)

// store.getState() -

// react-redux - {Provider} - wraps app, connect - used in components
import { Provider } from "react-redux";

// initial store

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
