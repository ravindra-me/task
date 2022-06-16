import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Modal from "./Modal";
import Table from "./Table";
import "../style/setting.css";
const initialState = [
  {
    id: v4(),
    name: "RavindrA Singh",
    role: "Admin",
  },
];
function Setting() {
  const [tableData, setTableData] = useState(initialState);
  const [count, setCount] = useState(1);

  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify([...tableData]));
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddUser = (data) => {
    localStorage.setItem("tableData", JSON.stringify([...tableData, data]));
    setTableData(() => [...tableData, data]);
    handleCloseModal(false);
  };

  const handleDeleteUser = (id) => {
    const filterTableData = tableData.filter((item) => item.id !== id);
    localStorage.setItem("tableData", JSON.stringify(filterTableData));
    setTableData(filterTableData);
  };

  return (
    <>
      <div className="relative setting-container">
        <div>
          <button className="add-user" onClick={() => handleOpenModal()}>
            Add user
          </button>
          <div className="table-container">
            <Table
              data={tableData}
              handleDeleteUser={handleDeleteUser}
              count={count}
            />
            <div className="pagination">
              <span
                onClick={() => {
                  if (count >= 1) {
                    setCount(count - 1);
                  }
                }}
              >
                Previous
              </span>
              <div className="pages">
                <span className="page-btn">{count}</span>
              </div>
              <span onClick={() => setCount(count + 1)}>Next</span>
            </div>
          </div>
        </div>
        {openModal && (
          <Modal
            handleCloseModal={handleCloseModal}
            handleAddUser={handleAddUser}
          />
        )}
      </div>
    </>
  );
}

export default Setting;
