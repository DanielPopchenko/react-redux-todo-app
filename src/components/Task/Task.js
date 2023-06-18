import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { removeTask, toggleTaskCompleted } from '../../store/TaskSlice';

export const Task = ({ id, completed, text }) => {
  const dispatch = useDispatch();

  const handleRemoveTask = () => dispatch(removeTask({ id }));
  const handleToggleTaskCompleted = () => dispatch(toggleTaskCompleted({ id }));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={completed}
        onChange={handleToggleTaskCompleted}
      />

      <p className={css.text}>{text}</p>

      {/* Диспетчер, вызови наш экшен и передай в него айди */}
      <button className={css.btn} onClick={handleRemoveTask}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
