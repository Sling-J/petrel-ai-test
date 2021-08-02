import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { styled } from 'src/ui/theme'
import { Box, Flex, Text } from 'ui'

const CastCardWrap = styled.div`
  .__cast-card-img {
    img {
      width: 100%;
    }
  }
`

interface CastCardProps {
  character: string
  imageUrl: string
  name: string
}

const CastCard: FC<CastCardProps> = ({
  character,
  imageUrl,
  name
}) => (
  <CastCardWrap>
    <Flex>
      <Box minWidth='120px' maxWidth='120px' className='__cast-card-img' mr='16px'>
        <img
          src={
            imageUrl ||
            'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
          }
          alt='Episodes'
        />
      </Box>

      <Box>
        <Text as='p' fontSize={3} fontWeight={600} mb='8px'>
          {name}
        </Text>

        <Text as='p' fontSize={1} mb='8px'>
          as <Text fontWeight={600}>{character}</Text>
        </Text>
      </Box>
    </Flex>
  </CastCardWrap>
)

export default CastCard
