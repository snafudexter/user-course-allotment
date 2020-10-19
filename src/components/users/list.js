import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const UserList = (props) => {

    const { users, onDelete } = props;

    const handleDelete = (index) => {
        onDelete(index)
    }

    return (
        <table className="table table-striped table-fixed">
            <thead>
                <tr>
                    <th className="th-sm" scope="col">ID</th>
                    <th className="th-sm" scope="col">Name</th>
                    <th className="th-sm" scope="col">Contact Number</th>
                    <th className="th-sm" scope="col">Email</th>
                    <th className="th-sm" scope="col">College</th>
                    <th className="th-sm" scope="col">Year</th>
                    <th className="th-sm" scope="col">Edit</th>
                    <th className="th-sm" scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {!users.length && <tr><td className="text-center" colSpan={8}>No data found</td></tr>}
                {users.map((user, index) => {
                    return <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.contactNumber}</td>
                        <td>{user.email}</td>
                        <td>{user.collegeName}</td>
                        <td>{user.graduationYear}</td>
                        <td><Link to={`/users/edit/${index}`}><FontAwesomeIcon icon={faEdit} /></Link></td>
                        <td><a href="#" onClick={e => { e.preventDefault(); handleDelete(user.id) }} ><FontAwesomeIcon icon={faTrash} /></a></td>
                    </tr>
                })}
            </tbody>
        </table>
    )

}

export default UserList