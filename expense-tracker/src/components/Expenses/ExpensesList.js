import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  // let expenseContent=<p>Nothing To Show</p>// conditional content
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Nothing To Show</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} // always use key
          description={expense.title}
          price={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
export default ExpensesList;
