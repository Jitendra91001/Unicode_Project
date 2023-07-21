import React, { memo, useContext, useEffect, useState } from 'react'
import CreatableSelect from 'react-select/creatable';
import { DataGrid, selectedGridRowsCountSelector} from '@mui/x-data-grid';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { columns, Technology, options } from '../QuestionGenerate/data';
import AddNewQuestion from '../AddNewQuestion/AddNewQuestion';
import { createAPI } from '../App';
import axios from 'axios';


const PredifineQuestion = () => {
    const { selectedOption, setSelectedOption } = useContext(createAPI)
    const [render, setRender] = useState(false)
    const[rows,setRow]=useState([])

    const { totalNoQuestion, RandomValue: { RandomQuestion, NoOfmcqQuestion }, PredefineQuestion: { TotalNoOfQuestion, QuestionType } } = selectedOption

    useEffect(()=>{
        let response=axios.get('http://localhost:8080/AddNewQuestion')
       response.then(res=>setRow(res[Object.keys(res)[0]]))
    },[])
    const handlePredefine = (fieldName, value) => {
        if(value<0){
            toast.error("Please Enter the Positive Number !!!")
        }else{
            let remainingValue=Number(totalNoQuestion)-Number(RandomQuestion)

            if(fieldName.includes('TotalNoOfQuestion')){
                if(value <= remainingValue){
                    setSelectedOption((prev) => {
                        return {
                            ...prev,
                            PredefineQuestion: { ...prev.PredefineQuestion, [fieldName]: value }
                        }
                    })
                }else{
                    toast.error("Please Enter the value "+remainingValue,{theme:'colored'})
                }
            }
        }
    }
    const cleardata = () => {
          setSelectedOption((prev)=>{
            return {...prev,...prev.PredefineQuestion,TotalNoOfQuestion:0,
            Technology:'',
            QuestioType:''
        }
          })
    }

   const fetchdata=()=>{
     let langdata=selectedOption.PredefineQuestion.Technology
     let questiontype=selectedOption.PredefineQuestion.QuestioType
       
     if(!langdata.length || !questiontype.length)
           toast.error("Please provide required technology or question type")
    else{   
           let ApiArray=[]
           langdata.map((tech)=>{
               ApiArray.push(axios.get('http://localhost:8080/'+tech))
            })
           Promise.all(ApiArray).then((res)=>{
            let result=[]
            res.map(({data})=>{
                result = [...result,...data]
            })
            let allData=result.map((question,index)=>(
               {
                    id:index,
                    title:question.question,
                    lavel:1,
                    technology:'Technology'
                }
            ))
               setRow(allData.revers)
            }).catch((error)=>console.log(error))
           
    }

   }
    return (
        <>
            <div className='container-fluid' style={{ position: "relative" }}>
                <div className='row'>
                    <div className='col-sm-6'>

                        <label>Total No of PreDefine Question</label><br />
                        <input type='number' onChange={(e) => handlePredefine("TotalNoOfQuestion", parseInt(e.target.value))} placeholder='Predefine Question' value={TotalNoOfQuestion} className='form-control' /><br />
                        <label>Technology</label><br />

                        <CreatableSelect
                            isMulti
                            onChange={(value) => handlePredefine("Technology", value)}
                            options={Technology}

                        />

                    </div>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <label>Question Type</label><br />

                            <Select
                                onChange={(value) => handlePredefine("QuestioType", value)}
                                options={options}
                                value={QuestionType}
                            />
                        </div>
                        <div className='col-sm-6'>
                            <button className='btn btn-info mt-4 ms-2' type='button' onClick={fetchdata} >Search</button>
                            <button className='btn btn-info mt-4 ms-2' type='button' onClick={cleardata}>Clear</button>
                            <button className='btn btn-info mt-4 ms-2' type="button" onClick={() => setRender(!render)} >Add New Question</button>
                        </div>
                        {
                            render && <AddNewQuestion render={render} setRender={setRender} />
                        }
                    </div>

                    <div className='row mt-4'>
                        <div className='col-sm-12'>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 5 },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(PredifineQuestion)