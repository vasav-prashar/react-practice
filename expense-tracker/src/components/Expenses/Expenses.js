import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export default function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState('2020');
  const selectedYearHandler=(year)=>{
    setFilteredYear(year);
  }
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSelectedYear={selectedYearHandler}/>
        <ExpenseItem
          description={props.items[0].title}
          price={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          description={props.items[1].title}
          price={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          description={props.items[2].title}
          price={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          description={props.items[3].title}
          price={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </>
  );
}
