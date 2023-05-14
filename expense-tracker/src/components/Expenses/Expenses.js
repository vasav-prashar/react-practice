import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const selectedYearHandler = (year) => {
    setFilteredYear(year);
  };
  const filterExpenses=props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  })

  
  
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectedYear={selectedYearHandler}
        />
        {/* {filterExpenses.length===0&&<p>Nothing here</p>}// absuing */}
        <ExpensesChart expenses={filterExpenses}/>
        <ExpensesList items={filterExpenses}/>
      </Card>
    </>
  );
}
