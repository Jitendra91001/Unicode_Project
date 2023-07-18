import React, { useState } from 'react'
import Random from '../RandamComponent/Random'
import PredifineQuestion from '../PredifineQuestion/PredifineQuestion'

const Tab = () => {

    const [tabValue, setTabValue] = useState('left')

  return (
    // <div style={{marginTop:"40px"}}>

    //     <button onClick={(e)=>setTabValue("left")}>Random Questions</button>
    //     <button onClick={(e)=>setTabValue("right")}>Predefined Questions</button>
    //     {
    //         tabValue==='left' 
    //         ? "Left Component"
    //         : "Right Component"
    //     }

        
    // </div>
    <>
    <div  className='container fluid'>
        <div className='row mt-4'>
            <div className='col-sm-6' style={{textAlign:"center"}}>
                <button className='btn btn-light' type="button" onClick={(e)=>setTabValue("left")}>Random</button>
            </div>
             <div className='col-sm-6' style={{textAlign:"center"}}>
                <button className='btn btn-light border ' type="button" onClick={(e)=>setTabValue("right")}>Predefine Question</button>
            </div>
            <div className='row' >
                <div className='col-sm-12'>
                    {
                        tabValue==='left'
                        ?
                        <Random/>
                        :
                        <PredifineQuestion/>

                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Tab