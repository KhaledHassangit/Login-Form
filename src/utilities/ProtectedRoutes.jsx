import { Navigate, Outlet } from 'react-router'


// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({auth,children}) => {


    if(auth === false)
    {
        return <Navigate to="/" replace />
    }

    return  children ? children :  <Outlet/>

}

export default ProtectedRoutes
