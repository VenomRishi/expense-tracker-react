import ExpenseItem from "./ExpenseItem";

function ExpenseItems() {
    const expenses = [
        { id: 1, title: 'Banana', amount: 20, date: new Date(2022, 0, 1) },
        { id: 2, title: 'Eggs', amount: 70, date: new Date(2022, 0, 1) },
        { id: 3, title: 'Book', amount: 140, date: new Date(2022, 0, 1) },
        { id: 4, title: 'Pen', amount: 10, date: new Date(2021, 11, 1) },
    ]
    return (<div>
        <ExpenseItem
            title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date} />
        <ExpenseItem
            title={expenses[1].title}
            amount={expenses[1].amount}
            date={expenses[1].date} />
        <ExpenseItem
            title={expenses[2].title}
            amount={expenses[2].amount}
            date={expenses[2].date} />
        <ExpenseItem
            title={expenses[3].title}
            amount={expenses[3].amount}
            date={expenses[3].date} />

    </div>)
}

export default ExpenseItems;