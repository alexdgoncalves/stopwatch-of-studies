import { useEffect, useState } from "react";
import { timeToSecunds } from "../../common/utils/time";
import { ITask } from "../../types/Task";
import Button from "../Button";
import Clock from "./Clock";

import style from './Stopwatch.module.scss';

interface StopwatchProps {
  selected: ITask | undefined,
  endTask: () => void
}

export default function Stopwatch({
  selected,
  endTask
}: StopwatchProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) setTime(timeToSecunds(selected.time));
  }, [selected]);

  function regressive(time: number = 0) {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
        return regressive(time - 1);
      }
      endTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>

      <Button
        onClick={() => regressive(time)}
      >
        Iniciar
      </Button>
    </div>
  )
}