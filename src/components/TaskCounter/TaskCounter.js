import styles from './TaskCounter.module.css';
import { useSelector } from 'react-redux';

export const TaskCounter = () => {
  const tasks = useSelector((store) => store.tasks.tasks);

  // ! Аналог
  // const completedTasksQuantity = tasks.filter((task) => task.completed);
  // const activeTasksQuantity = tasks.filter((task) => !task.completed);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 },
  );

  console.log(count);

  return (
    <div>
      <p className={styles.text}>Active: {count.active}</p>
      <p className={styles.text}>Completed: {count.completed}</p>
    </div>
  );
};
