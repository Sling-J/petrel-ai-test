import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import { Button, Col, Row, Typography } from 'antd'
import { Box } from 'ui'

import { CastCard } from 'src/components/castCard'

import { CastType } from 'src/modules/shows/types'

const { Title } = Typography

interface CastListProps {
  cast: CastType[]
  showId: string
}

const CastList: FC<CastListProps> = ({ cast, showId }) => {
  const history = useHistory()

  return (
    <>
      <Title level={2}>
        Cast
      </Title>

      <Row gutter={[16, 16]}>
        {cast.slice(0, 6).map((castItem, idx) => (
          <Col span={8} key={idx}>
            <CastCard
              imageUrl={castItem.character.image?.medium}
              character={castItem.character.name}
              name={castItem.person.name}
            />
          </Col>
        ))}
      </Row>

      <Box mt='16px'>
        <Button type='primary' onClick={() => {
          history.push(`/shows/${showId}/cast`)
        }}>
          View full cast list »
        </Button>
      </Box>
    </>
  )
}

export default CastList
