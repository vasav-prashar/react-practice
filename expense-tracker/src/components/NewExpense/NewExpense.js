import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [click, setClick] = useState(0);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //bottom up data
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setClick(0);
    // console.log(expenseData);
  };
  function addingExpenseHandler() {
    setClick(1);
  }
  function stopEditingHandler() {
    setClick(0);
  }
  return (
    <div className="new-expense">
      {click === 0 && (
        <button onClick={addingExpenseHandler}>Add New Expense</button>
      )}
      {click === 1 && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
