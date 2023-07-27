import './index.css'

const TabsList = props => {
  const {eachTagDetails, isActive, changeActiveTabId} = props
  const {optionId, displayText} = eachTagDetails
  const isActiveTab = isActive ? 'tag-btn active' : 'tag-btn'

  const changeActiveTab = () => {
    changeActiveTabId(optionId)
  }
  return (
    <li className="tab-list-item">
      <button type="button" className={isActiveTab} onClick={changeActiveTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabsList
