import { useEffect, useState } from 'react';
import './App.css';

const API_BASE = "http://localhost:3001/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    completed: false
  });

  // Cargar tareas al iniciar
  useEffect(() => {
    fetchTasks();
  }, []);

  // Obtener todas las tareas
  const fetchTasks = () => {
    fetch(API_BASE)
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  };

  // Crear una nueva tarea
  const createTask = (e) => {
    e.preventDefault();
    fetch(API_BASE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...newTask,
        completed: newTask.completed ? 1 : 0
      })
    })
    .then(response => response.json())
    .then(data => {
      setNewTask({ title: '', description: '', completed: false });
      fetchTasks(); // Recargar la lista
    })
    .catch(error => console.error('Error creating task:', error));
  };

  // Actualizar una tarea
  const updateTask = (e) => {
    e.preventDefault();
    fetch(`${API_BASE}/${editingTask.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: editingTask.title,
        description: editingTask.description,
        completed: editingTask.completed ? 1 : 0
      })
    })
    .then(response => response.json())
    .then(data => {
      setEditingTask(null);
      fetchTasks(); // Recargar la lista
    })
    .catch(error => console.error('Error updating task:', error));
  };

  // Eliminar una tarea
  const deleteTask = (id) => {
    fetch(`${API_BASE}/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        fetchTasks(); // Recargar la lista
      }
    })
    .catch(error => console.error('Error deleting task:', error));
  };

  // Manejar cambios en el formulario de nueva tarea
  const handleNewTaskChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTask(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Manejar cambios en el formulario de edición
  const handleEditTaskChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditingTask(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Gestor de Tareas</h1>
        <p>Administra tus tareas de forma eficiente</p>
      </header>

      <div className="content-wrapper">
        {/* Formulario para crear tarea */}
        <section className="form-section">
          <h2>{editingTask ? 'Editar Tarea' : 'Crear Nueva Tarea'}</h2>
          <form onSubmit={editingTask ? updateTask : createTask} className="task-form">
            <div className="form-group">
              <label htmlFor="title">Título:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={editingTask ? editingTask.title : newTask.title}
                onChange={editingTask ? handleEditTaskChange : handleNewTaskChange}
                required
                placeholder="Escribe el título de la tarea"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Descripción:</label>
              <textarea
                id="description"
                name="description"
                value={editingTask ? editingTask.description : newTask.description}
                onChange={editingTask ? handleEditTaskChange : handleNewTaskChange}
                placeholder="Describe los detalles de la tarea"
                rows="3"
              />
            </div>

            <div className="form-group checkbox-group">
              <label htmlFor="completed">
                <input
                  type="checkbox"
                  id="completed"
                  name="completed"
                  checked={editingTask ? editingTask.completed : newTask.completed}
                  onChange={editingTask ? handleEditTaskChange : handleNewTaskChange}
                />
                Completada
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                {editingTask ? 'Actualizar' : 'Crear'} Tarea
              </button>
              {editingTask && (
                <button 
                  type="button" 
                  className="btn-secondary"
                  onClick={() => setEditingTask(null)}
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </section>

        {/* Lista de tareas */}
        <section className="tasks-section">
          <h2>Lista de Tareas ({tasks.length})</h2>
          
          {tasks.length === 0 ? (
            <div className="empty-state">
              <p>No hay tareas registradas</p>
              <p>¡Crea tu primera tarea usando el formulario!</p>
            </div>
          ) : (
            <div className="tasks-grid">
              {tasks.map(task => (
                <div key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
                  <div className="task-content">
                    <h3>{task.title}</h3>
                    <p>{task.description || 'Sin descripción'}</p>
                    <div className="task-status">
                      Estado: {task.completed ? 'Completada' : 'Pendiente'}
                    </div>
                  </div>
                  <div className="task-actions">
                    <button 
                      onClick={() => setEditingTask({
                        ...task,
                        completed: task.completed === 1
                      })}
                      className="btn-edit"
                    >
                      Editar
                    </button>
                    <button 
                      onClick={() => deleteTask(task.id)}
                      className="btn-delete"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;