 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons'
import '../components/style/Estilos.css';

function Task({ task }) {
  return (
    <div>
      <label>
        <div className='taskComponent'>
        <input type="checkbox" checked={task.completed} />
        {task.name}
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
        </div>
      </label>
    </div>
  );
}
export default Task;