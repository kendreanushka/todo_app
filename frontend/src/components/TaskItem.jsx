function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <label className="task-checkbox-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`Mark "${task.taskName}" as ${
            task.completed ? "incomplete" : "complete"
          }`}
        />
      </label>

      <div className="task-info">
        <p className="task-name">{task.taskName}</p>
        <div className="task-meta">
          <span>{task.date}</span>
          <span className="dot">•</span>
          <span>{task.time}</span>
        </div>
      </div>

      <button
        className="btn-delete"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete task "${task.taskName}"`}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;