import { Navigate } from 'react-router-dom';
import { useValue } from '../contex'

const ProtectedRoute = ({ children }) => {
    const{setuser,test,setTest}=useValue()
    if (!test) return <Navigate to="/login" replace={true} />;
    return children;
  };
export default ProtectedRoute