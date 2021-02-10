import React from 'react'
import carLogo from '../assets/icons/carLogo.png'
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();

  return (
    <div className='p-10 w-100'>
 <div className='car-list-item p-10 display-flex w-100 pointer' onClick={()=>history.push("/bid/honda")}>
<div className='w-50'>
<h3 className='m-b-0 m-t-10 '>Honda City</h3>
             <p className='posted-color'>posted at 1 Nov, 9:30 AM</p>
</div>
<div className='w-50'>
<img
                        className="pointer float-right"
                        src={carLogo}
                        alt={'logo'}
                    ></img>
</div>
         </div>
    </div>
  )
}

export default Home
