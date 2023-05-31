import { CChart } from '@coreui/react-chartjs'
import React from 'react'

const StockChart = () => {
  return (
    <div>
      <CChart
        // style={{ width: '400px', height: '200px', marginBottom: '100px' }}
        type="doughnut"
        data={{
          labels: ['Wipro', 'TCS', 'UPL', 'Tata Steels', 'Zomato'],
          datasets: [
            {
              backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#0066ff', '#FF0000'],
              data: [30, 40, 80, 100, 25],
            },
          ],
        }}
      />
    </div>
  )
}

export default StockChart
