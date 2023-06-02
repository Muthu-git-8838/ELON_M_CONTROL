import React from 'react'

const Notification = () => {
  return (
    <>
      <h5 className="text-center">
        <u>Notifications(1)</u>
      </h5>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <h5>This is Notification</h5> <br />
              <span>
                Hello {sessionStorage.getItem('user')} !. This is the notification from ENS
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notification
