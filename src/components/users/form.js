import React, { useState } from 'react';
import { emailRegex } from '../../constants'

const AddUser = (props) => {

    let id = props.detail ? props.detail.id : null;
    const [name, setName] = useState({ value: props.detail ? props.detail.name : '', error: '' });
    const [contactNumber, setContactNumber] = useState({ value: props.detail ? props.detail.contactNumber : '', error: '' });
    const [email, setEmail] = useState({ value: props.detail ? props.detail.email : '', error: '' });
    const [collegeName, setCollegeName] = useState({ value: props.detail ? props.detail.collegeName : '', error: '' });
    const [graduationYear, setGraduationYear] = useState({ value: props.detail ? props.detail.graduationYear : '', error: '' });

    const updateUserName = (e) => {
        const value = e.target.value
        if (value.length < 5)
            setName({ value, error: 'Name should have 5 or more characters.' })
        else
            setName({ value, error: '' })
    }

    const updateContactNumber = (e) => {
        const value = e.target.value;
        if (value.length != 10)
            setContactNumber({ value, error: 'Contact number should have 10 digits.' })
        else
            setContactNumber({ value, error: '' })
    }

    const updateEmail = (e) => {
        const value = e.target.value
        if (emailRegex.test(value))
            setEmail({ value, error: '' })
        else
            setEmail({ value, error: 'Invalid e-mail address.' })
    }

    const updateCollegeName = (e) => {
        const value = e.target.value
        if (value.length < 5)
            setCollegeName({ value, error: 'College Name should have 5 or more characters.' })
        else
            setCollegeName({ value, error: '' })
    }

    const updateGraduationYear = (e) => {
        const value = e.target.value;
        if (value.length != 4)
            setGraduationYear({ value, error: 'Graduation year should have 4 digits.' })
        else
            setGraduationYear({ ...graduationYear, value, error: '' })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            id,
            name: name.value,
            contactNumber: contactNumber.value,
            email: email.value,
            collegeName: collegeName.value,
            graduationYear: graduationYear.value
        }
        if (validate())
            props.onSubmit(obj)
    }

    const validate = () => {
        let status = true;
        if (name.error.length > 0)
            status = false
        if (contactNumber.error.length > 0)
            status = false
        if (email.error.length > 0)
            status = false
        if (collegeName.error.length > 0)
            status = false
        if (graduationYear.error.length > 0)
            status = false

        return status;
    }

    return (
        <form onSubmit={onSubmit} >
            <div className="form-group">
                <label>Name</label>
                <input className={`form-control`} onChange={updateUserName} value={name.value} />
                <div><small className="text-danger">{name.error}</small></div>
            </div>

            <div className="form-group mt-3">
                <label>Contact Number</label>
                <input type="number" className={`form-control`} onChange={updateContactNumber} value={contactNumber.value} />
                <div><small className="text-danger">{contactNumber.error}</small></div>
            </div>

            <div className="form-group mt-3">
                <label>Email</label>
                <input className={`form-control`} onChange={updateEmail} value={email.value} />
                <div><small className="text-danger">{email.error}</small></div>
            </div>

            <div className="form-group mt-3">
                <label>College Name</label>
                <input className={`form-control`} onChange={updateCollegeName} value={collegeName.value} />
                <div><small className="text-danger">{collegeName.error}</small></div>
            </div>

            <div className="form-group mt-3">
                <label>Graduation Year</label>
                <input type="number" className={`form-control`} onChange={updateGraduationYear} value={graduationYear.value} />
                <div><small className="text-danger">{graduationYear.error}</small></div>
            </div>
            <button className="btn btn-primary mt-2" type="submit">Submit</button>
        </form>
    )



}

export default AddUser;