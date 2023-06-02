import { CChart } from '@coreui/react-chartjs'
import React from 'react'

const MainChart = () => {
  return (
    <div>
      <CChart
        // style={{ width: '400px', height: '500px' }}
        type="bar"
        data={{
          labels: [
            'Stocks',
            'MutualFunds',
            'Bonding',
            'Gold',
            'Gold SGB',
            'Chit Fund',
            'PostOffice',
            'landing',
          ],
          datasets: [
            {
              label: 'My-Assets',
              backgroundColor: '#0099ff',
              data: [15, 11, 13, 16, 11, 10, 11, 13],
            },
          ],
        }}
        labels="months"
      />
    </div>
  )
}

export default MainChart
