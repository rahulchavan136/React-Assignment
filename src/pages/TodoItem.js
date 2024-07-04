import React, { useState } from 'react';
import { ListGroup, Form, Button, InputGroup } from 'react-bootstrap';

const TodoItem = ({ todo, editTodo, deleteTodo, toggleCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newTitle);
    setIsEditing(false);
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <Form.Check
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompletion(todo.id)}
      />
      {isEditing ? (
        <InputGroup>
          <Form.Control
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
        </InputGroup>
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </span>
          <div>
            <Button variant="warning" className="me-2" onClick={handleEdit}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => deleteTodo(todo.id)}>
              Delete
            </Button>
          </div>
        </>
      )}
    </ListGroup.Item>
  );
};

export default TodoItem;
