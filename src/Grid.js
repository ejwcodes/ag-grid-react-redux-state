import React from 'react'
import ReduxGrid from './lib/ReduxGrid'
const data = []
const alpha = 'qwertyuiopasdfghjklzxcvbnm'.split('')
const randomLetters = function() {
  let len = Math.ceil(Math.random() * 8)
  let word = '';
  while (len > 0) {
    const ix = Math.floor(Math.random() * alpha.length)
    word += alpha[ix]
    len--
  }
  return word
}
for (let x = 1; x < 12000; x++) {
  data.push({
    text: Math.floor(Math.random() * 1000),
    text2: randomLetters(),
    text3: Math.floor(Math.random() * 1000),
    text4: Math.floor(Math.random() * 1000)
  })
}

const columns = [{
  headerName: 'Text',
  width: 84,
  field: 'text',
  filter: 'number'
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
          enableFilter={true}
          suppressMenuFilterPanel={false}
          enableColResize={true}
          enableSorting={true}
          rowSelection={'single'}
        />
      </div>
  )
}
