import React, { useContext } from 'react';
import { Toast } from 'react-bootstrap'
import RouteWithProps from './helper/RouteWithProps'
import routes from '../routes'
import { UserCourseAllotmentContext } from '../context'

const Container = () => {
    const [{ }, { }, { }, { showToast, setShowToast, toastMessage, setToastMessage }] = useContext(UserCourseAllotmentContext)
    return routes.map((route, i) => {

        return <>
            <RouteWithProps key={i} route={route} />
            <div style={{
                position: 'absolute',
                top: 70,
                right: 20,
            }}>
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </div>
        </>
    })
}

export default Container;