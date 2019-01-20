// @flow
import * as React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className={styles.header}>
      <SearchBar />
      <div className={styles.buttons}>
        <button
            className={classNames(styles.btn, styles.btnSignup)}
            onClick={() => {
              console.log("I'm the sign up button");
            }}
        >
          Sign up
        </button>
        <button
            className={styles.btn}
            onClick={() => {
              console.log("I'm the log in button");
            }}
        >
          Log in
        </button>
        <button
            className={styles.btn}
            onClick={() => {
              console.log("I'm the more button");
            }}
        >
          ...
        </button>
      </div>
    </div>
  );
}
