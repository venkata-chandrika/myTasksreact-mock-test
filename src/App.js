import {Component} from 'react'

import {v4} from 'uuid'

import TabsList from './component/TabsList'

import TasksList from './component/TasksList'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    taskInput: '',
    tagInput: tagsList[0].optionId,
    optionId: '',
    taskTagList: [],
  }

  addTask = event => {
    event.preventDefault()
    const {taskInput, tagInput} = this.state
    const newTaskTag = {
      id: v4(),
      task: taskInput,
      tag: tagInput,
    }
    // console.log(taskInput, tagInput)
    if (taskInput.length !== 0) {
      this.setState(preState => ({
        taskTagList: [...preState.taskTagList, newTaskTag],
        tagInput: tagsList[0].optionId,
        taskInput: '',
      }))
    }
  }

  onChangeInput = event => {
    this.setState({taskInput: event.target.value})
    // console.log(event.target.value)
  }

  onChangeOption = event => {
    this.setState({tagInput: event.target.value})
    // console.log(event.target.value)
  }

  changeActiveTabId = optionId => {
    // console.log(optionId)
    this.setState(prevState => ({
      optionId: prevState.optionId === optionId ? '' : optionId,
    }))
  }

  render() {
    const {taskInput, optionId, taskTagList} = this.state
    const filteredList =
      optionId === ''
        ? taskTagList
        : taskTagList.filter(eachTag => eachTag.tag === optionId)
    // console.log(filteredList)
    return (
      <div className="container">
        <form onSubmit={this.addTask} className="form">
          <h1 className="task-heading">Create A Task!</h1>
          <label htmlFor="inputTask" className="label">
            Task
          </label>

          <input
            type="text"
            id="inputTask"
            placeholder="Enter the task here"
            value={taskInput}
            className="input"
            onChange={this.onChangeInput}
          />

          <label htmlFor="tag" className="label">
            Tags
          </label>

          <select
            id="tag"
            className="input"
            value={optionId}
            onChange={this.onChangeOption}
          >
            {tagsList.map(eachOption => (
              <option key={eachOption.optionId} value={eachOption.optionId}>
                {eachOption.displayText}
              </option>
            ))}
          </select>

          <button type="submit" className="task-btn">
            Add Task
          </button>
        </form>
        <div className="tasks-view-container">
          <h1 className="tag">Tags</h1>
          <ul className="tabs-container">
            {tagsList.map(eachTag => (
              <TabsList
                eachTagDetails={eachTag}
                key={eachTag.optionId}
                isActive={eachTag.optionId === optionId}
                changeActiveTabId={this.changeActiveTabId}
              />
            ))}
          </ul>

          <h1 className="tag">Tasks</h1>
          <ul>
            {taskTagList.length === 0 ? (
              <p className="no-task">No Tasks Added Yet</p>
            ) : (
              filteredList.map(eachList => (
                <TasksList key={eachList.id} taskDetails={eachList} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
