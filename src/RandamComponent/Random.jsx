import React, { memo, useContext, } from 'react'

import CreatableSelect from 'react-select/creatable';
import { createAPI } from '../App';
import { Technology as technologyOpt } from '../QuestionGenerate/data';
import { toast } from 'react-toastify';
const Random = () => {
    const { selectedOption, setSelectedOption } = useContext(createAPI)
    const { totalNoQuestion, RandomValue: { RandomQuestion, NoOfmcqQuestion, Technology } } = selectedOption

    const handleRandom = (fieldName, value) => {
        if (fieldName.includes('RandomQuestion')) {
            if (value > Number(totalNoQuestion)) {
                toast.warning("value exceed !!")
            } else {
                setSelectedOption(pre => ({
                    ...pre, RandomValue: {
                        ...pre.RandomValue, [fieldName]: value
                    }
                }))
            }
        } else {
                if (Number(value) !== Number(RandomQuestion)) {
                    toast.error("mcq value exceed !!")
                } else {
                    setSelectedOption(pre => ({
                        ...pre, RandomValue: {
                            ...pre.RandomValue, [fieldName]: value
                        }
                    }))
    
                }
        }
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6'>

                    <label>Random Question</label><br />
                    <input type='number' onChange={(e) => handleRandom("RandomQuestion", e.target.value)} value={RandomQuestion} placeholder='Random Question'
                        // value={RandomQuestion}
                        className='form-control w-75' /><br />

                    <label>Technology</label><br />
                    <CreatableSelect
                        isMulti
                        onChange={(value) => handleRandom("Technology", value)}
                        value={Technology}
                        options={technologyOpt}
                        className='selectbox'
                    /><br />

                    <label>Number Of mcq question</label><br />
                    <input type='number' onChange={(e) => handleRandom("NoOfmcqQuestion", e.target.value)}  className='form-control w-75' placeholder='total mcq question' /><br />
                </div>
            </div>
        </div>
    )
}

export default memo(Random)