import { useState } from 'react';
import Form from '../Form';
import List from '../List';
import Stopwatch from '../Stopwatch';
import style from './App.module.scss';
import { ITask } from '../../types/Task';

function App() {
  const [task, setTask] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selecteTask(taskSelected: ITask) {
    setSelected(taskSelected);

    setTask(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id
    })));
  };

  function endTask() {
    if (selected) {
      setSelected(undefined);
      setTask(oldTasks =>
        oldTasks.map(task => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            }
          }
          return task;
        }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTask} />
      <List
        tasks={task}
        selectTask={selecteTask}
      />
      <Stopwatch
        selected={selected}
        endTask={endTask}
      />
    </div>
  );
}

export default App;
