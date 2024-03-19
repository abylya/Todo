import { ITodo } from "./data";
import "./styles/item.css";
interface IItem extends ITodo {
  delitTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}
export const TodoItem: React.FC<IItem> = (props) => {
  const { id, title, flag, delitTodo, toggleTodo } = props;
  return (
    <li className="item">
      <input
        type="checkbox"
        name="flag"
        id="flag"
        checked={flag}
        onChange={() => {
          toggleTodo(id);
        }}
      />
      <span style={{ fontWeight: 900 }}>{title}</span>
      <button
        type="button"
        onClick={() => {
          delitTodo(id);
        }}
      >
        Удалить
      </button>
    </li>
  );
};
