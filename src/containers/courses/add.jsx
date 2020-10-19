import React, {useContext} from 'react';
import { withRouter } from "react-router-dom";
import Form from '../../components/courses/form'
import { UserCourseAllotmentContext } from '../../context'

const Add = (props) => {
    const [{},{ getCourses,  addCourse }] = useContext(UserCourseAllotmentContext)

    const onSubmit = (course) => {
        addCourse(course)
        console.log(getCourses())
        props.history.push('/courses/list')
    }

    return <Form onSubmit={onSubmit} />

}

export default withRouter(Add);