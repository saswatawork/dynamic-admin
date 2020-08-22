import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "components/atoms/Button";
import { StateContext } from "components/utils/stateContext";
import "./Header.scss";

const Header = () => {
  const { isLoggedIn, setLoginStatus } = useContext(StateContext);

  const handleLogout = () => {
    setLoginStatus(false);
    localStorage.clear();
  };

  return (
    <header className="main-header">
      <div className="logo main-header__item">
        <Link to="/">Logo</Link>
      </div>

      {isLoggedIn && (
        <ul className="header-right-panel main-header__item">
          <li>
            <Button onClick={handleLogout}>Logout</Button>
          </li>
        </ul>
      )}

      {!isLoggedIn && (
        <ul className="header-right-panel main-header__item">
          <li>
            <span className="pr-1">No Account?</span>
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
