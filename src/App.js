import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Grid from './Grid'
import MyState from './myState'
import store from './ReduxStore'

import './App.css'
import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/theme-fresh.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h2 className="app-header">ag-grid-react-redux-state</h2>

        <Provider store={store}>
            <div className="app-body">
              <Grid />
              <div className="state-view" >
                <MyState />
              </div>
            </div>

        </Provider>
      </div>
    );
  }
}

export default App;
