import { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "../style/table.css";

const tableHeaderData = [
  {
    id: "number",
    width: "10%",
    test: "",
  },
  {
    id: "user-name",
    width: "30%",
    test: "User Name",
  },
  {
    id: "last-sign-in",
    width: "30%",
    test: "Last Sign in",
  },
  {
    id: "role",
    width: "20%",
    test: "Role",
  },
  {
    id: "delete",
    width: "10%",
    test: "",
  },
];
function Table(props) {
  const { count } = props;

  const { handleDeleteUser } = props;

  const data = JSON.parse(localStorage.getItem("tableData"));
  let data2;

  data2 = count === 1 ? data.slice(0, 4) : data.slice(4 * count - 1, 4 * count);

  return (
    <table>
      <thead>
        <tr>
          {tableHeaderData.map((elem) => {
            return (
              <th key={elem.id} style={{ width: elem.width }}>
                {elem.test}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data2.map((row, index) => (
          <tr key={row.id}>
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>1 hour before</td>
            <td>{row.role}</td>
            <td>
              <div className="deleteIconContainer">
                <AiOutlineDelete
                  onClick={() => {
                    handleDeleteUser(row.id);
                  }}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
