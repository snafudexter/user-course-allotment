import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const CourseList = (props) => {

    const { courses , onDelete } = props;

    const handleDelete = (index) => {
        onDelete(index)
    }

    return (
        <table className="table table-striped table-fixed">
            <thead>
                <tr>
                    <th className="th-sm" scope="col">ID</th>
                    <th className="th-sm" scope="col">Course Name</th>
                    <th className="th-sm" scope="col">Course Duration</th>
                    <th className="th-sm" scope="col">Course Fees</th>
                    <th className="th-sm" scope="col">Course Starting Date</th>
                    <th className="th-sm" scope="col">Edit</th>
                    <th className="th-sm" scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {!courses.length && <tr><td className="text-center" colSpan={8}>No data found</td></tr>}
                {courses.map((course, index) => {
                    console.log('course', course)
                    return <tr key={index}>
                        <td>{course.id}</td>
                        <td>{course.name}</td>
                        <td>{course.courseDuration}</td>
                        <td>{course.courseFees}</td>
                        <td>{course.courseStartingDate}</td>
                        <td><Link to={`/courses/edit/${index}`}><FontAwesomeIcon icon={faEdit} /></Link></td>
                        <td><a href="#" onClick={e => { e.preventDefault(); handleDelete(course.id) }} ><FontAwesomeIcon icon={faTrash} /></a></td>
                    </tr>
                })}
            </tbody>
        </table>
    )

}

export default CourseList