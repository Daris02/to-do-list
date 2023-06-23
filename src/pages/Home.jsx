import React from "react";
import Task from "../components/Task";
import cancelButton from "../asset/cancelButton.ico"

export default function Home({ tasks, setTasks, taskF, setTaskF }) {
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

  const handleFinish = (id) => {
    const newTask = tasks.find((task) => task.id == id);
    setTaskF(taskF => [...taskF, newTask]);
    
    const tasksCopy = [...tasks].filter((task) => task.id != id);
    setTasks(tasksCopy);
  };

  return (
    <div className="home">
      <h4 className="text-bold text-center mx-auto">All task</h4>
      <div className="mx-auto">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col align-items-center my-3">
            <h5 className="mx-auto border rounded-2">Start</h5>
            <div className="d-flex flex-column gap-2 w-100 mx-auto">
              {tasks
                .filter((t) => t.status == "start")
                .reverse()
                .map((task) => (
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
            <h5 className="mx-auto border rounded-2">Onloading</h5>
            <div className="App d-flex flex-column gap-2 w-100 mx-auto">
              {tasks
                .filter((t) => t.status == "onloading")
                .reverse()
                .map((task) => (
                  <div className="card p-1 opacity" key={task.id}>
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
            <h5 className="mx-auto border rounded-2">Finished</h5>
            <div className="App d-flex flex-column gap-2 w-100 mx-auto">
              {tasks
                .filter((t) => t.status == "finished")
                .reverse()
                .map((task) => (
                  <div className="card p-1 opacity" key={task.id}>
                      <img src={cancelButton} alt="cancelButton" className="button position-absolute top-0 end-0" onClick={() => handleFinish(task.id)} />
                    <Task
                      key={task.id}
                      title={task.title}
                      description={task.description}
                    />
                    <div className="card-footer">
                      <button
                        className="btn btn-warning text-white"
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
