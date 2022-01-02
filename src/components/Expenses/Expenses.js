import React, { useState } from 'react';
import ExpenseFilter from './ExpensesFilter';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expenseContent = <p>No expenses found.</p>;

    if(filteredExpenses.length > 0 ) {
        expenseContent = filteredExpenses.map(expense =>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;