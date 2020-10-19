import React, {useContext} from 'react';
import { withRouter } from "react-router-dom";
import Form from '../../components/users/form'
import { UserCourseAllotmentContext } from '../../context'

const Add = (props) => {
    const [{ addUser }] = useContext(UserCourseAllotmentContext)

    const onSubmit = (user) => {
        addUser(user)
        props.history.push('/users/list')
    }

    return <Form onSubmit={onSubmit} />

}

export default withRouter(Add);