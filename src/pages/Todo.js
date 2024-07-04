import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    const newTodo = { id: Date.now(), title, completed: false };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, newTitle) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="8">
          <Card>
            <Card.Body>
              <h1 className="text-center mb-4">Todo List</h1>
              <AddTodo addTodo={addTodo} />
              <TodoList
                todos={todos}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                toggleCompletion={toggleCompletion}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Todo;
