import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Flex, Box, Text } from 'ui'

import { format } from 'date-fns'

import { SeasonType } from 'src/modules/seasons/types'

interface SeasonItemProps {
  season: SeasonType
}

const SeasonItem: FC<SeasonItemProps> = ({ season }) => {
  const premiereDate = format(new Date(season.premiereDate), 'yyyy')
  const endDate = format(new Date(season.endDate), 'yyyy')

  return (
    <Flex>
      <Box minWidth='120px' maxWidth='120px' mr='16px'>
        <img
          style={{width: '100%'}}
          alt='Season'
          src={
            season.image?.medium ||
            'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
          }
        />
      </Box>

      <Box>
        <Text as='p' fontSize={4} mb='8px'>
          <Link to={`/seasons/${season.id}`}>
            Season {season.number}
          </Link>
        </Text>

        <Text as='p' fontSize={3} mb='24px'>
          {season.network?.name} <Text fontSize={1}>
            ({premiereDate} - {endDate})
          </Text>
        </Text>

        <Text
          className='__dangerously-added-text'
          dangerouslySetInnerHTML={{ __html: season.summary }}
          fontSize={2}
          as='p'
        />
      </Box>
    </Flex>
  )
}

export default SeasonItem
