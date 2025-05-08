import { Link } from "react-router-dom";
import LottieHandler from "src/feedback/lottieHandler/lottieHandler";
const Error = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <LottieHandler type="notFound" message="This Page Not Found" />;
      <Link to="/" replace={true} target="_blank">
        How about going back to saftey ?
      </Link>
    </div>
  );
};
export default Error;
