import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { id: 1, title: 'Banana', amount: 20, date: new Date(2022, 0, 1) },
    { id: 2, title: 'Eggs', amount: 70, date: new Date(2022, 0, 1) },
    { id: 3, title: 'Book', amount: 140, date: new Date(2022, 0, 1) },
    { id: 4, title: 'Pen', amount: 10, date: new Date(2021, 11, 1) },
]
  return (
    <div className="App">
      <h2>Let's get started</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
