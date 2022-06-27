import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

export const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Мои финансы</li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li> hello, {user.displayName} </li>
            <li>
              <button className="btn" onClick={logout}>
                Loguot
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
