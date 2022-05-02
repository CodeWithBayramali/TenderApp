import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useHistory } from "react-router-dom";

const Navi = () => {
  const [userName, setUserName] = useState();
  const location = useLocation();
  const history = useHistory();
  const logOut = () => {
    localStorage.removeItem("user");
    setUserName(null);
    document.location.reload(true)
  };

  useEffect(() => {
    if (localStorage.getItem("user") && !userName) {
      setUserName(JSON.parse(localStorage.getItem("user")));
    }
  }, [location, userName]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="text-white" to="/">
            Tender App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {!userName ? (
              <>
                <Nav.Link className="text-success" href="#deets">
                  <Link className="text-success" to="/register">
                    Register
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey={2} className="text-info" href="#memes">
                  <Link className="text-info" to="/login">
                    Login
                  </Link>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link className="text-success" href="#deets">
                 {
                   userName.data.username ==="admin" ?  <Link className="text-success" to="/adminpage">
                   {userName.data.username}
                 </Link>:
                 <Link>{userName.data.username}</Link>
                 }
                </Nav.Link>
                <Nav.Link eventKey={2} className="text-info">
                  <Button style={{ padding: 0 }} onClick={() => logOut()} className="text-danger">
                    <ExitToAppIcon sx={{ color: "red" }} />
                  </Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navi;
