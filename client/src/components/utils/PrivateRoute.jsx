import { Navigate } from "react-router-dom";
import Auth from "./auth";
import Dashboard from "../../pages/Dashboard";

const PrivateRoute = () => {
 
if (Auth.loggedIn()) {
    return (
    <Dashboard />
    );
    } else {
        return (
    <Navigate to="/Login" />
        );
};
};

export default PrivateRoute;