import React, { useState, createContext } from 'react'

export const UserCourseAllotmentContext = createContext();


export const UserCourseAllotmentProvider = props => {

    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('Changes saved!')


    let userIndexCounter = 1;
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Prabhjot Singh',
            contactNumber: '8130070874',
            email: 'prabh@live.in',
            collegeName: 'Amity University',
            graduationYear: '2018'
        },

        {
            id: 2,
            name: 'Biswa',
            contactNumber: '8130070874',
            email: 'prabh@live.in',
            collegeName: 'Amity University',
            graduationYear: '2018'
        },

        {
            id: 3,
            name: 'Saurabh',
            contactNumber: '8130070874',
            email: 'prabh@live.in',
            collegeName: 'Amity University',
            graduationYear: '2018'
        },

        {
            id: 4,
            name: 'Shawn',
            contactNumber: '8130070874',
            email: 'prabh@live.in',
            collegeName: 'Amity University',
            graduationYear: '2018'
        },

        {
            id: 5,
            name: 'Nikki',
            contactNumber: '8130070874',
            email: 'prabh@live.in',
            collegeName: 'Amity University',
            graduationYear: '2018'
        },

    ]);

    const getUser = (id) => users.find(item => item.id == id)

    const getUsers = () => users

    const addUser = (user) => {
        user.id = ++userIndexCounter;
        setUsers(prev => ([...prev, user]))
        setToastMessage('New user added')
        setShowToast(true);

    }

    const editUser = (user) => {
        let index = users.findIndex(item => item.id == user.id)
        const tempUsers = users
        tempUsers[index] = user
        setUsers(tempUsers)
        setToastMessage('Saved changes.')
        setShowToast(true);
    }

    const deleteUser = (id) => {
        let index = users.findIndex(item => item.id == id)
        const tempUsers = users
        tempUsers.splice(index, 1)
        setUsers(tempUsers)
        setToastMessage('User deleted')
        setShowToast(true);
    }

    let courseIndexCounter = 1;
    const [courses, setCourses] = useState([
        {
            id: 1,
            name: 'BCA',
            courseDuration: 3,
            courseFees: 600000,
            courseStartingDate: '2020-07-01'
        },
        {
            id: 2,
            name: 'MCA',
            courseDuration: 3,
            courseFees: 600000,
            courseStartingDate: '2020-07-01'
        },
        {
            id: 3,
            name: 'PHD',
            courseDuration: 3,
            courseFees: 600000,
            courseStartingDate: '2020-07-01'
        },
        {
            id: 4,
            name: 'BSC',
            courseDuration: 3,
            courseFees: 600000,
            courseStartingDate: '2020-07-01'
        },
        {
            id: 5,
            name: 'MSC',
            courseDuration: 3,
            courseFees: 600000,
            courseStartingDate: '2020-07-01'
        },
    ]);


    const getCourse = (id) => courses.find(item => item.id == id)

    const getCourses = () => courses

    const addCourse = (course) => {
        course.id = ++courseIndexCounter;
        setCourses(prev => ([...prev, course]))
        setToastMessage('New course added')
        setShowToast(true);
    }

    const editCourse = (course) => {
        let index = courses.findIndex(item => item.id == course.id)
        const tempCourses = courses
        tempCourses[index] = course
        setCourses(tempCourses)
        setToastMessage('Saved changes.')
        setShowToast(true);
    }

    const deleteCourse = (id) => {
        let index = courses.findIndex(item => item.id == id)
        const tempCourses = courses
        tempCourses.splice(index, 1)
        setCourses(tempCourses)
        setToastMessage('Course deleted')
        setShowToast(true);
    }

    let allotmentIndexCounter = 2;
    const [allotment, setAllotment] = useState([{
        id: 1,
        userId: 1,
        courseId: 1
    },
    {
        id: 2,
        userId: 1,
        courseId: 2
    },
    ])

    const getAllotment = () => allotment
    const setAllotmentOnUser = (userId, courseArr) => {
        let temp = allotment.filter(item => item.userId !== userId)
        courseArr = courseArr.map(courseId => ({ id: ++allotmentIndexCounter, userId, courseId }))
        temp = temp.concat(courseArr)
        setAllotment(temp);
        setToastMessage('Saved changes.')
        setShowToast(true);
    }

    return (
        <UserCourseAllotmentContext.Provider value={[{ getUser, getUsers, addUser, editUser, deleteUser },
        { getCourse, getCourses, addCourse, editCourse, deleteCourse },
        { getAllotment, setAllotmentOnUser }, { showToast, setShowToast, toastMessage, setToastMessage }]}>
            {props.children}
        </UserCourseAllotmentContext.Provider>
    )
}