import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new task"
        />
        <Button type="submit" variant="primary">
          Add
        </Button>
      </InputGroup>
    </Form>
  );
};

export default AddTodo;
