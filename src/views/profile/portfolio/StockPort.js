import { CChart } from '@coreui/react-chartjs'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { ToWords } from 'to-words'

const StockPort = () => {
  const [company, setCompany] = useState('')
  const [amount, setAmount] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [loading, setLoading] = useState(false)

  const towords = new ToWords()
  const LTP = towords.convert(amount * quantity, { currency: true })
  const handleStock = async () => {
    setLoading(true)
    if (company === '' || amount <= 0 || quantity <= 0) {
      toast.warning('Function called but validation failed')
      setLoading(false)
    } else {
      toast.success('Function called and validation passed')
      setAmount(0)
      setQuantity(0)
      setCompany('')
      setLoading(false)
    }
  }

  return (
    <>
      <div className="card">
        <div className="card-body d-flex justify-content-center">
          <div className="">
            <h4 className="text-center">STOCK-PORTFOLIO</h4>
            {/* </div>
          <div classname> */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="abcd&co"
              />
              <label htmlFor="floatingInput">Company Name</label>
            </div>
            <div className="form-floating">
              <input
                type="number"
                min={1}
                max={100}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Quantity Of Share</label>
            </div>
            <div className="input-group mb-3 mt-3">
              <span className="input-group-text" id="basic-addon1">
                Price/Share (in ₹.)
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-control"
                placeholder="Amount"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group  mt-3">
              <span className="input-group-text" id="basic-addon2">
                LTP (in ₹.)
              </span>
              <input
                type="text"
                value={quantity * amount}
                disabled
                className="form-control"
                aria-label="LTP Amount"
                aria-describedby="basic-addon2"
              />
            </div>
            {quantity * amount >= 1 ? <span className="mb-3 text-danger">{LTP}</span> : null}

            <div className="form-floating ">
              <button onClick={handleStock} className="btn btn-primary" style={{ width: '32vw' }}>
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
          
        </div>
      </div>
    </>
  )
}

export default StockPort
