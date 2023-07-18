import React, { useState } from 'react'
import './random.css'
import Select from 'react-select';
const Random = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6'>

                    <label>Random Question</label><br />
                    <input type='text' placeholder='Random Question' className='form-control' /><br />

                    <label>Technology</label><br />
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        className='selectbox'
                    /><br />

                    <label>Number Of mcq question</label><br />
                    <input type='text' className='mcqbox' placeholder='total mcq question' /><br />

                </div>
            </div>




        </div>
    )
}

export default Random