import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { Typography, Space, Button, Spin, Row, Col } from 'antd'
import { Wrapper, Content } from 'ui'

import { ShowsCard } from 'src/components/shows'

import { ShowType } from 'src/modules/shows/types'

const { Title } = Typography

interface HomeProps {
  getShows: VoidFunction
  shows: ShowType[]
  loadingOfShows: false
}

const Home: FC<HomeProps> = ({
  getShows,
  shows,
  loadingOfShows
}) => {
  const history = useHistory()

  useEffect(() => {
    if (shows.length === 0) {
      getShows()
    }
  }, [])

  return (
    <Wrapper>
      <Title level={2}>
        Popular shown airing tonight
      </Title>

      <Content>
        <Spin spinning={loadingOfShows}>
          <Space direction='vertical' size='middle'>
            <Row gutter={8}>
              {shows.length !== 0 && shows.slice(0, 6).map(show => (
                <Col span={4} key={show.id}>
                  <ShowsCard
                    width='100%'
                    imageUrl={show.image?.medium}
                    title={show.name}
                    desc={show.network.name}
                    onClick={() => history.push(`/shows/${show.id}`)}
                  />
                </Col>
              ))}
            </Row>

            <Button type='primary' onClick={() => history.push('/shows')}>
              Show more
            </Button>
          </Space>
        </Spin>
      </Content>
    </Wrapper>
  )
}

export default Home
