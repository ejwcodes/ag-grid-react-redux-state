# ag-grid-react-redux-state
A reducer and pre-wrapped ReactAgGrid implementation that saves the column state
 of your grid to the redux store. Column definitions are updated with the state from
 the store on mapStateToProps.

[Implemented with Local Storage](https://hacocacyb.github.io/ag-grid-react-redux-state/)

## Sample Usage

Add the reducer to your store with the key 'grid'
```javascript
import gridReducer from "./gridReducer.js"
const reducer = combineReducers({
  grid: gridReducer
})

var store = createStore(reducer)
```
Use the ReduxGrid which is AgGrid already wrapped with the [ReduxGrid HOC](https://github.com/hacocacyb/ag-grid-react-redux-state/blob/master/src/lib/ReduxGrid.js).
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
