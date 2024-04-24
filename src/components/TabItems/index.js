import './index.css'

const TabItems = props => {
  const {eachTabItem, isActive, clickTabItem} = props
  const {tabId, displayText} = eachTabItem

  const onClickTab = () => {
    clickTabItem(tabId)
  }

  const activeTabBackgroundClass = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`${activeTabBackgroundClass} tab-btn`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItems
