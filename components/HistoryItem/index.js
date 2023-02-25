import './index.css'

const HistoryItem = props => {
  const {historyItemList, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItemList
  const onClickDeleteItem = () => {
    deleteHistoryItem(id)
  }
  return (
    <li className="history-list">
      <div className="history-logos">
        <p className="logo-time">{timeAccessed}</p>
        <img className="logo-image" alt="domain logo" src={logoUrl} />
        <p className="logo-title">{title}</p>
        <p className="logo-url">{domainUrl}</p>
      </div>
      <br />
      <button
        type="button"
        data-testid="delete"
        className="delete-button"
        onClick={onClickDeleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
