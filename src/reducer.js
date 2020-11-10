export const reducer = (state, action)=>{

    if(action.type === "CHANGE_CELL"){
      const stateCells = state.cells.map((cell)=>{
        if(cell.id === action.payload.id){
          return action.payload;
        }
        return cell;
      })
      return {
        ...state,
        cells : stateCells
      }
    }
    
    if(action.type === "ADD_CELL"){
      const newCell = [...state.cells]
      newCell.splice(action.currentId,0,action.payload);
      console.log(newCell);
      return {
        ...state,
        cells: newCell
      }
    }

    if(action.type === "DELETE_CELL"){
      if(state.cells.length >1){
        const newCell = state.cells.filter((cell)=>{
        return cell.id !== action.payload
        });

        return {...state, cells: newCell};
      }else{
        return {...state};
      }
      
    }

    if(action.type === "LOAD_NOTE"){
      console.log("action payload", action.payload);
      return {...state, cells: action.payload }
    }

}