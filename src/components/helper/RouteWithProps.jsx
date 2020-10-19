import React from 'react';
import { Route } from 'react-router-dom';
const RouteWithprops = (props) => {
  return(
    <Route
      path={props.route.path}
      render={rest => (
        <div className="card shadow rounded p-3 mt-5"><props.route.component {...props} {...rest} /></div>
      )}
    />
  )
}
export default RouteWithprops;