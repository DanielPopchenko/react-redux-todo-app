import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from './components/Layout/Layout';
import { AppBar } from './components/AppBar/AppBar';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskList } from './components/TaskList/TaskList';

import { addTask } from './store/TaskSlice';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({ text }));

    setText('');
  };

  return (
    <Layout>
      <AppBar></AppBar>
      <TaskForm
        handleAddTask={handleAddTask}
        text={text}
        handleInputChange={setText}
      ></TaskForm>
      <TaskList />
    </Layout>
  );
}

export default App;
