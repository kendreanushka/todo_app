import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!taskName.trim() || !date || !time) {
      return; // simple guard against empty submissions
    }

    onAddTask({
      taskName: taskName.trim(),
      date,
      time,
    });

    // reset the form
    setTaskName("");
    setDate("");
    setTime("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="taskName">Task name</label>
        <input
          id="taskName"
          type="text"
          placeholder="e.g. Finish assignment"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
      </div>

      <button type="submit" className="btn-primary">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;