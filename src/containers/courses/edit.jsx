import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Form from "../../components/courses/form";
import { UserCourseAllotmentContext } from "../../context";

const Edit = (props) => {
  const { id } = props.match.params;
  const [ {}, {getCourses, editCourse}] = useContext(UserCourseAllotmentContext);
  const user = getCourses()[id]

  const onSubmit = (user) => {
    editCourse(user)
    props.history.push('/courses/list')
  };

  return <Form detail={user} onSubmit={onSubmit} />;
};

export default withRouter(Edit);
