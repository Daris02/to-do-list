import React, { useState } from "react";
import Add from "./pages/Add";
import Home from "./pages/Home";
import ListFinish from "./pages/ListFinish";

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, title: "Task", description: `description ...`, status: "start" },
  ]);

  return (
    <>
      <div className="container my-2">
        <h2>Dashboard</h2>
        <main className="mt-5">
          <div className="row d-flex justify-content-center gy-5">
            <div className="col-6 col-md-2">
              <Add tasks={tasks} setTasks={setTasks} />
            </div>
            <div className="col-6 col-md-6 mx-5">
              <Home tasks={tasks} setTasks={setTasks} />
            </div>
            <div className="col-6 col-md-2">
              <ListFinish tasks={tasks} setTasks={setTasks} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
