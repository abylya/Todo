import { useEffect, useRef, useState } from "react";
import { TodoList } from "./TodoLIst";
import "./styles/main.css";
import { ITodo } from "./data";

export const Main: React.FC = () => {
  const [tasks, setTasks] = useState<ITodo[]>([]);
  const [inpText, setInpText] = useState("");
  const tasksHandl: React.ChangeEventHandler<HTMLInputElement> = (ev): void => {
    let val = ev.target.value;
    setInpText(val);
  };

  const taskHandl = (): void => {
    if (inpText) {
      setTasks((prev) => {
        return [
          ...prev,
          {
            id: Date.now(),
            title: inpText,
            flag: false,
          },
        ];
      });
      setInpText("");
    }
  };
  const inpRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inpRef.current) inpRef.current.focus();
  }, []);
  const keyDownHandl: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ): void => {
    if (inpText) {
      if (event.key === "Enter") taskHandl();
    }
  };
  const delitTodo = (id: number): void => {
    setTasks((prev) => {
      return prev.filter((item) => id !== item.id);
    });
  };

  const toggleTodo = (id: number): void => {
    setTasks(
      tasks.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          flag: !item.flag,
        };
      })
    );
  };
  return (
    <div className="main">
      <h1>My-Todo</h1>
      <div className="addTodo">
        <input
          value={inpText}
          type="text"
          name="addTask"
          id="addTask"
          onChange={tasksHandl}
          onKeyDown={keyDownHandl}
          ref={inpRef}
        />
        <button type="button" onClick={taskHandl}>
          Дабавить задачу
        </button>
      </div>
      <TodoList
        arrTodo={tasks}
        delitTodo={delitTodo}
        toggleTodo={toggleTodo}
      ></TodoList>
    </div>
  );
};
