import React, { useContext, useState } from "react";
import { UserCourseAllotmentContext } from "../../context";

const AllotmentContainer = () => {
  const [{ getUsers }, { getCourses }, {getAllotment, setAllotmentOnUser}] = useContext(UserCourseAllotmentContext);

  const [selectedUser, setSelectedUser] = useState(0)
  const [selectedCourses, setSelectedCourses] = useState([])
  const users = getUsers();
  const courses = getCourses();

  const handleUserSelect = (e) => {
      const value = parseInt(e.target.value)
      setSelectedUser(value)
      const tempAllotment = getAllotment().filter(item => item.userId == value)
      let selCourses = tempAllotment.map(item => item.courseId)
      setSelectedCourses(selCourses)
  }

  const handleCourseSelect = (e) => {
    const value = parseInt(e.target.value)
    const checked = e.target.checked;

    if(checked)
    {
      const selection = [...selectedCourses, value]
      setSelectedCourses(selection)
    }
    else
    {
      const selection = selectedCourses.filter(item => item != value)
      setSelectedCourses(selection)
    }
  }

  const handleSave = () => {
    setAllotmentOnUser(selectedUser, selectedCourses)
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <ul className="list-group">
          {users.map((item, index) => {
            return (
              <li key={index} className="list-group-item">
                <input name="user" value={item.id} checked={item.id == selectedUser} onChange={handleUserSelect} type="radio" className="form-check-input mr-3" /> {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-md-6">
        <ul className="list-group">
          {courses.map((item, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex align-items-center"
              >
                <input name="course" checked={selectedCourses.includes(item.id)} 
                value={item.id} onChange={handleCourseSelect} type="checkbox" 
                className="form-check-input mr-3" />
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-md-12">
        <button className="btn btn-primary mt-3 w-25 float-right" onClick={handleSave}>Allot</button>
      </div>
    </div>
  );
};

export default AllotmentContainer;
