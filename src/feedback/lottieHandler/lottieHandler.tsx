import Lottie from "lottie-react";
import notFound from "@assets/lottieFiles/Animation - 1746442225389.json";
import emptyCart from "@assets/lottieFiles/emptyCart.json";
import emptyProduct from "@assets/lottieFiles/emptyProducts.json";
import emptyWishlist from "@assets/lottieFiles/emptyWishlist.json";
import networkError from "@assets/lottieFiles/networkError.json";
import pageLoading from "@assets/lottieFiles/pageLoading.json";
import { Container } from "react-bootstrap";
const lottieFiles = {
  notFound,
  emptyCart,
  emptyProduct,
  emptyWishlist,
  networkError,
  pageLoading,
};
type LottieHandlerProps = {
  type: keyof typeof lottieFiles;
  message: string;
};
const LottieHandler = ({ type, message }: LottieHandlerProps) => {
  const lottie = lottieFiles[type];
  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <Lottie
          animationData={lottie}
          loop={true}
          style={{ width: "40vw", height: "40vh" }}
        />
        <h3 style={{ color: "#7f6868",fontWeight:"500", fontSize: "20px" }}>{message}</h3>
      </div>
    </Container>
  );
};
export default LottieHandler;
