/* eslint-disable prefer-const */
// Function for cell on going activity
function cellActivity(type, message) {
  if (type === "loading") {
    document.getElementById("play").style.display = "none";
    document.getElementById("activity-loader").style.display = "block";
    document.getElementById(`out_${window.current_cell}`).innerHTML = "";
  } else if (type === "success") {
    document.getElementById("play").style.display = "block";
    document.getElementById("activity-loader").style.display = "none";
    document.getElementById(`out_${window.current_cell}`).innerHTML = message;
    document.getElementById(`out_${window.current_cell}`).style.color = "white";
  } else {
    document.getElementById("play").style.display = "block";
    document.getElementById("activity-loader").style.display = "none";
    document.getElementById(`out_${window.current_cell}`).innerHTML = message;
    document.getElementById(`out_${window.current_cell}`).style.color = "red";
  }
}
/* eslint-disable no-eval */
/* eslint-disable no-multi-assign */
/* eslint-disable no-plusplus */
export function print_val(val) {
  /// Neeed refactoring. Lot of duplicated line of code
  if (Array.isArray(val[0])) {
    const row_length = val.length;
    let data_string = "[";
    if (row_length > 10) {
      for (let i = 0; i < 10; i++) {
        const row_val = val[i];
        const col_length = row_val.length;
        data_string += "[";
        if (col_length > 10) {
          for (let j = 0; j < 10; j++) {
            data_string += j === 9 ? `${row_val[j]}` : `${row_val[j]},`;
          }
          data_string += `.......${col_length - 10} more],`;
        } else {
          for (let j = 0; j < col_length; j++) {
            data_string +=
              j === col_length - 1 ? `${row_val[j]}` : `${row_val[j]},`;
          }
          data_string += i === row_length - 1 ? "]" : "],";
        }
      }
      data_string += `...${row_length - 10} more]`;
    } else {
      for (let i = 0; i < row_length; i++) {
        const row_val = val[i];
        const col_length = row_val.length;
        data_string += "[";

        if (col_length > 10) {
          for (let j = 0; j < 10; j++) {
            data_string += j === 9 ? `${row_val[j]}` : `${row_val[j]},`;
          }
          data_string += `.......${col_length - 10} more],`;
        } else {
          for (let j = 0; j < col_length; j++) {
            data_string +=
              j === col_length - 1 ? `${row_val[j]}` : `${row_val[j]},`;
          }
          data_string += i === row_length - 1 ? "]" : "],";
        }
      }
      data_string += "]";
    }
    return data_string;
  }

  const row_length = val.length;
  let data_string = "[";
  const count = row_length > 10 ? 10 : row_length;

  for (let i = 0; i < count; i++) {
    data_string += i === count - 1 ? `${val[i]}` : `${val[i]},`;
  }

  const diff = row_length - count;

  if (diff > 0) {
    data_string += `....${diff} more]`;
  } else {
    data_string += "]";
  }
  return data_string;
}

/**
 * Displays Danfo DataFrame/Series in a formated table
 * @param {DataFrame} df
 */
export function table(df) {
  const { col_types, series, columns, index, values } = df;
  let head = "";

  if (series) {
    head += `<th class="${col_types[0]}">${columns}</th>`;
  } else {
    columns.forEach((name, i) => {
      head += `<th class="${col_types[i]}">${name}</th>`;
    });
  }

  let body = "";
  values.forEach((row, i) => {
    let b_String = `<tr><th>${index[i]}</th>`;

    if (series) {
      b_String += `<td class="${col_types[0]}">${row}</td>`;
    } else {
      row.forEach((v, j) => {
        b_String += `<td class="${col_types[j]}">${v}</td>`;
      });
    }

    b_String += "</tr>";
    body += b_String;
  });

  // eslint-disable-next-line no-shadow
  const table = `
        <div style="overflow: auto; max-height: 300px;"><table class="df-table" border="1">
        <thead>
            <tr>
            <th></th>
            ${head}
            </tr>
        </thead>
        <tbody>
            ${body}
        </tbody>
        </table>
        </div>
    `;
  return table;
}

