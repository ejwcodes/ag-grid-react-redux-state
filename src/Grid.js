import React from 'react'
import ReduxGrid from './lib/ReduxGrid'
const data = []
for (let x = 1; x < 12000; x++) {
  data.push({
    text: Math.floor(Math.random() * 1000),
    text2: Math.floor(Math.random() * 1000),
    text3: Math.floor(Math.random() * 1000),
    text4: Math.floor(Math.random() * 1000)
  })
}

const columns = [{
  headerName: 'Text',
  width: 84,
  field: 'text'
}, {
  headerName: 'Column 2',
  width: 84,
  field: 'text2'
}, {
  headerName: 'Column 3',
  width: 84,
  field: 'text3'
}, {
  headerName: 'Column 4',
  width: 84,
  field: 'text4'
}]

export default (props) => {
  return (

      <div className="ag-fresh sample-grid">
        <ReduxGrid
          gridName="sampleGrid"
          rowData={data}
          columnDefs={columns}
          enableColResize={true}
          enableSorting={true}
          rowSelection={'single'}
        />
      </div>
  )
}
