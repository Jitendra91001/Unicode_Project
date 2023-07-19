import React from 'react'
import Select from 'react-select';
const Random = ({selectedOption,setSelectedOption,options}) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6'>

                    <label>Random Question</label><br />
                    <input type='text' placeholder='Random Question' className='form-control w-75' /><br />

                    <label>Technology</label><br />
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        className='selectbox'
                    /><br />

                    <label>Number Of mcq question</label><br />
                    <input type='text' className='form-control w-75' placeholder='total mcq question' /><br />

                </div>
            </div>




        </div>
    )
}

export default Random