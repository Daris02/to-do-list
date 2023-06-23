import React, { useState } from "react";
import Add from "./pages/Add";
import Home from "./pages/Home";
import ListFinish from "./pages/ListFinish";

function App() {
  const [tasks, setTasks] = useState([])
  const [taskF, setTaskF] = useState([])

  return (
    <>
      <h2 className="container-fluid bg-primary text-white p-3">To Do List</h2>
      <div className="container my-2">
        <main className="mt-5">
          <div className="row d-flex justify-content-center gy-5">
            <div className="col-6 col-md-2">
              <Add tasks={tasks} setTasks={setTasks} />
            </div>
            <div className="col-6 col-md-6 mx-5">
              <Home tasks={tasks} setTasks={setTasks} taskF={taskF} setTaskF={setTaskF} />
            </div>
            <div className="col-6 col-md-2">
              <ListFinish tasks={tasks} taskF={taskF} setTasks={setTasks} setTaskF={setTaskF} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
