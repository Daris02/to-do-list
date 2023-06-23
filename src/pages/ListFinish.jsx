import React from 'react'

export default function ListFinish({ taskF }) {
  return (
    <div className="add text-center">
    <h4>List Finished</h4>
    <div>
      {taskF.map((task) => <p key={task.id}>{task.title}</p>)}
    </div>
  </div>
  )
}
