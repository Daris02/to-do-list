import React from 'react'

export default function ListFinish({ taskF }) {
  return (
    <div>
    <h4 className='text-center'>List Finished</h4>
    <div className='d-flex inline'>
      {taskF.map((task) => <p className='text-center' key={task.id}>{task.title} : {task.description}</p>)}
    </div>
  </div>
  )
}
