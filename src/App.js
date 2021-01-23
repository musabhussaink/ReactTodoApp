import logo from './logo.svg';
import './App.css';
import Form from './Components/form';
import TodoList from "./Components/todoListDetails";

function App() {
  return (
    <div className="App">
      <h1>What's the Plan for Today?</h1>
      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;
