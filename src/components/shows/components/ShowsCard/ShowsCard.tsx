import React, {FC} from 'react'
import { useTheme } from 'emotion-theming'

import { Box, Text } from 'ui'
import { styled, Theme } from 'src/ui/theme'

import { ShowsImage } from 'src/components/shows'

interface ShowsCardWrapProps {
  width?: string
}

const ShowsCardWrap = styled.div<ShowsCardWrapProps>`
  max-width: ${props => props.width || '162px'};
  background-color: ${props => props.theme.colors.tertiary};
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  height: 100%;
  cursor: pointer;

  .__movie-card-img {
    max-width: 100%;

    img {
      width: 100%;
    }
  }
`

interface MovieCardProps extends ShowsCardWrapProps {
  imageUrl: string
  title: string
  desc: string
  onClick?: VoidFunction
}

const ShowsCard: FC<MovieCardProps> = ({
  width,
  imageUrl,
  title,
  desc,
  onClick
}) => {
  const theme: Theme = useTheme()

  return (
    <ShowsCardWrap width={width} title={title} onClick={onClick}>
      <ShowsImage
        className='__movie-card-img'
        url={
          imageUrl ||
          'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
        }
      />

      <Box padding='16px 16px 32px'>
        <Text
          as='p'
          mb='8px'
          fontSize={2}
          color={theme.colors.white}
          fontWeight={500}
          lineHeight={1.2}
        >
          {title}
        </Text>

        <Text
          as='p'
          mb='0'
          color={theme.colors.white}
          fontSize={0}
          lineHeight={1.2}
        >
          {desc}
        </Text>
      </Box
        >
    </ShowsCardWrap>
  )
}

export default ShowsCard
