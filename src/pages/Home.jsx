import React from 'react';
import Task from '../components/Task';

export default function Home({ tasks, setTasks }) {
    const taskStart = [];
    for (let task of tasks) {
      task.status == "start" ? taskStart.push(task) : undefined;
    }
  
    const taskEnCours = [];
    for (let task of tasks) {
      task.status == "onloading" ? taskEnCours.push(task) : undefined;
    }
  
    const taskFinished = [];
    for (let task of tasks) {
      task.status == "finished" ? taskFinished.push(task) : undefined;
    }
  
    const handleStart = (id) => {
      const tasksCopy = [...tasks];
      tasksCopy.map((task) =>
        task.id == id ? (task.status = "onloading") : undefined
      );
      setTasks(tasksCopy);
    };
  
    const handleCancel = (id) => {
      const tasksCopy = [...tasks];
      tasksCopy.map((task) =>
        task.id == id ? (task.status = "start") : undefined
      );
      setTasks(tasksCopy);
    };
  
    const handleEnd = (id) => {
      const tasksCopy = [...tasks];
      tasksCopy.map((task) =>
        task.id == id ? (task.status = "finished") : undefined
      );
      setTasks(tasksCopy);
    };
  
  return (
    <div className="home">
      <h4 className="text-bold text-center mx-auto">All task</h4>
      <div className="mx-auto">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col align-items-center my-3">
            <h5 className="mx-auto border rounded-2">
              Start
            </h5>
            <div className="d-flex flex-column gap-2 w-100 mx-auto">
              {taskStart.reverse().map((task) => (
                <div className="card p-1 opacity" key={task.id}>
                  <Task
                    key={task.id}
                    title={task.title}
                    description={task.description}
                  />
                  <div className="card-footer">
                    <button
                      className="btn btn-warning text-white"
                      onClick={() => handleStart(task.id)}
                    >
                      start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col align-items-center my-3">
            <h5 className="mx-auto border rounded-2">
              Onloading
            </h5>
            <div className="App d-flex flex-column gap-2 w-100 mx-auto">
              {taskEnCours.reverse().map((task) => (
                <div className="card p-1 opacity">
                  <Task
                    key={task.id}
                    title={task.title}
                    description={task.description}
                  />
                  <div className="card-footer d-flex justify-content-between">
                    <button
                      className="btn btn-danger text-white"
                      onClick={() => handleCancel(task.id)}
                    >
                      remove
                    </button>
                    <button
                      className="btn btn-success text-white"
                      onClick={() => handleEnd(task.id)}
                    >
                      finish
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col align-items-center my-3">
            <h5 className="mx-auto border rounded-2">
              Finished
            </h5>
            <div className="App d-flex flex-column gap-2 w-100 mx-auto">
              {taskFinished.reverse().map((task) => (
                <div className="card p-1 opacity">
                  <Task
                    key={task.id}
                    title={task.title}
                    description={task.description}
                  />
                  <div className="card-footer">
                    <button
                      className="btn btn-danger text-white"
                      onClick={() => handleCancel(task.id)}
                    >
                      cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
