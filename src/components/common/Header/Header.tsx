import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import HeaderCounter from "./HeaderCounter/HeaderCounter";
import CartSvg from "@assets/svg/cart.svg?react";
import WishlistCartSvg from "@assets/svg/wishlist.svg?react";
import { useAppSelector } from "@store/hooks";
import { getTotalQuantity } from "@store/cart/selectors/getTotalQuantitySelectors";
const { headerContainer, headerLogo, iconsWrapped } = styles;
const Header = () => {
  const cartTotalQuantity = useAppSelector(getTotalQuantity);
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );

  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span style={{ marginRight: "8px" }}>our</span>
          <Badge>Ecom</Badge>
        </h1>
        <div className={iconsWrapped}>
          <HeaderCounter
            svgImg={<WishlistCartSvg />}
            title="wishlist"
            totalQuantity={wishlistTotalQuantity}
            to="/wishlist"
          />
          <HeaderCounter
            svgImg={<CartSvg />}
            title="Cart"
            totalQuantity={cartTotalQuantity}
            to="/cart"
          />
        </div>
      </div>
      {/* basket */}
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about-us">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register">
                Registeer
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
