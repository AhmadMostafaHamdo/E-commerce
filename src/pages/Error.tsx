import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import "@styles/error.css";
const Error = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorstatusText: string;
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorstatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorstatusText = "Not Found";
  }
  return (
    <div className="error">
      <div className="error-content">
        <h1>Error</h1>
        <p>
          {" "}
          {errorstatusText} {errorStatus}
        </p>
        <Link to="/" replace={true} target="_blank">
          How about going back to saftey ? 
        </Link>
      </div>
    </div>
  );
};

export default Error;
