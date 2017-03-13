const APP_NAME = 'ag-grid-react-redux-state-sample'
let firstState = {}
if (typeof localStorage !== 'undefined') {
  try {
    firstState = JSON.parse(localStorage[APP_NAME + '.gridState']) || {};
  } catch(e) {}
}

export default function grids(state=firstState, action) {
  let payload = action.payload;
  switch(action.type) {
    case "UPDATE_GRID_STATE": {
      const grid = payload.gridName
      const gridState = payload.gridState
      let nextState = {...state}
      nextState[grid] = gridState
      if (localStorage) {
        localStorage.setItem(APP_NAME + '.gridState', JSON.stringify(nextState))
      }
      return nextState
    }
    default:
      return state;
  }
}
