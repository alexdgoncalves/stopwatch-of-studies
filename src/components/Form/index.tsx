import { useState } from "react";
import Button from "../Button";
import style from './Form.module.scss';
import { ITask } from "../../types/Task";

import { v4 as uuidv4 } from 'uuid';

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function Form({ setTasks }: FormProps) {

  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks(oldTasks =>
      [
        ...oldTasks,
        {
          task,
          time,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ]
    );
    setTask('');
    setTime('00:00');
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          value={task}
          onChange={event => setTask(event.target.value)}
          type="text"
          name="task"
          id="task"
          placeholder="Oque deseja estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">
          Tempo
        </label>
        <input
          value={time}
          onChange={event => setTime(event.target.value)}
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          required />
      </div>

      <Button
        type="submit"
      >
        Adicionar
      </Button>
    </form>
  )
}
