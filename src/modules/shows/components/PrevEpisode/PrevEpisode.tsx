import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Box, Flex, Text } from 'ui'
import { Typography } from 'antd'

import { format } from 'date-fns'

import { EpisodeType } from 'src/modules/episodes/types'
import { ShowType } from 'src/modules/shows/types'

const { Title } = Typography

interface PrevEpisodeProps {
  episodes: EpisodeType[]
  details: ShowType
}

const PrevEpisode: FC<PrevEpisodeProps> = ({
  episodes,
  details
}) => {
  const lastEpisode = episodes[episodes.length - (details.status === 'Ended'
    ? 1
    : 2
  )]

  return (
    <Flex justifyContent='space-between'>
      <Box width='48%'>
        <Title level={2}>
          Previous Episode
        </Title>

        <Box>
          <Text as='p' mb='4px' fontSize={4}>
            <Link to={`/episodes/${lastEpisode.id}`}>
              {lastEpisode.name}
            </Link>
          </Text>

          <Text as='p' mb='8px' fontSize='20px'>
            Episode{' '}
            {lastEpisode.season}
            x
            {lastEpisode.number};{' '}
            {format(new Date(lastEpisode.airdate), 'MMM dd, yyyy')}
          </Text>

          <Text
            className='__dangerously-added-text'
            dangerouslySetInnerHTML={{ __html: lastEpisode.summary }}
            fontSize={2}
            as='p'
          />
        </Box>
      </Box>

      {details._embedded?.nextepisode && (
        <Box width={details.status === 'Ended' ? '100%' : '48%'}>
          <Title level={2}>
            Next Episode
          </Title>

          <Box>
            <Text as='p' mb='4px' fontSize={4}>
              <Link to={`/episodes/${details._embedded?.nextepisode.id}`}>
                {details._embedded?.nextepisode.name}
              </Link>
            </Text>

            <Text as='p' mb='8px' fontSize='20px'>
              Episode{' '}
              {details._embedded?.nextepisode.season}
              x
              {details._embedded?.nextepisode.number};{' '}
              {format(
                new Date(details._embedded?.nextepisode.airdate),
                'MMM dd, yyyy'
              )}
            </Text>

            <Text
              className='__dangerously-added-text'
              fontSize={2}
              as='p'
              dangerouslySetInnerHTML={{
                __html: details._embedded?.nextepisode.summary
              }}
            />
          </Box>
        </Box>
      )}
    </Flex>
  )
}

export default PrevEpisode
