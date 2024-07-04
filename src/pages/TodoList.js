import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './TodoItem';

const TodoList = ({ todos, editTodo, deleteTodo, toggleCompletion }) => {
  return (
    <ListGroup>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
