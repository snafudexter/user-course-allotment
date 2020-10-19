import React, {useContext, useState} from 'react';
import List from '../../components/users/list'
import Modal from '../../components/modal'
import { UserCourseAllotmentContext } from '../../context'

const ListContainer = () => {
    const [{ getUsers, deleteUser }] = useContext(UserCourseAllotmentContext)

    const [showModal, setShowModal] = useState(false)
    const [selection, setSelection] = useState(null);

    const handleDelete = (id) => {
        setSelection(id)
        setShowModal(true)
    }

    const handleModalClose = () => {
        setShowModal(false)
    }

    const handleModalAccept = () => {
        deleteUser(selection)
        setShowModal(false)
    }

    return <React.Fragment>
        <List users={getUsers()} onDelete={handleDelete} />
        <Modal show={showModal} handleClose={handleModalClose} handleAccept={handleModalAccept} />
    </React.Fragment>
}

export default ListContainer;