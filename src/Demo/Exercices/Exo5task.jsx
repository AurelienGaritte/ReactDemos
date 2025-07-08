
export const Exo5task = ({ task, onToggleCompleted }) => {
  return (
    <tr>
      <td>{task.name}</td>
      <td>{task.description}</td>
      <td>{task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</td>
      <td>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompleted(task.id)}
        />
      </td>
    </tr>
  );
};
