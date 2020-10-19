import React, { useState } from 'react';
import { emailRegex } from '../../constants'

const AddUser = (props) => {

    let id = props.detail ? props.detail.id : null;
    const [name, setName] = useState({ value: props.detail ? props.detail.name : '', error: '' });
    const [courseDuration, setCourseDuration] = useState({ value: props.detail ? props.detail.courseDuration : '', error: '' });
    const [courseFees, setCourseFees] = useState({ value: props.detail ? props.detail.courseFees : '', error: '' });
    const [courseStartingDate, setCourseStartingDate] = useState({ value: props.detail ? props.detail.courseStartingDate : '', error: '' });

    const updateCourseName = (e) => {
        const value = e.target.value
        if (value.length < 3)
            setName({ value, error: 'Name should have 3 or more characters.' })
        else
            setName({ value, error: '' })
    }

    const updateCourseDuration = (e) => {
        const value = e.target.value;
        if (value.length == 0 || value <= 0)
            setCourseDuration({ value, error: 'Course duration should be greater than zero.' })
        else
            setCourseDuration({ value, error: '' })
    }

    const updateCourseFees = (e) => {
        const value = e.target.value
        if (value < 1000)
            setCourseFees({ value, error: 'Course Fees should be atleast Rs.1000' })
        else
            setCourseFees({ value, error: '' })
    }


    const updateCourseStartingDate = (e) => {
        const value = e.target.value;
        if (value)
            setCourseStartingDate({ value, error: '' })
        else
            setCourseStartingDate({ value, error: 'Course starting date cannot be empty.' })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            id,
            name: name.value,
            courseDuration: courseDuration.value,
            courseFees: courseFees.value,
            courseStartingDate: courseStartingDate.value,
        }
        if (validate())
            props.onSubmit(obj)
    }

    const validate = () => {

        let status = true;

        if (name.error.length > 0 || name.value.length < 3) {
            status = false;
            setName({ ...name, error: 'Name should have 3 or more characters.' })
        }
        else {
            setName({ ...name, error: '' })
        }

        if (courseDuration.error.length > 0 || courseDuration.value.length == 0 || courseDuration.value <= 0) {
            status = false;
            setCourseDuration({ ...courseDuration, error: 'Course duration should be greater than zero.' })
        } else {
            setCourseDuration({ ...courseDuration, error: '' })
        }

        if (courseFees.error.length > 0 || courseFees.value < 1000) {
            status = false;
            setCourseFees({ ...courseFees, error: 'Course Fees should be atleast Rs.1000' })
        }
        else {
            setCourseFees({ ...courseFees, error: '' })
        }

        if (courseStartingDate.error.length > 0 || courseStartingDate.value.length <= 0) {
            status = false;
            setCourseStartingDate({ ...courseStartingDate, error: 'Course starting date cannot be empty.' })
        } else {
            setCourseStartingDate({ ...courseStartingDate, error: '' })
        }

        return status;
    }

    return (
        <form onSubmit={onSubmit} >
            <div className="form-group">
                <label>Name</label>
                <input className={`form-control`} onChange={updateCourseName} value={name.value} />
                <div><small className="text-danger">{name.error}</small></div>
            </div>

            <div className="form-group mt-3">
                <label>Course Duration</label>
                <input type="number" className={`form-control`} onChange={updateCourseDuration} value={courseDuration.value} />
                <div><small className="text-danger">{courseDuration.error}</small></div>
            </div>

            <div className="form-group mt-3">
                <label>Course Fees</label>
                <input type="number" className={`form-control`} onChange={updateCourseFees} value={courseFees.value} />
                <div><small className="text-danger">{courseFees.error}</small></div>
            </div>

            <div className="form-group mt-3">
                <label>Course Starting Date</label>
                <input type="date" className={`form-control`} onChange={updateCourseStartingDate} value={courseStartingDate.value} />
                <div><small className="text-danger">{courseStartingDate.error}</small></div>
            </div>

            <button className="btn btn-primary mt-3" type="submit">Submit</button>
        </form>
    )



}

export default AddUser;