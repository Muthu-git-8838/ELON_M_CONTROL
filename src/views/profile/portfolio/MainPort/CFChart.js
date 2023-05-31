import { CChart } from '@coreui/react-chartjs'
import React from 'react'

const CFChart = () => {
  return (
    <div className="mt-5">
      <CChart
        type="line"
        data={{
          labels: [
            'Month-1',
            'Month-2',
            'Month-3',
            'Month-4',
            'Month-5',
            'Month-6',
            'Month-7',
            'Month-8',
            'Month-9',
            'Month-10',
            'Month-11',
            'Month-12',
            'Month-13',
            'Month-14',
            'Month-15',
            'Month-16',
            'Month-17',
            'Month-18',
            'Month-19',
            'Month-20',
          ],
          datasets: [
            {
              label: 'Monthly Chit Fund Amount',
              backgroundColor: '#d1d1e0',
              borderColor: '#1affff',
              pointBackgroundColor: '#0066ff',
              pointBorderColor: '#000',
              data: [
                2200, 2200, 2300, 2250, 2200, 2300, 2350, 2350, 2350, 2200, 2200, 2300, 2250, 2200,
                2300, 2350, 2350, 2350, 2200, 2200, 2300, 2250, 2200, 2300, 2350, 2350,
              ],
            },
          ],
        }}
      />
    </div>
  )
}

export default CFChart
