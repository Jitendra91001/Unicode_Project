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
        option:{option1:'',option2:'',option3:'',option4:''},
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
        } else {
            toast.error("maximum Option Selected")
        }
    }
    const handleData = (fieldName, value) => {
        if(fieldName.includes('option')){
            setAddNewData((prev) => {
                return { ...prev,option:{...prev.option,[fieldName]:value}}
            })
        }else{
            setAddNewData((prev) => {
                return { ...prev,[fieldName]:value}
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
        setSelectedOption({...selectedOption, AddNewData:[...selectedOption.AddNewData, {...AddNewdata}]})
        setRender(!render)
        // console.log({...selectedOption, AddNewData:[...selectedOption.AddNewData, {...AddNewdata}]})
        toast.success("Data Save")
    }
    const SaveNewCreate = () => {
        setSelectedOption({ ...selectedOption, AddNewData: selectedOption.AddNewData, AddNewdata })
        console.log(selectedOption)
        toast.success("Data Saved");
    }

    const cancelData=()=>{
        setRender(!render)
        toast.error("canclation")
    }
    return (
        <>
            <div className='container-fluid addnew'>
                <p className='fs-4 mt-2'>Add New Questions</p>
                <label>Technology</label><br/>
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
                                    <label>Answer Option ({index+1})</label><br />
                                    <input type='text' onChange={(e)=>handleData(`option${index+1}`,e.target.value)} className='form-control w-75'  />
                                </div>

                                <div>
                                    <label>Is Correct</label><br />
                                    <input type='checkbox' onChange={(e) => handleData("CorrectAnsswer", e.target.value)} className='mt-2 accent' />
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