import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../store/constants';
import { changleFilter } from '../../store/TaskSlice';

export const StatusFilter = () => {
  // const filter = useSelector((state) => state.filter.status);
  const filter = useSelector((state) => state.tasks.filter.status);
  const dispatch = useDispatch();

  console.log(filter);

  // const activeFilter = statusFilters.active;
  // const allFilter = statusFilters.all;
  // const completedFilter = statusFilters.completed;

  return (
    <div className={css.wrapper}>
      <Button
      // selected={filter === statusFilters.all}
      // onClick={dispatch(changleFilter({ allFilter }))}
      >
        All
      </Button>
      <Button
      // selected={filter === statusFilters.active}
      // onClick={dispatch(changleFilter({ activeFilter }))}
      >
        Active
      </Button>
      <Button
      // selected={filter === statusFilters.completed}
      // onClick={dispatch(changleFilter({ completedFilter }))}
      >
        Completed
      </Button>
    </div>
  );
};
