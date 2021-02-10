import React ,{useState} from 'react'

function BidDetails() {
    const [state, setState] = useState({bidAmount:'',mobileNum:'', name:'', remarks:'',fixedPrice:false});
    
  return (
    <form onSubmit={(e)=> {
      e.preventDefault();
      window.alert('Placed Your Bid Successfully')}}>
    <div className='bid-details'>
       <h3 className='text-align-centre m-t-0'>Place Your Load Bid</h3> 
     <hr className='w-20 color-blue' ></hr>
     <div className='input-div'>
     <div className='input-amount-div'>
     <b>&#8377;</b>
  <input className='m-l-10 font-20 number-input'
   type='number'
   value={state.bidAmount}
    onChange={(e)=>     {
      if(e.target.value.length>10) return; //allowing maximum 10 digits only
    setState({...state,bidAmount:e.target.value, fixedPrice: state.fixedPrice&&e.target.value!==''})}}>
    </input>
     </div>
     </div>
    <div className='w-100 p-b-10 height-50'>
    <div className='w-80 margin-auto'>
         <button className={`bid-button m-r-10 float-left pointer ${state.fixedPrice?'bid-button-active':''}`}
          disabled={state.bidAmount===''} 
         onClick={()=> setState({...state, fixedPrice:true})}>
           Fixed Price
           </button>
         <button className='bid-button pointer float-right' disabled={state.bidAmount===''}> Rate Negotiable</button>
     </div>
    </div>
     {state.fixedPrice&&<div className='p-t-10' >
     <div class="p-floating-container">
     <b>+91</b>
      <input placeholder="Enter your mobile number"
      className='input-mobile mobile-number' 
      type='text'
     value={state.mobileNum}  required pattern="[\d]{10}"
     maxlength="10"
    title="Please Enter Valid Mobile Number"
    onChange={(e)=> setState({...state,mobileNum:e.target.value})}/>
    <label className='font-12'>Enter your mobile number</label>
</div>
<div class="p-floating-container">
    <input placeholder="Enter your name" className='input-mobile'
      value={state.name} required
      type='text'
    onChange={(e)=> setState({...state,name:e.target.value})}/>
    <label className='font-12'>Enter your name</label>
</div>
<div class="p-floating-container">
    <input placeholder="Enter remarks(optional)" className='input-mobile'
     value={state.remarks} 
     type='text'
    onChange={(e)=> setState({...state,remarks:e.target.value})}/>
    <label className='font-12'>Enter remarks(optional)</label>
</div>
     </div>}
    </div>
    <button  className='submit-btn pointer' disabled={state.mobileNum.trim()===''||state.name.trim()===''}> Bid Now</button>

    </form>
  )
}

export default BidDetails
