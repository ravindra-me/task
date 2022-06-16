import { useState } from "react";
import { v4 } from "uuid";
import "../style/modal.css";
const initialState = { name: "", role: "" };
function Modal(props) {
  const { handleCloseModal, handleAddUser } = props;
  const [userDetail, setUserDetail] = useState(initialState);
  return (
    <div className="modal">
      <section className="flex justify-between modal-container">
        <article className="modal-left-side">
          <div className="image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-isrJPv5mfYZNKCR0gojwyU5GWPafXsRFSw&usqp=CAU" />
          </div>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual.
          </p>
        </article>
        <div className="modal-right-side">
          <h2 className="primary-heading">User Information</h2>
          <form
            action=""
            onSubmit={() => {
              handleAddUser({ id: v4(), ...userDetail });
            }}
          >
            <div className=" input-label-container flex flex-column">
              <label className="label">User Name</label>
              <input
                value={userDetail.name}
                placeholder="Please enter name"
                onChange={(event) => {
                  console.log(event.target.value);
                  setUserDetail({
                    ...userDetail,
                    name: event.target.value,
                  });
                }}
                className="width-100"
                required
              />
            </div>
            <div className="input-label-container flex flex-column">
              <label className=" label">Role</label>
              <select
                name="role"
                id="role"
                onChange={(event) => {
                  setUserDetail({
                    ...userDetail,
                    role: event.target.value,
                  });
                }}
                required
              >
                <option value=""></option>
                <option value="admin">admin</option>
                <option value="user">user</option>
                <option value="sales">sales</option>
              </select>
            </div>
            <section className="flex justify-flex-end button-container">
              <button className="primary-btn" onClick={handleCloseModal}>
                cancel
              </button>
              <button
                className="secondary-btn"
                onClick={() => {
                  handleAddUser({ id: v4(), ...userDetail });
                  setUserDetail(initialState);
                }}
                type="submit"
                disabled={userDetail.name && userDetail.role ? false : true}
                style={{
                  opacity: `${userDetail.name && userDetail.role ? 1 : 0.5}`,
                }}
              >
                Add
              </button>
            </section>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Modal;
