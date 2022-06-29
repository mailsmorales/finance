import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { getCollection } from "../../hooks/useCollection";
import styles from "./Home.module.css";

const TransactionList = () => {
  const { user } = useAuthContext();
  const { documents } = getCollection("transactions", user.uid);
  return (
    <ul className={styles.transactions}>
      {documents.length > 0 &&
        documents.map((transaction) => {
          return (
            <li key={transaction.id}>
              <p className={styles.name}>{transaction.title}</p>
              <p className={styles.amount}>${transaction.amount}</p>
              <button>Delete</button>
            </li>
          );
        })}
    </ul>
  );
};

export default TransactionList;
