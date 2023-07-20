import React, { useState } from 'react'
import Random from '../RandamComponent/Random'
import { options } from '../QuestionGenerate/data'
import PredifineQuestion from '../PredifineQuestion/PredifineQuestion'

const Tab = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [tabValue, setTabValue] = useState('left')
    return (
        <>
            <div className='container fluid'>
                <div className='row mt-4'>
                    <div className='col-sm-6' style={{ textAlign: "center" }}>
                        <button className={`btn ${tabValue === 'left' ? 'btn-primary' : 'btn-light'}`} type="button" onClick={(e) => setTabValue("left")}>Random</button>
                    </div>
                    <div className='col-sm-6' style={{ textAlign: "center" }}>
                        <button  className={`btn ${tabValue === 'right' ? 'btn-primary' : 'btn-light'}`} type="button" onClick={(e) => setTabValue("right")}>Predefine Question</button>
                    </div>
                    <div className='row' >
                        <div className='col-sm-12'>
                            {
                                tabValue === 'left'
                                    ?
                                    <Random selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={options} />
                                    :
                                    <PredifineQuestion selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={options} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tab