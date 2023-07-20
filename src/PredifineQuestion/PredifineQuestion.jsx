import React, { useContext, useState } from 'react'
import CreatableSelect from 'react-select/creatable';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Select from 'react-select';
import { rows, columns, Technology, options } from '../QuestionGenerate/data';
import AddNewQuestion from '../AddNewQuestion/AddNewQuestion';
import { createAPI } from '../App';

const PredifineQuestion = () => {
    const { selectedOption, setSelectedOption } = useContext(createAPI)
    const [render, setRender] = useState(false)

    const{totalNoQuestion,RandomValue:{RandomQuestion,NoOfmcqQuestion},PredefineQuestion:{TotalNoOfQuestion,Technology,QuestionType}}=selectedOption

    console.log("totalNo"+totalNoQuestion,"RandomQuestion"+RandomQuestion,"NoOfmcq"+NoOfmcqQuestion,"totalPre"+TotalNoOfQuestion)

    const handlePredefine = (filedName, value) => {
        setSelectedOption((prev) => {
            return {
                ...selectedOption,
                PredefineQuestion: { ...selectedOption.PredefineQuestion, [filedName]: value }
            }
        })
    }
    return (
        <>
            <div className='container-fluid' style={{ position: "relative" }}>
                <div className='row'>
                    <div className='col-sm-6'>

                        <label>Total No of PreDefine Question</label><br />
                        <input type='number' onChange={(e) => handlePredefine("TotalNoOfQuestion", parseInt(e.target.value))} placeholder='Predefine Question'value={TotalNoOfQuestion} className='form-control' /><br />
                        <label>Technology</label><br />

                        <CreatableSelect
                            isMulti
                            onChange={(value) => handlePredefine("Technology", value)}
                            options={Technology}
                            value={Technology}
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
                            <button className='btn btn-info mt-4 ms-2' type='button'>Search</button>
                            <button className='btn btn-info mt-4 ms-2' type='reset'>Clear</button>
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

export default PredifineQuestion