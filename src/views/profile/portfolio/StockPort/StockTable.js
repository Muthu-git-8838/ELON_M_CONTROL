import React from 'react'
import DataGrid from 'react-data-grid'

const columns = [
  { key: 'id', name: 'ID', resizable: true },
  { key: 'title', name: 'Title', resizable: true },
  { key: 'name', name: 'Name', resizable: true },
  { key: 'email', name: 'Email', resizable: true },
]

const rows = [
  { id: 0, title: 'Example', name: 'DemoName', email: 'DemoEmail' },
  { id: 1, title: 'DemoPost' },
]
const StockTable = () => {
  return (
    <>
      <div className="" style={{ backgroundColor: '#2d8659', height: '100%' }}>
        <DataGrid columns={columns} rows={rows} />
      </div>
    </>
  )
}

export default StockTable
