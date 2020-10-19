import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Form from "../../components/users/form";
import { UserCourseAllotmentContext } from "../../context";

const Edit = (props) => {
  const { id } = props.match.params;
  const [{ getUsers, editUser }] = useContext(UserCourseAllotmentContext);
  const user = getUsers()[id]

  const onSubmit = (user) => {
    editUser(user)
    props.history.push('/users/list')
  };

  return <Form detail={user} onSubmit={onSubmit} />;
};

export default withRouter(Edit);
