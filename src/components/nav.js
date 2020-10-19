import React from 'react'
import {withRouter} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'

const Navbar = (props) => {

    //this is done to prevent the context from resetting after dropdown item being clicked
    const handleClick = (e) => {
        e.preventDefault();
        props.history.push(e.target.dataset.url)
    }

    return (<div className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container-fluid d-flex justify-content-center">
            <ul className="navbar-nav nav">
                <li className="nav-item">
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" >Users</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleClick} data-url="/users/add" >Add User</Dropdown.Item>
                            <Dropdown.Item onClick={handleClick} data-url="/users/list" >List Users</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li className="nav-item ml-1">
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" >Courses</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleClick} data-url="/courses/add">Add Course</Dropdown.Item>
                            <Dropdown.Item onClick={handleClick} data-url="/courses/list">List Courses</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li className="nav-item ml-1">
                    <a className="nav-link btn btn-dark" onClick={handleClick} data-url="/allotment">Allotment</a>
                </li>
            </ul>
        </div>

    </div>)
}

export default withRouter(Navbar);