/**
  Basic reducer that keeps no state between sessions.
**/
export default function(state={}, action) {
  let payload = action.payload;
  switch(action.type) {
    case "UPDATE_GRID_STATE": {
      const grid = payload.gridName
      const gridState = payload.gridState
      let nextState = {...state}
      nextState[grid] = gridState
      return nextState
    }
    default:
      return state;
  }
}
