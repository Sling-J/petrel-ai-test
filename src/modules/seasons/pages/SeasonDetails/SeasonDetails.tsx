import React, { FC, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

import { Box, Content, Flex, Text, Wrapper } from 'ui'
import { Space, Typography, Spin } from 'antd'

import { format } from 'date-fns'

import { ShowsImage } from 'src/components/shows/components/ShowsImage'
import { Navigation } from 'src/components/navigation'
import { seasonDetailsNavItems } from 'lib/utils'

import { SeasonType } from 'src/modules/seasons/types'

const { Title } = Typography

interface MatchParams {
  seasonId: string
}

interface SeasonDetailsProps {
  getSeasonDetails: (id: string) => void
  details: SeasonType
  loadingOfDetails: boolean
}

const SeasonDetails: FC<SeasonDetailsProps> = ({
  getSeasonDetails,
  details,
  loadingOfDetails,
}) => {
  const match = useRouteMatch<MatchParams>()
  const seasonId = match.params.seasonId

  useEffect(() => {
    getSeasonDetails(seasonId)
  }, [])

  return (
    <Wrapper>
      <Title level={2}>
        Season {details?.number}
      </Title>

      <Navigation
        activeKey='main'
        navItems={seasonDetailsNavItems(seasonId)}
      />

      <Content>
        <Spin spinning={loadingOfDetails}>
          {details && (
            <Flex justifyContent='space-between'>
              <Box width='65%'>
                <Flex>
                  <ShowsImage
                    width='220px'
                    url={
                      details.image?.medium ||
                      'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
                    }
                  />
                  <Box ml='16px'>
                    {details.summary ? (
                      <Text
                        className='__dangerously-added-text'
                        dangerouslySetInnerHTML={{ __html: details.summary }}
                        fontSize={2}
                        as='p'
                      />
                    ) : 'We don\'t have a summary for Season 1 yet. Hang in there, or go ahead and contribute one.'}
                  </Box>
                </Flex>
              </Box>

              <Box width='30%'>
                <Box padding='16px' backgroundColor='#EBEBEB'>
                  <Text as='p' mb='16px' fontSize={4}>
                    Season info
                  </Text>

                  <Space size={2} direction='vertical'>
                    {details.network && (
                      <Text fontSize={1} fontWeight={600}>
                        Aired on:{' '}
                        <Text fontWeight={400}>
                          {details.network.name}
                        </Text>
                      </Text>
                    )}

                    <Text fontSize={1} fontWeight={600}>
                      Premieres:{' '}
                      <Text fontWeight={400}>
                        {format(new Date(details.premiereDate), 'MMMM yyyy')}
                      </Text>
                    </Text>

                    <Text fontSize={1} fontWeight={600}>
                      Episode order:{' '}
                      <Text fontWeight={400}>
                        {details.episodeOrder} episodes
                      </Text>
                    </Text>
                  </Space>
                </Box>
              </Box>
            </Flex>
          )}
        </Spin>
      </Content>
    </Wrapper>
  )
}

export default SeasonDetails
