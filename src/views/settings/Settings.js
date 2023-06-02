import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Settings = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [notificationEnabled, setNotificationEnabled] = useState(false)
  const [currency, setCurrency] = useState('USD')

  const handleSaveSettings = () => {
    // Logic to save settings to the backend or perform any desired action
    // You can access the updated settings values from the state variables (name, email, notificationEnabled, currency)
    toast.warning('Settings saved but API not implemented', {
      position: 'top-center',
      theme: 'dark',
    })
    console.log('Settings saved:', name, email, notificationEnabled, currency)
  }

  return (
    <div>
      <h1>Settings</h1>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="notification">Enable Notifications</label>
              <input
                type="checkbox"
                id="notification"
                checked={notificationEnabled}
                onChange={(e) => setNotificationEnabled(e.target.checked)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="currency">Currency</label>
              <select id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>
          <button className="btn btn-success mt-2" onClick={handleSaveSettings}>
            Save Settings
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings
