import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  // instead of three states we can use on state with having an object
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  // now in handler function we can do like its up to you we use spread operator to get the values and then update the state to make sure data will not lost
  //   const titleHandler = (event) => {
  //     console.log(event);
  //     setUserInput({
  //         ...userInput,
  //         title:event.target.value;
  //     });
  //   };

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleHandler = (event) => {
    console.log(event);
    setTitle(event.target.value);
  };
  const amountHandler = (event) => {
    console.log(event);
    setAmount(event.target.value);
  };
  const dateHandler = (event) => {
    console.log(event);
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault(); // to make page not reload
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');    
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={date}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