export const downLoad_notebook = (state) => {
  const data = JSON.stringify(state.cells);
  const blob = new Blob([data], { type: "application/json" });
  const url = (window.URL || window.webkitURL).createObjectURL(blob);

  const link = document.createElement("a");
  const name = "Dnote-react";
  link.download = `${name}.json`;
  link.href = url;

  document.body.appendChild(link);
  link.click();
  link.remove();
};

/**
 * load package scripts via CDN into scope
 * @param {Array} array of package CDNs to load
 * @param {*} callback
 */
// eslint-disable-next-line consistent-return
const load_package = async (array, callback) => {
  cellActivity("loading", "");
  const loader = function (src, handler) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.onload = script.onreadystatechange = function () {
      script.onreadystatechange = script.onload = null;
      handler();
      cellActivity("success", "Package successfully loaded");
    };
    script.onerror = function (error) {
      cellActivity(
        "error",
        `Failed to load package ${error.path[0].src}. Check internet connection or package url`
      );
    };
    script.async = true;
    document.body.appendChild(script);
    eval(script);
  };
  (function run() {
    if (array.length !== 0) {
      loader(array.shift(), run);
    } else {
      // eslint-disable-next-line no-unused-expressions
      callback && callback();
    }
  })();
  return "done";
};

export const load_notebook = (dispatch) => {
  let fileName = null;
  const { files } = document.getElementById("import-notebook-file");
  let json_content = null;
  if (files.length > 0) {
    const content = files[0];
    const reader = new FileReader();
    reader.onload = function (t) {
      json_content = t.target.result;
      const json = JSON.parse(json_content);
      dispatch({ type: "LOAD_NOTE", payload: json });
    };
    reader.readAsText(content);
    fileName = content.name;
  }
  return fileName;
};
/**
 * Returns the id of the current cell's output div
 */
function this_div() {
  const id = `out_${window.current_cell}`;
  const rand_div_name = `random_div_${id}`;
  const html = `
      <div class="col-md-1"></div>
      <div class="col-md-9" id=${rand_div_name}>
      </div>
      <div class="col-md-2"></div>
      `;
  document.getElementById(id).innerHTML += html;
  return rand_div_name;
}

/**
 * Creates multiple divs for plotting in an output cell
 * @param {String} name of the div to create
 * @param {Function} callback
 */
// eslint-disable-next-line no-unused-vars
function viz(name, callback) {
  // utility function to enabling ploting
  // create the ploting div needed
  // eslint-disable-next-line prefer-const
  let id = `out_${window.current_cell}`;
  document.getElementById(id).innerHTML += `<div id=${name}></div>`;
  // eslint-disable-next-line no-unused-vars
  let cb = callback(name);
  console.log(cb);
  // eslint-disable-next-line no-unused-vars
}
/**
 * Helper function to load CSV data into Danfo.js Data Structure
 * @param {String} path to CSV data.
 */
// eslint-disable-next-line consistent-return
async function load_csv(path) {
  cellActivity("loading", "");
  try {
    // eslint-disable-next-line no-undef
    const df = await dfd.read_csv(path);
    cellActivity("success", "Successfully loaded csv");
    return df;
  } catch (error) {
    cellActivity(
      "error",
      "Failed to load csv. Check your internet connection or your csv path"
    );
  }
}

/**
 * Helper function to easily log output from for loops in Dom
 * @param {*} args
 */
function forLoop_log(args) {
  const id = `#out_${window.current_cell}`;
  document.getElementById(id).append(`${args}<br />`);
}

console.forlog = forLoop_log;

export const makeGlobal = () => {
  window.print_val = print_val;
  window.table = table;
  window.load_package = load_package;
  window.load_csv = load_csv;
  window.this_div = this_div;
  window.viz = viz;
};
