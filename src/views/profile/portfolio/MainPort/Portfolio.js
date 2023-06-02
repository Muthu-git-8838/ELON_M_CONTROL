import { CChart } from '@coreui/react-chartjs'
import React from 'react'
import MainChart from './MainChart'
import StockChart from './StockChart'
import CFChart from './CFChart'

const Portfolio = () => {
  return (
    <>
      <div className="card">
        <div className="card-body ">
          <MainChart />
        </div>
      </div>
      <div className="card my-3">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6  col-12">
              <h6 className="text-center">
                <u> StockChart</u>
              </h6>
              <StockChart />
            </div>
            <div className="col-lg-6  col-12">
              <h6 className="text-center">
                <u> Chit Fund Chart</u>
              </h6>
              <CFChart />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6  col-12">
              <h6 className="text-center">
                <u>Gold Chart</u>
              </h6>
            </div>
            <div className="col-lg-6  col-12">
              <h6 className="text-center">
                <u>Gold SGB Chart</u>
              </h6>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6  col-12">
              <h6 className="text-center">
                <u>5th Chart</u>
              </h6>
            </div>
            <div className="col-lg-6  col-12">
              <h6 className="text-center">
                <u>6th Chart</u>
              </h6>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6  col-12">
              <h6 className="text-center">
                <u>7th Chart</u>
              </h6>
            </div>
            <div className="col-lg-6  col-12">
              <h6 className="text-center">
                <u>8th Chart</u>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
