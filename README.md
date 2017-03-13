# ag-grid-react-redux-state
A reducer and pre-wrapped ReactAgGrid implementation that saves column state to redux state.

## Example

Add reducer to your store
```javascript
import gridReducer from "./gridReducer.js"
const reducer = combineReducers({
  grid: gridReducer
})

var store = createStore(reducer)
```

Use the ReduxGrid which is AgGrid already wrapped with the [ReduxGrid HOC](https://github.com/hacocacyb/ag-grid-react-redux-state/blob/master/src/ReduxGrid.js).
```javascript
import ReduxGrid from './ReduxGrid'

<ReduxGrid
  gridName="sampleGrid" //gridName is required to give the grid a consistent key in the redux store
  rowData={data}
  columnDefs={columns}
  enableColResize={true}
  enableSorting={true}
  rowSelection={'single'}
/>

```
