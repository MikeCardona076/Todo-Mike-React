import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import React, { useState } from 'react';

function App() {
  const[ inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  
  return (
    <div className="App">
      <header>
      <h1>Mike's Todo { setInputText } </h1>
      </header>

      <Form 
        inputText = {inputText}
        todos = {todos}
        setTodos={setTodos} 
        setInputText={setInputText}
      />
      <TodoList todos={todos} />

    </div>
  );
}

export default App;
