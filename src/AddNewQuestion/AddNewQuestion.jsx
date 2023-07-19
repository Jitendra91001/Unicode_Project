import React, { useContext, useState } from 'react'
import { options } from '../QuestionGenerate/data';
import Select from 'react-select';
import { createAPI } from '../App';
import { toast } from 'react-toastify';
const AddNewQuestion = ({ render, setRender }) => {
    const { selectedOption, setSelectedOption } = useContext(createAPI)
    const [option, setOption] = useState({ option1: { value: '', isCorrect: false } })
    const [AddNewdata, setAddNewData] = useState({
        Technology: '',
        QuestionType: '',
        QuestionTitle: '',
        CorrectAnsswer: ''
    });
    const { AddNewData } = selectedOption

    const generateQuestions = () => {
        if (Object.keys(option).length < 4) {
            if (Object.keys(option).length) {
                const lastIndexOf = Number(Object.keys(option).slice(-1)[0].slice(-1))
                setOption({ ...option, [`option` + (lastIndexOf + 1)]: { value: '', isCorrect: false } })
                
            } else {
                setOption({ ...option, option1: { value: '', isCorrect: false } })
                
            }
        }else{
            toast.error("allmost 4 option created")
        }
    }
    const handleData = (fieldName, value) => {
        setAddNewData((prev) => {
            return { ...prev, [fieldName]: value }
        })
    }

    const deletedataoption = (key) => {
        const copyState = { ...option }
        delete copyState[key]
        setOption(copyState)
        toast.error("Option Deleted")
    }

    const saveData = () => {
        // if(AddNewData.length){
        //     setSelectedOption({...selectedOption,AddNewData:selectedOption.AddNewData,AddNewdata})
        // setRender(!render)
        // console.log(selectedOption)
        // }else{
        //     setSelectedOption({...selectedOption,AddNewData:selectedOption.AddNewData,AddNewdata})
        // }
        setSelectedOption({ ...selectedOption, AddNewData: selectedOption.AddNewData, AddNewdata })
        setRender(!render)
        console.log(selectedOption)
        toast.success("Data Save")
    }

    const SaveNewCreate = () => {

    }
    return (
        <>
            <div className='container-fluid addnew'>
                <p className='fs-4 mt-2'>Add New Questions</p>
                <label>Technology</label><br />
                <Select
                    defaultValue={AddNewdata}
                    onChange={(value) => handleData("Technology", value)}
                    options={options}
                />

                <label>Question Type</label><br />

                <Select
                    defaultValue={AddNewdata}
                    onChange={(value) => handleData("QuestionType", value)}
                    options={options}
                />

                <label>Question Title</label><br />

                <Select
                    defaultValue={AddNewdata}
                    onChange={(value) => handleData("QuestionTitle", value)}
                    options={options}
                />

                <div className='Answertype'>
                    <><p className='mt-3 fs-5 d-flex'>Answer Option</p><div className='icon mt-3 ms-2' onClick={() => generateQuestions()}>+</div></></div>


                {
                    Object.keys(option).map((option, index) => {

                        return (
                            <div className='d-flex' key={index}>
                                <div>
                                    <label>Answer Option</label><br />
                                    <input type='text' className='form-control w-75' onChange={(e) => handleData("CorrectAnsswer", e.target.value)} />
                                </div>

                                <div>
                                    <label>Is Correct</label><br />
                                    <input type='checkbox' className='mt-2 accent' />
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
                    <button className='btn btn-danger float-end' type='button'>Cancel</button>
                </div>



            </div>


        </>
    )
}

export default AddNewQuestion