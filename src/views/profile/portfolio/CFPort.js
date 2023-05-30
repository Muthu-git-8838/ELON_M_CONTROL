import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { ToWords } from 'to-words'

const CFPort = () => {
  const [organization, setOrganization] = useState('')
  const [monthlyAmount, setMonthlyAmount] = useState(0)
  const [months, setMonths] = useState(0)
  const [loading, setLoading] = useState(false)

  const towords = new ToWords()
  let FinalAmount = towords.convert(monthlyAmount * months, { currency: true })
  const handleStock = async () => {
    setLoading(true)
    if (organization === '' || monthlyAmount <= 0 || months <= 0) {
      toast.warning('Function called but validation failed')
      setLoading(false)
    } else {
      toast.success('Function called and validation passed')
      setOrganization('')
      setMonthlyAmount(0)
      setMonths(0)
      setLoading(false)
    }
  }

  return (
    <>
      <div className="card">
        <div className="card-body d-flex justify-content-center">
          <div className="">
            <h4 className="text-center">CHIT FUND-PORTFOLIO</h4>
            {/* </div>
          <div classname> */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="abcd&co"
              />
              <label htmlFor="floatingInput">Organization Name</label>
            </div>
            <div className="form-floating">
              <input
                type="number"
                min={1}
                value={monthlyAmount}
                onChange={(e) => setMonthlyAmount(e.target.value)}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Invest Amount / Month</label>
            </div>
            <div className="input-group mb-3 mt-3">
              <span className="input-group-text" id="basic-addon1">
                No. Of Months
              </span>
              <input
                type="number"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                className="form-control"
                placeholder="Amount"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mt-3">
              <span className="input-group-text" id="basic-addon2">
                Final Amount (in ₹.)
              </span>
              <input
                type="text"
                value={monthlyAmount * months}
                disabled
                className="form-control"
                aria-label="LTP Amount"
                aria-describedby="basic-addon2"
              />
            </div>
            {monthlyAmount * months >= 1 ? (
              <span className="mb-3 text-danger">{FinalAmount}</span>
            ) : null}

            <div className="form-floating ">
              <button onClick={handleStock} className="btn btn-primary" style={{ width: '32vw' }}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CFPort
