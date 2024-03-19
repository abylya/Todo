import { TodoItem } from "./TodoItem";
import "./styles/list.css";
import { ITodo } from "./data";

interface ITodoProps {
  arrTodo: ITodo[];
  delitTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoList: React.FC<ITodoProps> = (props) => {
  const { arrTodo, delitTodo, toggleTodo } = props;
  if (arrTodo.length === 0)
    return <p style={{ fontWeight: 900, marginBottom: "10px" }}>Нет задач</p>;

  return (
    <ul className="list">
      {props.arrTodo.map((ob) => (
        <TodoItem
          key={ob.id}
          delitTodo={delitTodo}
          toggleTodo={toggleTodo}
          {...ob}
        ></TodoItem>
      ))}
    </ul>
  );
};
