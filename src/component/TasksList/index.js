import './index.css'

const TasksList = props => {
  const {taskDetails} = props
  const {task, tag} = taskDetails
  //   console.log(taskDetails)

  return (
    <li className="task-container">
      <div className="task-tag-container">
        <p className="no-task">{task}</p>
        <button type="button" className="option-tag">
          {tag}
        </button>
      </div>
    </li>
  )
}
export default TasksList
