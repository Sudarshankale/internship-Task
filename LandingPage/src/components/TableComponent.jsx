import React from "react";
import "./TableComponent.css";


const TableComponent = ({data}) => {
  return (
    <div className="container mt-4">
      <table className="table table-bordered table-hover DataTable">
        <thead className="table-light">
          <tr>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">
              <span
                className="text-danger me-1"
                style={{ fontSize: "1.2rem", verticalAlign: "middle" }}
              >
                &#8226;
              </span>
              Language
            </th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, gender, language, email }, idx) => (
            <tr key={idx} className={idx % 2 === 1 ? "table-secondary" : ""}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{name}</td>
              <td>{gender}</td>
              <td>{language}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
