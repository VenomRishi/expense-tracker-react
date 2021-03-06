import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 1, title: 'Banana', amount: 20, date: new Date(2022, 0, 1) },
  { id: 2, title: 'Eggs', amount: 70, date: new Date(2022, 0, 1) },
  { id: 3, title: 'Book', amount: 140, date: new Date(2022, 0, 1) },
  { id: 4, title: 'Pen', amount: 10, date: new Date(2021, 11, 1) },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpense => [expense, ...prevExpense]));
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}  />
    </div>
  );
}

export default App;
