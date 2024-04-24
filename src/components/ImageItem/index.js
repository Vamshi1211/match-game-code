import './index.css'

const ImageItem = props => {
  const {eachImageItem, thumbnailClicked} = props
  const {thumbnailUrl, id} = eachImageItem

  const onThumbnailClicked = () => {
    thumbnailClicked(id)
  }

  return (
    <li className="list-item-container">
      <button
        type="button"
        className="images-button"
        onClick={onThumbnailClicked}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ImageItem
