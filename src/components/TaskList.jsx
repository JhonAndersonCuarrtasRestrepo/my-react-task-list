import Task from "./Task";

function TaskList() {
  const tasks = [
    { id: 1, 
      name: "Aprender Ingles",
      completed: true },
    { id: 2,
      name: "Aprender React",
      completed: true },
    { id: 3,
      name: "Aprender JavasCript",
      completed: true },
  ];

  return (
    <div className='contentFather'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
