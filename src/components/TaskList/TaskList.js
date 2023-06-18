import { Task } from '../Task/Task';
import { useSelector } from 'react-redux';
import css from './TaskList.module.css';

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilter.active:
//       return tasks.filter((task) => !task.comleted);
//     case statusFilter.comleted:
//       return tasks.filter((task) => task.comleted);
//     default:
//       return tasks;
//   }
// };

export const TaskList = () => {
  // ! useSelector нужен для того чтобы достать какую то сущность (массив, объект итд)
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task {...task} />
        </li>
      ))}
    </ul>
  );
};
