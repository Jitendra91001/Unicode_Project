import React, { useContext, useState } from 'react'
import { options,Technology } from '../QuestionGenerate/data';
import Select from 'react-select';
import { addNewQuestion } from '../QuestionGenerate/data';
import { createAPI } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios';
const AddNewQuestion = ({ render, setRender }) => {
    const { selectedOption, setSelectedOption } = useContext(createAPI)
    const [option, setOption] = useState({ option1: { value: '', isCorrect: false } })
    const [addNewdata, setAddNewData] = useState(addNewQuestion);
    const generateQuestions = () => {
        if (Object.keys(option).length < 4) {
            if (Object.keys(option).length) {
                const lastIndexOf = Number(Object.keys(option).slice(-1)[0].slice(-1))
                setOption({ ...option, [`option` + (lastIndexOf + 1)]: { value: '', isCorrect: false } })

            } else {
                setOption({ ...option, option1: { value: '', isCorrect: false } })
            }
        } else {
            toast.error("maximum Option Selected")
        }
    }
    const handleData = (fieldName, value) => {
        if (fieldName.includes('option')) {
            setAddNewData((prev) => {
                return { ...prev, option: { ...prev.option, [fieldName]: value } }
            })
        } else {
            setAddNewData((prev) => {
                return { ...prev, [fieldName]: value }
            })
        }
    }

    const deletedataoption = (key) => {
        const copyState = { ...option }
        delete copyState[key]
        setOption(copyState)
        toast.error("Option Deleted")
    }

    const saveData = () => {

        if (Object.values(addNewdata).every(data => Boolean(data) !== false)) {
            setSelectedOption({ ...selectedOption, AddNewData: [...selectedOption.AddNewData, { ...addNewdata }] })
            setRender(!render)
            toast.success("data saved !!!")
            axios.post('http://localhost:8080/AddNewQuestion',addNewdata)
        } else {
            toast.error("Please all fields Required !!!")
        }

    }
    const SaveNewCreate = () => {
        if (Object.values(addNewdata).every(data => Boolean(data) !== false)) {
            setSelectedOption({ ...selectedOption, AddNewData: selectedOption.AddNewData, addNewdata })
            setAddNewData(addNewQuestion)
            toast.success("Data Saved !!!")
            axios.post('http://localhost:8080/AddNewQuestion',addNewdata)
        } else {
            toast.error("Please all fields Required !!!")
        }

    }

    const cancelData = () => {
        setRender(!render)
        toast.success("canclation")
    }
    return (
        <>
            <div className='container-fluid addnew'>
                <p className='fs-4 mt-2'>Add New Questions</p>
                <label>Technology</label><br />
                <Select
                    defaultValue={"Select..."}
                    onChange={(value) => handleData("Technology", value.value)}
                    options={Technology}
                />

                <label>Question Type</label><br />

                <Select
                    defaultValue={"Select..."}
                    onChange={(value) => handleData("QuestionType", value.value)}
                    options={options}
                />
                <label>Question Title</label><br />
                 <input type='text' onChange={(e) => handleData("QuestionTitel", e.target.value)}placeholder='Enter the Question Title'className='form-control'
                 />

                <div className='Answertype'>
                    <><p className='mt-3 fs-5 d-flex'>Answer Option</p><div className='icon mt-3 ms-2' onClick={() => generateQuestions()}>+</div></></div>
                {
                    Object.keys(option).map((option, index) => {

                        return (
                            <div className='d-flex' key={index}>
                                <div>
                                    <label>Answer Option ({index + 1})</label><br />
                                    <input type='text' onChange={(e) => handleData(`option${index + 1}`, e.target.value)} className='form-control w-75' />
                                </div>

                                <div>
                                    <label>Is Correct</label><br />
                                    <input type='radio' name="correct" onChange={(e) => handleData("CorrectAnsswer", e.target.value)} value={`option${index+1}`} className='mt-2 accent' />
                                </div>

                                <div style={{ backgroundColor: "red" }} className='sub ms-3' onClick={() => deletedataoption(option)}>-</div>

                            </div>
                        );
                    }
                    )
                }
                <div className='mt-4'>
                    <button className='btn btn-success ms-2' type='button' onClick={saveData}>Save</button>
                    <button className='btn btn-success ms-2' type='button' onClick={SaveNewCreate}>Save & Create New</button>
                    <button className='btn btn-danger float-end' type='button' onClick={cancelData}>Cancel</button>
                </div>
            </div>


        </>
    )
}

export default AddNewQuestion