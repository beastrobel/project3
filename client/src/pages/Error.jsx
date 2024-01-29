import './Error.css';
import { Link } from "react-router-dom";

function Error () {

    return(
        <>
        <div className="background">
            <div className="error">
                <h1>The page you are looking for can't be found.</h1>
                <Link to="/"><button className="errorBtn">Back</button></Link>
            </div>
        </div>
        </>
    );
}

export default Error;