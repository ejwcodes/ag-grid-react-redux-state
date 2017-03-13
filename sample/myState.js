import React from 'react'
import { connect } from 'react-redux'

const string = (string) => {
  return JSON.stringify(string, null, 2)
}

function MyState(props) {
  const store = props.storeState;

  return (
    <div className="state-info">
      <pre><header>Column State</header>
        {string(store.columnState)}
      </pre>
      <pre><header>Sort State</header>
      {string(store.sortState)}</pre>
      <pre><header>Filter State</header>
      {string(store.filterState)}</pre>
    </div>
  )
}

export default connect((state) => {
  return {
    storeState: {...state.grid.sampleGrid}
  }
})(MyState);
