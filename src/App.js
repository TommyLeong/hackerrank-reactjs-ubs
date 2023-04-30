import React, {useState, useEffect} from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';

const title = "Hacker Dormitory";
function App() {

  const [errMsg, setErrMsg] = useState('');
  const [validRes, setValidRes] = useState([]);

  const updateErrMsg = (returnErrMsg) => {
    setErrMsg(returnErrMsg);
  }

  const updateValidResident = (returnValidResident) => {
    let tempValidRes = validRes;

    if(validRes.length > 0){
      tempValidRes = JSON.parse(validRes)
      tempValidRes.push(returnValidResident)
    }else{
      tempValidRes.push(returnValidResident)
    }

    setValidRes(JSON.stringify(tempValidRes));
  }

  return (
    <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search errCallBack={updateErrMsg} addResidentCallBack={updateValidResident}/>
        <Error errMsg={errMsg}/>
        <ResidentsList validResident={validRes}/>
      </div>
    </div>
  );
}

export default App;
