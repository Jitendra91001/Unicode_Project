import React, { useContext } from 'react'
import './question.css'
import Input from '../Component/Input'
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import Label from '../Component/Label';
import Button from '../Component/Button';
import { options2, options3 } from './data';
import Radio from '../Component/Radio';
import Tab from '../Tab/Tab';
import { createAPI } from '../App';
import { toast } from 'react-toastify';
const QuestionText = () => {
    const contextapiData = useContext(createAPI)
    const { selectedOption, setSelectedOption } = contextapiData;
    const { text_name, text_type, managedby, scrinning, totalNoQuestion, } = selectedOption
    const handleChangeData = (fieldName, value) => {
        if (value < 0) {
            toast.warning("Please Enter the Positive Number")
        } else {
            setSelectedOption((prev) => {
                return { ...prev, [fieldName]: value }
            })
        }
    }
    const handleCreateOption = (value) => {
        setSelectedOption((prev) => {
            return {
                ...prev,
                text_type: [...prev.text_type, { value: value, label: value[0].toUpperCase() + value.slice(1,).toLowerCase() }]
            }
        })
        toast.success("option Created Please Choose")
    }

    const submitData = () => {
        console.log(selectedOption)
        toast.success("Data Submitted")
    }

    const handleMCQ = (e) => {
        setSelectedOption((prev) => {
            return { ...prev, mcq: prev.mcq, [e.target.name]: e.target.value }
        })

    }
    return (
        <>
            <form className=' p-2'>
                <p className='h1'>Condidate scrinning text Creation</p>
                <Label label="Text Name" />
                <Input
                    type="text"
                    placeholder="Text Name"
                    onChange={(e) => handleChangeData("text_name", e.target.value)}
                /><br />


                <Label label="select text-type or add new text type" />
                <CreatableSelect
                    options={text_type}
                    onChange={(value) => handleChangeData("text_type", value)} className='selectbox'
                    onCreateOption={(value) => handleCreateOption(value)}
                />


                <Label label="Managed by" />
                <Select
                    defaultValue="Select..."
                    onChange={(value) => handleChangeData("managedby", value)}
                    options={options2}
                    className='selectbox'
                />
                <div className='mcq'>
                    <Label label="Is MCQ" className="mcq" />
                    <Radio managedby={managedby} onClick={handleMCQ} />
                </div><br />

                <Label label="Screnning Type" />
                <Select
                    defaultValue="Select..."
                    onChange={(value) => handleChangeData("scrinning", value)}
                    options={options3}
                    className='selectbox'
                /><br />

                <Label label="Total No of Questions" />
                <Input
                    type="number"
                    placeholder="Total Number of question"
                    value={totalNoQuestion}
                    onChange={(e) => handleChangeData("totalNoQuestion", parseInt(e.target.value))}
                /><br />

                {
                    selectedOption.totalNoQuestion > 0 && <Tab />
                }


                <Button type="button" classname="btn btn-success mt-4" onClick={submitData} value="submit condidate text" />
                <Button type="button" classname="btn btn-light ms-4 mt-4" value=" final submit" />


            </form>
        </>
    )
}

export default QuestionText