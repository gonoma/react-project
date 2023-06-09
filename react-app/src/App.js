import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import MapView from "./components/Maps/Map";

const INITIAL_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  //OLD REACT, WE STILL USE THIS FUNCTION IN THE RETURN,
  //WHICH IS WHY YOU CAN ONLY PASS ONE DIV AT A TIME.
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      {/* LIFTING STATE UP WITH NewExpense COMPONENT */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <div
        style={{
          borderRadius: 12,
          border: "10px solid purple",
          width: "75%",
          height: "75%",
          textAlign: "center",
          margin: "6rem auto",
        }}
      >
        <MapView />
      </div>
    </div>
  );
};

export default App;
