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
export const load_package = (array, callback) => {
  try {
    // document.getElementById("cell-running").style.display = "block";
    const loader = function (src, handler) {
      const script = document.createElement("script");
      console.log(src);
      script.type = "text/javascript";
      script.src = src;
      const a = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest";
      console.log(a);
      script.onload = script.onreadystatechange = function () {
        script.onreadystatechange = script.onload = null;
        handler();
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
      // document.getElementById("cell-running").style.display = "none";
    })();
  } catch (error) {
    console.log(error);
  }
};

export const load_notebook = (dispatch) => {
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
  }
};

/**
 * Helper function to load CSV data into Danfo.js Data Structure
 * @param {String} path to CSV data.
 */
async function load_csv(path) {
  // eslint-disable-next-line no-undef
  const df = await dfd.read_csv(path);
  return df;
}

export const makeGlobal = () => {
  window.print_val = print_val;
  window.table = table;
  window.load_package = load_package;
  window.load_csv = load_csv;
};
