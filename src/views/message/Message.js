import React, { useState } from 'react'

const Message = () => {
  const [clear, setClear] = useState(false)
  const handleClear = () => {
    setClear(!clear)
  }
  let user = sessionStorage.getItem('user')
  return (
    <>
      <h5 className="text-center">
        <u>Messages({!clear ? 2 : 0})</u>
      </h5>
      {!clear ? (
        <>
          <div className="card mb-2">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <h6>This is 1st message</h6> <br />
                  <span>Hello {user}.This is 1st message from Elon Native Systems</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <h6>This is 2nd message</h6> <br />
                  <span>Hello {user}.This is 2nd message from Elon Native Systems</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <span className="text-center">There is No Messages</span>
      )}

      <div className="d-flex justify-content-center">
        <button className="btn btn-danger text-white" onClick={handleClear}>
          {!clear ? 'Clear Messages' : 'Show Messages'}
        </button>
      </div>
    </>
  )
}

export default Message
