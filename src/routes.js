import AddUser from './containers/users/add'
import ListUsers from './containers/users/list'
import EditUsers from './containers/users/edit'
import AddCourse from './containers/courses/add'
import ListCourses from './containers/courses/list'
import EditCourse from './containers/courses/edit'
import AllotmentContainer from './containers/allotment'

const routes = [
    {
        path: '/users/add',
        name: 'add-user',
        component: AddUser
    },
    {
        path: '/users/list',
        name: 'list-users',
        component: ListUsers
    },
    {
        path: '/users/edit/:id',
        name: 'edit-users',
        component: EditUsers
    },
    {
        path: '/courses/add',
        name: 'add-course',
        component: AddCourse
    },
    {
        path: '/courses/list',
        name: 'list-courses',
        component: ListCourses
    },
    {
        path: '/courses/edit/:id',
        name: 'edit-courses',
        component: EditCourse
    },
    {
        path: '/allotment',
        name: 'allotment',
        component: AllotmentContainer
    }
]

export default routes;