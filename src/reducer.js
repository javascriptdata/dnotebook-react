/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line consistent-return
export const reducer = (state, action) => {
  if (action.type === "CHANGE_CELL") {
    const stateCells = state.cells.map((cell) => {
      if (cell.id === action.payload.id) {
        return action.payload;
      }
      return cell;
    });
    return {
      ...state,
      cells: stateCells,
    };
  }

  if (action.type === "ADD_CELL") {
    // Id generation is been done here because of the issue with dupluicate
    // ids generated when using an existing note
    const newCell = [...state.cells];
    const getMax = Math.max(
      // eslint-disable-next-line func-names
      ...newCell.map(function (o) {
        // eslint-disable-next-line radix
        return parseInt(o.id.split("_")[1]);
      })
    );
    const { payload } = action;
    payload.id = `cell_${getMax + 1}`;
    console.log(payload);
    newCell.splice(action.currentId, 0, payload);
    console.log(newCell);
    return {
      ...state,
      cells: newCell,
    };
  }

  if (action.type === "DELETE_CELL") {
    if (state.cells.length > 1) {
      const newCell = state.cells.filter((cell) => {
        console.log(cell);
        return cell.id !== action.payload;
      });

      return { ...state, cells: newCell };
    }
    return { ...state };
  }

  if (action.type === "LOAD_NOTE") {
    // console.log(action.payload);
    return { ...state, cells: action.payload };
  }
};
