import "./Error.css";

import { Link } from "react-router-dom";

// Error component displaying a custom error page
function Error() {
  return (
    <>
      {/* Background with overlay */}
      <div className="background">
        {/* Error message container */}
        <div className="error">
          {/* Heading for the error message */}
          <h1>The page you are looking for can't be found.</h1>

          {/* Link to navigate back to the home page */}
          <Link to="/">
            <button className="errorBtn">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error;
