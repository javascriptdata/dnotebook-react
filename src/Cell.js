import React, {useRef, useEffect} from 'react'
import CodeMirror from "react-codemirror";
import { Remarkable } from 'remarkable';

require("codemirror/lib/codemirror.css");
require("codemirror/mode/javascript/javascript");
require("codemirror/theme/dracula.css");

export default function Cell({cell, dispatch, currentCell, setCurrentCell,cellId}) {
  const refCode = useRef(null);
  const refOutput = useRef('');

  const getCode = ()=>{
    if(cell.type === "code"){
      const input = refCode.current.getCodeMirror().getValue();
      try {
       const output  = ("global",eval)(input) || ''
       const cellstate = {...cell, input: input, output:output}
       dispatch({type:"CHANGE_CELL", payload:cellstate});
      }catch(error){
        const cellstate = {...cell, input: input, output:error}
       dispatch({type:"CHANGE_CELL", payload:cellstate});
      }
       

    }else{
      const cellstate = {...cell, input: refCode.current.value}
      showOutput();
      dispatch({type:"CHANGE_CELL", payload:cellstate});
    }
  }

  const setId = ()=>{
    const id = currentCell? currentCell : parseInt(cell.id.split("_")[1]);
    setCurrentCell(id);
  }

  useEffect(()=>{
    if(cell.type ==="text"){
      refCode.current.value = cell.input;
      const md = new Remarkable();
      refOutput.current.innerHTML = md.render(cell.input);
      refCode.current.style.display = cell.input ? "none": "block";
    }else
    {
      refCode.current.getCodeMirror().setValue(cell.input);
      refOutput.current.innerHTML = cell.output;
    }
    setId();
  },[cell])

  const upCell = (type)=>{

    const id = cellId -1;
    newCell(id,type);
  }

  const downCell = (type)=>{
    const id = cellId;
    newCell(id,type);
    
  }

  const newCell = (id, type)=>{

    const newCell = {
      id: "cell_"+(currentCell+1),
      input: "",
    }

    if(type === "text"){
      newCell["type"] = "text"
    }else{
      newCell["output"] = ""
      newCell["type"] = "code"
    }
    setCurrentCell(currentCell+1);
    dispatch({type:"ADD_CELL", payload:newCell, currentId: id});
  }

  const disableOutput = ()=>{
    if(cell.type === "text"){
      refOutput.current.style.display = "none";
      refCode.current.style.display = "block";
    }
  }

  const showOutput = ()=>{
    if(cell.type === "text"){
      refOutput.current.style.display = "block";
      refCode.current.style.display = "none";
    }
  }

  const deleteCell = ()=>{
    dispatch({type:"DELETE_CELL",payload:cell.id});
  }

  return (
    <>
    <button onClick={()=>{getCode()}}>Run</button>
    <button onClick={()=>{upCell("code")}}>Up cell</button>
    <button onClick={()=>{downCell("code")}}>down cell</button>
    <button onClick={()=>{upCell("text")}}>Text up</button>
    <button onClick={()=>{downCell("text")}}>Text down</button>
    <button onClick={()=>{deleteCell()}}>Delete Cell</button>
      {cell.type === "code" ? <CodeMirror value={cell.input} ref={refCode}
        options={{
          tabSize: 2,
          theme: "dracula",
          lineNumbers: true,
          mode: "javascript"
        }}
      /> : <TextCell refText={refCode}/>}
      <div ref={refOutput} onClick={()=>{disableOutput()}}></div>
  </>
  )
}

function TextCell({refText}){

  return (
  <textarea ref={refText}></textarea>
  )
}