import style from './List.module.scss';
import Item from "./Item";
import { ITask } from '../../types/Task';

interface ListProps {
  tasks: ITask[],
  selectTask: (taskSelected: ITask) => void
}

function List({ tasks, selectTask }: ListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudo do dia</h2>
      <ul>
        {tasks.map(task => (
          <Item
            selectTask={selectTask}
            key={task.id}
            {...task}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;