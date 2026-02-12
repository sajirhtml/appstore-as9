import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRouter = ({children}) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation();

    if(loading){
        return <Loading />;
    }
    if(user && user.email){
    return children;
    }
    return <Navigate to="/auth/login" state={location.pathname}></Navigate>;
};

export default PrivateRouter;