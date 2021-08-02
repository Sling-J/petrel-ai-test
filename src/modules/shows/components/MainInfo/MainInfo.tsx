import React, { FC } from 'react'

import { Box, Content, Flex, Text } from 'ui'
import { Rate, Space, Spin } from 'antd'

import { ShowsImage } from 'src/components/shows'
import { format } from 'date-fns'

import { SeasonType } from 'src/modules/seasons/types'
import { ShowType } from 'src/modules/shows/types'

interface MainInfoProps {
  seasons: SeasonType[]
  details: ShowType
  loading: boolean
}

const MainInfo: FC<MainInfoProps> = ({
  seasons,
  details,
  loading
}) => {
  const premiered = format(new Date(details.premiered), 'yyyy')
  const ended = details.status === 'Ended'
    ? format(new Date(seasons[seasons.length - 1]?.endDate), 'yyyy')
    : 'now'

  return (
    <Content>
      <Spin spinning={loading}>
        <Flex justifyContent='space-between'>
          <Box width='65%'>
            <Flex>
              <ShowsImage
                className='__show-details-img'
                url={
                  details.image?.medium ||
                  'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
                }
              />
              <Box ml='16px'>
                <Text
                  className='__dangerously-added-text'
                  dangerouslySetInnerHTML={{ __html: details.summary }}
                  fontSize={2}
                  as='p'
                />
              </Box>
            </Flex>
          </Box>

          <Box width='30%'>
            <Box padding='16px' backgroundColor='#EBEBEB'>
              <Text as='p' mb='16px' fontSize={4}>
                Show info
              </Text>

              <Space size={2} direction='vertical'>
                <Text fontSize={1} fontWeight={600}>
                  Network:{' '}
                  <Text fontWeight={400}>
                    {details.network?.name}{' '}
                    ({premiered} - {ended})
                  </Text>
                </Text>

                <Text fontSize={1} fontWeight={600}>
                  Schedule:{' '}
                  <Text fontWeight={400}>
                    {details.schedule?.days.join(', ')} at{' '}
                    {details.schedule?.time}{' '}
                    ({details.runtime} min)
                  </Text>
                </Text>

                <Text fontSize={1} fontWeight={600}>
                  Status:{' '}
                  <Text fontWeight={400}>
                    {details.status}
                  </Text>
                </Text>

                <Text fontSize={1} fontWeight={600}>
                  Type:{' '}
                  <Text fontWeight={400}>
                    {details.type}
                  </Text>
                </Text>

                <Text fontSize={1} fontWeight={600}>
                  Genres:{' '}
                  <Text fontWeight={400}>
                    {details.genres?.join(', ')}
                  </Text>
                </Text>

                <Text fontSize={1} fontWeight={600}>
                  Episodes ordered:{' '}
                  <Text fontWeight={400}>
                    {seasons[seasons.length - (details.status === 'Ended'
                        ? 1
                        : 2
                    )]?.episodeOrder} episodes
                  </Text>
                </Text>

                {details.officialSite && (
                  <Text fontSize={1} fontWeight={600}>
                    Official site:{' '}
                    <Text fontWeight={400}>
                      <a href={details.officialSite} target='_blank'>
                        {details.officialSite}
                      </a>
                    </Text>
                  </Text>
                )}
              </Space>

              <Rate
                allowHalf
                count={10}
                value={details.rating?.average}
              />
            </Box>
          </Box>
        </Flex>
      </Spin>
    </Content>
  )
}

export default MainInfo
