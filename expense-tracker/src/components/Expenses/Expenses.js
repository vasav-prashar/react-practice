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
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectedYear={selectedYearHandler}
        />

        {props.items.filter(item=>{
            return item.date.getFullYear().toString()===filteredYear
          }).map((expense) => (
          
          <ExpenseItem
            key={expense.id} // always use key 
            description={expense.title}
            price={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  );
}
