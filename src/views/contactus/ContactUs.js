import React from 'react'
import contact from '../../assets/images/5138237.jpg'
import { cilLocationPin, cilPhone } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
const contactus = () => {
  return (
    <>
      <div className="card">
        <div className="card-body ">
          <div className="row">
            <h3 className="col-12 text-center">ELON NATIVE SYSTEMS</h3>
          </div>
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={contact}
                alt="Contact_Us"
                // style={{ width: '500px', height: '500px' }}
              />
            </div>
            <div className="offset-1 col-lg-5 col-md-5 col-12 d-flex align-items-center">
              <h4 className="">
                <CIcon icon={cilLocationPin} /> Velmuruga Nadar Street <br /> Mamsapuram-626110{' '}
                <br /> VirudhuNagar District <br /> Tamil Nadu <br /> India <br />
                <CIcon icon={cilPhone} /> Tel : 04563-288185 <br />
                <CIcon icon={cilPhone} /> Mobile : +91 9786015608
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <div className="con-head">
    //     <h2>Elon Native Systems</h2>
    //   </div>
    //   <div className="con-body">
    //     <p>
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut soluta laudantium quam ea
    //       dolor molestiae iure ipsa. Doloribus perferendis voluptatibus voluptatem eligendi nostrum
    //       quam maxime ratione cupiditate quae iure. Accusamus.
    //     </p>
    //   </div>
    //   <div className="con-footer d-flex justify-content-center">
    //     <h3>Elon Native System</h3>
    //     <h4>
    //       Velmuruga Nadar Street <br /> Mamsapuram-626110 <br /> VirudhuNagar District <br /> Tamil
    //       Nadu <br /> India{' '}
    //     </h4>
    //   </div>
    // </div>
  )
}
export default contactus
