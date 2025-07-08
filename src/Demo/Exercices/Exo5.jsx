// Exo5.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Exo5task } from "./Exo5task";
import styles from "./Exo5.module.css";

export const Exo5 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { priority: "" },
  });

  const priorities = ["low", "mid", "high"];
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Faire la vaisselle 🚰",
      description: "Faire la vaisselle tous les jours",
      priority: priorities[1],
      completed: false,
    },
  ]);

  const addTask = (data) => {
    const tabId = tasks.map((t) => t.id);
    data.id = Math.max(...tabId, 0) + 1;
    setTasks((prev) => [...prev, data]);
  };

  const toggleCompleted = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className={styles["exo5-container"]}>
      {/* Formulaire à gauche */}
      <div className={styles["task-form"]}>
        <h2>Ajouter une tâche</h2>
        <form onSubmit={handleSubmit(addTask)}>
          <div>
            <label htmlFor="name">Nom</label>
            <input
              id="name"
              type="text"
              {...register("name", { required: true, maxLength: 150 })}
            />
            {errors.name?.type === "required" && (
              <span>Ce champ est requis</span>
            )}
            {errors.name?.type === "maxLength" && (
              <span>Maximum 150 caractères</span>
            )}
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              rows="5"
              cols="50"
              id="description"
              {...register("description", { maxLength: 500 })}
            />
            {errors.description?.type === "maxLength" && (
              <span>Maximum 500 caractères</span>
            )}
          </div>

          <div>
            <label htmlFor="priority">Priorité</label>
            <select
              id="priority"
              {...register("priority", { required: true })}
            >
              <option value="" disabled>
                -- Choisissez une priorité --
              </option>
              {priorities.map((p) => (
                <option key={p} value={p}>
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </option>
              ))}
            </select>
            {errors.priority?.type === "required" && (
              <span>Ce champ est requis</span>
            )}
          </div>

          <input type="submit" value="Ajouter" />
        </form>
      </div>

      {/* Liste des tâches à droite */}
      <div className={styles["task-list"]}>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
              <th>Priorité</th>
              <th>Terminée</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <Exo5task
                key={task.id}
                task={task}
                onToggleCompleted={toggleCompleted}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
