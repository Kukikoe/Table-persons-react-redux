import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import './App.css';
import TablePersons from "./components/persons/index";

const store = createStore(reducer);

store.subscribe(() => {
    localStorage.setItem('PersonList', JSON.stringify(store.getState()))
});

function App() {
      return (
          <Provider store={store}>
              <div className="App">
                  <TablePersons />
              </div>
          </Provider>
    );
}

export default App;
