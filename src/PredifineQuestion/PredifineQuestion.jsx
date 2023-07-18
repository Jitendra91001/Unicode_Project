import React, { useState } from 'react'
import Select from 'react-select';

const PredifineQuestion = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-6'>

                        <label>Total No of PreDefine Question</label><br />
                        <input type='text' placeholder='Predefine Question' /><br />
                        <label>Technology</label><br />
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                           
                        /><br />
                        
                    </div>
                    <div className='row'>
                            <div className='col-sm-6'>
                                <label>Question Type</label><br />
                             
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                    />
                            </div>
                             <div className='col-sm-6'>
                                    <button className='btn btn-info mt-4 ms-2'>Search</button>
                                    <button className='btn btn-info mt-4 ms-2'>Clear</button>
                                    <button className='btn btn-info mt-4 ms-2'>Add New Question</button>
                                    </div>
                        </div>



                </div>
            </div>
        </>
    )
}

export default PredifineQuestion