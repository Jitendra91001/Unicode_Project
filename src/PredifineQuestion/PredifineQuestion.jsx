import React, { useState } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Select from 'react-select';
import { rows } from '../QuestionGenerate/data';
import AddNewQuestion from '../AddNewQuestion/AddNewQuestion';

const PredifineQuestion = ({ selectedOption, setSelectedOption, options }) => {
    const [render, setRender] = useState(false)

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'questiontitel', headerName: 'QuestionTitel', width: 300 },
        { field: 'questionLavel', headerName: 'QuestionLavel ', width: 300 },
        { field: 'QuestionType', headerName: 'QuestioType ', width: 300 },
      
      ];
    return (
        <>
            <div className='container-fluid' style={{ position: "relative" }}>
                <div className='row'>
                    <div className='col-sm-6'>

                        <label>Total No of PreDefine Question</label><br />
                        <input type='text' placeholder='Predefine Question' className='form-control' /><br />
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
                            <button className='btn btn-info mt-4 ms-2' type='button'>Search</button>
                            <button className='btn btn-info mt-4 ms-2' type='button'>Clear</button>
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