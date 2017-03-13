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
      <Provider store={store}>
        <div style={{
            height: '100%',
            overflow: 'hidden'
          }}>
          <Grid />
          <div className="state-view" >
            <MyState />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
