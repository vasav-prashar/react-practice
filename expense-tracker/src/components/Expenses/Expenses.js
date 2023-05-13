import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const selectedYearHandler = (year) => {
    setFilteredYear(year);
  };
  const filterExpenses=props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  })

  let expenseContent=<p>Nothing To Show</p>// conditional content
  if(filterExpenses.length>0){
    expenseContent=filterExpenses
    .map((expense) => (
      <ExpenseItem
        key={expense.id} // always use key
        description={expense.title}
        price={expense.amount}
        date={expense.date}
      />
    ))}
  
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectedYear={selectedYearHandler}
        />
        {/* {filterExpenses.length===0&&<p>Nothing here</p>}// absuing */}

        {expenseContent}
      </Card>
    </>
  );
}
