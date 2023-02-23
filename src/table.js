import React from "react";

function Table({ tableData, onDeleteRow }) {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">Page No</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Title</th>
          <th scope="col">PDF</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index, Title) => (
          <tr key={index}>
            <td>{data.pageno}</td>
            <td>{data.date}</td>
            <td>{data.time}</td>
            <td>{data.Title}</td>
            <td>
              <td>
                <a href={data.pdf} target="_blank" rel="noreferrer">
                  {data.pdf.split("/").pop()}
                </a>
              </td>
            </td>
            <td>
              <button onClick={() => onDeleteRow(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
