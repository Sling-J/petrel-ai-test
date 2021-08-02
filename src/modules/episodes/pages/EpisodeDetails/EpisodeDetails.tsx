import React, { FC, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

import { Space, Spin, Typography } from 'antd'
import { Box, Content, Flex, Text, Wrapper } from 'ui'

import { format } from 'date-fns'

import { ShowsImage } from 'src/components/shows/components/ShowsImage'

import { EpisodeType } from 'src/modules/episodes/types'

const { Title } = Typography

interface MatchParams {
  episodeId: string
}

interface EpisodeDetailsProps {
  getEpisodeDetails: (id: string) => void
  loadingOfDetails: boolean
  details: EpisodeType
}

const EpisodeDetails: FC<EpisodeDetailsProps> = ({
  getEpisodeDetails,
  details,
  loadingOfDetails
}) => {
  const match = useRouteMatch<MatchParams>()
  const episodeId = match.params.episodeId

  useEffect(() => {
    getEpisodeDetails(episodeId)
  }, [])

  return (
    <Wrapper>
      <Title level={2}>
        {details?.name}
      </Title>

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
                    Episode info
                  </Text>

                  <Space size={2} direction='vertical'>
                    <Text fontSize={1} fontWeight={600}>
                      Show:{' '}
                      <Text fontWeight={400}>
                        {details._embedded.show.name}
                      </Text>
                    </Text>

                    <Text fontSize={1} fontWeight={600}>
                      Number:{' '}
                      <Text fontWeight={400}>
                        Season {details.season}, Episode {details.number}
                      </Text>
                    </Text>

                    <Text fontSize={1} fontWeight={600}>
                      Airdate:{' '}
                      <Text fontWeight={400}>
                        {format(
                          new Date(details.airdate),
                          'MMM dd, yyyy'
                        )} at {details.airtime}
                      </Text>
                    </Text>

                    <Text fontSize={1} fontWeight={600}>
                      Runtime:{' '}
                      <Text fontWeight={400}>
                        {details.runtime} minutes
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

export default EpisodeDetails
