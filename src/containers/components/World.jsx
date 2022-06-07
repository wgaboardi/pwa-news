import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { createMarkup } from '../../utils'
import { useNavigate } from 'react-router-dom'

function World({ values }) {
  const history = useNavigate()

  const renderImg = ({ image, description }) =>
    <img src={image.url} alt={description} width="100%"></img>

  //  const renderDescription = (description) => <p dangerouslySetInnerHTML={createMarkup(description)} />

  const openPost = (id) => {
    history(`/world/${id}`)
  }

  const renderPost = (post, index) => {
    const { title, image, description, id } = post
    const isFirst = index === 0
    const spanValue = isFirst ? 24 : 12
    return (
      <Col span={spanValue} key={`World-${index}`}>
        <article onClick={() => openPost(id)}>
          <p>
            <strong dangerouslySetInnerHTML={createMarkup(title)} />
          </p>
          {isFirst && renderImg({ image, description })}
        </article>
      </Col>
    )
  }

  return (
    <Row gutter={[16, 16]}>
      {values?.map(renderPost)}
    </Row>
  )
}

World.defaultProps = {
  values: []
}

World.propTypes = {
  values: PropTypes.array.isRequired
}


export default memo(World)