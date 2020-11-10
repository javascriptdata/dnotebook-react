// import './App.css';
import React, {useState,useReducer} from 'react';
import Cell from "./Cell";
import {reducer} from "./reducer";
import {makeGlobal, downLoad_notebook, load_notebook} from "./utils"

const defaultState = {
  cells: [{id:"cell_1",input:"",output:"",type:"code"}]
}
function App() {

  const [state, dispatch] = useReducer(reducer, defaultState);
  const [currentCell, setCurrentCell] = useState(null)

  makeGlobal();

  return (
    <>
    <button onClick={()=>{ downLoad_notebook(state)}}>Download Notebook</button>
    <input type="file" id="import-notebook-file" onChange={()=>{load_notebook(dispatch)}}></input><br />
    {state.cells.map((cell,index)=>{
        return <Cell key={cell.id} cell={cell} dispatch={dispatch} currentCell={currentCell} 
        setCurrentCell={setCurrentCell} cellId={index+1}/>
    })}
    </>
  );
}

export default App;
