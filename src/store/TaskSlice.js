import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    filter: {
      status: 'all',
    },
  },

  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => action.payload.id !== task.id);
    },
    toggleTaskCompleted(state, action) {
      const toggledTask = state.tasks.find((task) => task.id === action.payload.id);
      toggledTask.completed = !toggledTask.completed;
    },

    getTaskId(state, action) {
      const getVisibleTasks = (tasks, statusFilter) => {
        switch (statusFilter) {
          case statusFilter.active:
            return tasks.filter((task) => !task.comleted);
          case statusFilter.comleted:
            return tasks.filter((task) => task.comleted);
          default:
            return tasks;
        }
      };
    },
  },
});

// ! ---- Обьект, который содержит имя, экшены и еще что-то ----
console.log('taskSlice: ', taskSlice);
// ! ---- Это объект с нашими функциями редьюсерами ----
console.log('taskSlice.actions: ', taskSlice.actions);

export const { addTask, removeTask, toggleTaskCompleted, changleFilter } = taskSlice.actions;

export default taskSlice.reducer;
