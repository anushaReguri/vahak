import React ,{useState} from 'react'

function BidDetails() {
    const [state, setState] = useState({bidAmount:'',mobileNum:'', name:'', remarks:''});

    
  return (
    <div className='bid-details'>
       <h3 className='text-align-centre m-t-0'>Place Your Load Bid</h3> 
     <hr className='w-20 color-blue' ></hr>
     <div className='input-div'>
     <b>&#8377;</b>
  <input className='m-l-10 font-20 number-input' type='number' value={state.bidAmount} onChange={(e)=> setState({...state,bidAmount:e.target.value})}></input>
     </div>
     <div className='w-80 margin-auto'>
         <button className='bid-button m-r-10 pointer' disabled={state.bidAmount===''}>Fixed Price</button>
         <button className='bid-button pointer' disabled={state.bidAmount===''}> Rate Negotiable</button>
     </div>
     <div className='m-t-10 p-10'>
     <div class="p-floating-container m-b-10">
    <input placeholder="Enter your mobile number" className='input-mobile' value={state.mobileNum} 
    onChange={(e)=> setState({...state,mobileNum:e.target.value})}/>
    <label className='font-12'>Enter your mobile number</label>
</div>
<div class="p-floating-container m-b-10">
    <input placeholder="Enter your name" className='input-mobile'  value={state.name}
    onChange={(e)=> setState({...state,name:e.target.value})}/>
    <label className='font-12'>Enter your name</label>
</div>
<div class="p-floating-container m-b-10">
    <input placeholder="Enter remarks(optional)" className='input-mobile' value={state.remarks} 
    onChange={(e)=> setState({...state,remarks:e.target.value})}/>
    <label className='font-12'>Enter remarks(optional)</label>
</div>
<button  className='submit-btn' disabled={state.mobileNum.trim()===''||state.name.trim()===''} onClick={()=>{}}> Bid Now</button>
     </div>
    </div>
  )
}

export default BidDetails
