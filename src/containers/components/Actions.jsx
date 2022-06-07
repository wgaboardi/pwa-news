import { memo } from 'react'
import ShareIcon from '../../images/share.svg'
import CopyIcon from '../../images/copy.svg'

const navigatorHasShare = navigator.share

const URL = 'http://localhost:3001'

function Actions({ post, subject }) {
  const { id, title } = post

  const ShareInfo = () => {
    navigator.share({
      title: `PWA News - ${subject}`,
      text: title,
      url: URL
    })
  }

  const CopyInfo = () => {
    navigator.clipboard.writeText(`${title} - * learn more about in* ${URL}/${subject}/${id}`)
  }

  const renderActions = () => {
    const action = navigatorHasShare ? ShareInfo : CopyInfo
    const icon = navigatorHasShare ? ShareIcon : CopyIcon

    return <img alt="icon" src={icon} className="share-icon" onClick={action} />
  }

  return (
    <div className="share">
      {renderActions()}
    </div>
  )
}

export default memo(Actions)