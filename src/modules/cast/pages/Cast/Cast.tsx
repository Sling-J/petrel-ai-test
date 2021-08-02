import React, { FC, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

import { Col, Row, Spin, Typography } from 'antd'
import { Content, Wrapper } from 'ui'

import { Navigation } from 'src/components/navigation'
import { CastCard } from 'src/components/castCard'
import { showDetailsNavItems } from 'lib/utils'

import { CastType, ShowType } from 'src/modules/shows/types'

const { Title } = Typography

interface MatchParams {
  showId: string
}

interface CastProps {
  getShowCast: (id: string) => void
  getShowDetails: (id: string) => void
  cast: CastType[]
  details: ShowType
  loadingOfCast: boolean
}

const Cast: FC<CastProps> = ({
  getShowCast,
  getShowDetails,
  cast,
  details,
  loadingOfCast
}) => {
  const match = useRouteMatch<MatchParams>()
  const showId = match.params.showId

  useEffect(() => {
    getShowCast(showId)
    getShowDetails(showId)
  }, [])

  return (
    <Wrapper>
      <Title level={2}>
        {details?.name} - Cast
      </Title>

      <Navigation
        activeKey='cast'
        navItems={showDetailsNavItems(showId)}
      />

      <Content>
        <Spin spinning={loadingOfCast}>
          <Row gutter={[16, 16]}>
            {cast.length !== 0 && cast.map((castItem, idx) => (
              <Col span={6} key={idx}>
                <CastCard
                  imageUrl={castItem.character.image?.medium}
                  character={castItem.character.name}
                  name={castItem.person.name}
                />
              </Col>
            ))}
          </Row>
        </Spin>
      </Content>
    </Wrapper>
  )
}

export default Cast
