import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { styled } from 'src/ui/theme'
import { ShowsImage } from 'src/components/shows'
import { Flex, Box, Text } from 'ui'

import { ShowType } from 'src/modules/shows/types'
import { format } from 'date-fns'

const SearchItemWrap = styled.div`
  width: 100%;

  .__search-result-img {
    margin-right: 16px;
  }


  .__search-item-desc {
    p {
      line-height: 1.4;
    }
  }
`

interface SearchResultItemProps {
  show: ShowType
}

const SearchResultItem: FC<SearchResultItemProps> = ({
  show
}) => {
  const premiered = format(new Date(show.premiered), 'yyyy')

  return (
    <SearchItemWrap>
      <Flex>
        <ShowsImage
          className='__search-result-img'
          url={
            show.image?.medium ||
            'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
          }
        />

        <Box width='100%'>
          <Box>
            <Text fontSize={4}>
              <Link to={`/shows/${show.id}`}>
                {show.name}
              </Link>
            </Text>{' '}
            <Text fontSize={2}>
              ({premiered} premiered {' '}
              {show.officialSite
                ? (
                  <a href={show.officialSite} target='_blank'>
                    {show.network?.name}
                  </a>
                )
                : show.network?.name
              })
            </Text>
          </Box>

          <Box mt='16px'>
            <Text
              fontSize={2}
              className='__search-item-desc'
              dangerouslySetInnerHTML={{ __html: show.summary }}
            />
          </Box>
        </Box>
      </Flex>
    </SearchItemWrap>
  )
}

export default SearchResultItem
