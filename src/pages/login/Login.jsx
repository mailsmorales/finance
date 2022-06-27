import React from "react";
import styles from "./Login.module.css";

export const Login = () => {
  return (
    <form className={styles['login-form']}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input type="email" />
      </label>
      <label>
        <span>Password:</span>
        <input type="password" />
      </label>
      <button className="btn">Login</button>
    </form>
  );
};
