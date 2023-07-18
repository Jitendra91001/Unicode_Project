import React from 'react'
import './custom.css'
const Radio = ({managedby,onClick}) => {
    return (
        <>
           {
            managedby.value==="Agent" ?
            
            <>
                <input type="radio" checked disabled onChange={onClick} name="radioValue" className='mcq' value="Yes" /><label>Yes</label>
                <input type="radio" disabled onChange={onClick} name="radioValue" className='mcq' value="No" /><label>No</label>
            
            </>
            :
            <>

                <input type="radio" checked onChange={onClick} name="radioValue" className='mcq' value="Yes"/><label>Yes</label>
                <input type="radio" onChange={onClick} name="radioValue" className='mcq' value="No"/><label>No</label>
            
            </>
           }
        </>
    )
}
export default Radio