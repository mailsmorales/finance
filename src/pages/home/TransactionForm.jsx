import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

export const TransactionForm = () => {
  const { addDocument, response } = useCollection();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [title, amount] = e.target.elements;
    // console.log(title.value, amount.value);
    // console.log(user);
    await addDocument({
      userId: user.uid,
      title: title.value,
      amount: Number(amount.value),
    });

    title.value = "";
    amount.value = "";
  };

  // useEffect(() => {
  //   if (response.success) {
  //     setName("");
  //     setAmount("");
  //   }
  //   // console.log(response);
  // }, [response.success]);

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input name="title" type="text" required maxLength={100} />
        </label>
        <label>
          <span>Amount ($):</span>
          <input name="amount" type="number" required maxLength={50} />
        </label>
        {!response.isPending && <button>Add Transaction</button>}
        {response.isPending && <button disabled>is Loading...</button>}
      </form>
    </>
  );
};
