import { createContext, useState } from 'react';
import './App.css';
import { options } from './QuestionGenerate/data';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuestionText from './QuestionGenerate/QuestionText';
const createAPI=createContext()
function App() {
 
  const [selectedOption, setSelectedOption] = useState({
    text_name: '',
    text_type: options,
    managedby: {},
    scrinning: {},
    totalNoQuestion: 0,
    radioValue:'',
    RandomValue:{
      RandomQuestion:0,
      Technology:[],
      NoOfmcqQuestion:0
    },
    PredefineQuestion:{
      TotalNoOfQuestion:0,
      Technology:'',
      QuestioType:''
    },
    AddNewData:[]

});
  return (
    <div className="App">
      <createAPI.Provider value={{selectedOption,setSelectedOption}}>
        <ToastContainer/>
     <QuestionText/>
     </createAPI.Provider>
     {/* <AddNewQuestion/> */}
    </div>
  );
}

export default App;
export{createAPI}
