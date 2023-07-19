import React, { useContext } from 'react';
import { UserContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(UserContext);
    if (loader) {
        return (
            <div className='mt-32'>
                <Loader></Loader>
            </div>
        )
    }

    if (user && user.uid) {
        return children
    }
    return (
        <Navigate to="/login">
        </Navigate>
    );
};

export default PrivateRoute;