import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from 'react';
import Login from './Login';
import './NavBar.css';
import {useNavigate} from 'react-router-dom';  
import {useSelector} from 'react-redux';
function NavBar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  let [isLoggedIn,setIsLoggedIn] = useState(false);
  let [userName, setUserName] = useState('')
  let navigate = useNavigate()
  const{ products }= useSelector((state) => state.cart)
  useEffect(() => {
    let flag = localStorage.getItem('isLoggedIn')
    if(flag) {
      setIsLoggedIn(true)
      setUserName(localStorage.getItem('name'))
    }
  },[])

  const goForLogin = () => {
    setShowLoginModal(true);
  };

  const closeLogin = () => {
    setShowLoginModal(false);
  };
function goToCartPage() {
 navigate('/cart')
}
  return (
    <>
      <Navbar expand="lg" className="book-navbar" sticky="top">
        <Container>

          {/* Brand */}
          <Navbar.Brand href="#home" className="book-brand">
            <div className="brand-icon">
              📚
            </div>

            <div className="brand-text">
              <span className="brand-main">Book</span>
              <span className="brand-highlight">Store</span>
            </div>
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle
            aria-controls="book-navbar"
            className="custom-toggler"
          />

          <Navbar.Collapse id="book-navbar">

            {/* Navigation */}
            <Nav className="mx-auto book-nav">

              <Nav.Link href="/">
                Home
              </Nav.Link>

              <Nav.Link href="#b">
                Books
              </Nav.Link>

              <Nav.Link href="#categories">
                Categories
              </Nav.Link>

              <Nav.Link href="#about">
                About
              </Nav.Link>

              <Nav.Link href="#contact">
                Contact
              </Nav.Link>

            </Nav>
          <Nav.Link className='text-black' onClick={goToCartPage} style={{position:'relative'}} >
               <i className="bi bi-cart"></i>
               {
                products.length > 0 && <Badge 
                bg="danger"
                pill
                style = {{
                  porition:'absolute',
                  top:'-2px',
                  right:'-3.0px',
                  fontSize: '0.7rem'
                }}
                >
                  {products.length }
                </Badge> 
               }
              </Nav.Link>
            {/* Login */}
            <div className="login-wrapper">
              {isLoggedIn && <span>welcome {userName}</span>}
              {isLoggedIn && <Button variant='danger' className="login-btn" onClick={closeLogin} > Logout </Button>}
              
             {!isLoggedIn && <Button className="login-btn"  onClick={goForLogin} > Login</Button>}
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showLoginModal && (
        <Login onClose={closeLogin} />
      )}
    </>
  );
}

export default NavBar;