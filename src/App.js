import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import React, { useState } from 'react';

function App() {
  const[ inputText, setInputText] = useState("");
  
  return (
    <div className="App">
      <header>
      <h1>Mike's Todo </h1>
      </header>

      <Form />
      <TodoList />

    </div>
  );
}

export default App;
