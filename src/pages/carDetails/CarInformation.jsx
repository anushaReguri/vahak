import React from 'react'
import arrow from '../../assets/icons/arrow.svg'
import profileIcon from '../../assets/icons/profileTop.png'
import BidDetails from './BidDetails';

function CarInformation() {
  return (
    <div className='p-20'>
     <h2 className='text-align-centre'>Old Car Available</h2> 
     <hr className='w-20 color-blue m-b-20' ></hr>
     <div className='card car-details m-b-20'>
         <div className='car-header text-align-centre  p-10'>
             <h3 className='m-b-0 m-t-10 '>Honda City</h3>
             <p className='posted-color'>posted at 1 Nov, 9:30 AM</p>
         </div>
         <div>
             <ul className='spec-list'>
                 <li className='spec-1'>  <b>Specification 1</b>     </li>
                 <li className='spec-2'><b>Specification 2</b></li>
                 <li className='spec-3'><b>Specification 3</b></li>
             </ul>
         </div>
         <p className='additional-text'>We put every car through a 200 point inspection so that you can be 100% confident in the quality of the car.</p>
     <div className='hide-div p-10'><span>Hide Details</span>
     <img
                        className="pointer m-l-10 m-b-3"
                        src={arrow}
                        alt={'profile-icon'}
                    ></img>
     </div>
     <div className='profile-div'>
                    <img
                        className="pointer m-r-10 float-left m-t-5"
                        src={profileIcon}
                        alt={'profile-icon'}
                    ></img>
                    <div className='user-name'>
                    <b> Rohan Sharma</b>
                    <span>Bengaluru,Karnataka</span>
                    </div>

                    </div>
     </div>
     <BidDetails/>
    </div>
  )
}

export default CarInformation
