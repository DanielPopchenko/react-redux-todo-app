import { Button } from '../Button/Button';
import css from './TaskForm.module.css';
import React from 'react';

export const TaskForm = ({ handleAddTask, text, handleInputChange }) => {
  return (
    <div className={css.form}>
      <input
        className={css.field}
        type="text"
        name="text"
        value={text}
        placeholder="Enter task text..."
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <Button type="button" onClick={handleAddTask}>
        Add task
      </Button>
    </div>
  );
};
