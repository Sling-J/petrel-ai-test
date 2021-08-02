import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { useQuery } from 'lib/hooks'

import { Result, Spin, Typography, Button } from 'antd'
import { Wrapper, Content, Box } from 'ui'

import { SearchResultItem } from 'src/modules/search/components'

import { SearchListType, SearchShowParams } from 'src/modules/search/types'

const { Title } = Typography

interface ShowsProps {
  searchShow: (params: SearchShowParams) => void
  list: SearchListType[]
  loadingOfSearch: false
}

const Search: FC<ShowsProps> = ({
  searchShow,
  list,
  loadingOfSearch
}) => {
  const history = useHistory()
  const query = useQuery()

  const searchQuery = query.get('q')

  useEffect(() => {
    searchShow({
      query: searchQuery
    })
  }, [searchQuery])

  return (
    <Wrapper>
      <Title level={2}>
        Search
      </Title>

      <Content>
        <Spin spinning={loadingOfSearch}>
          {searchQuery ? list.length !== 0 && list.map((item, idx) => (
            <Box mb='16px' key={idx}>
              <SearchResultItem show={item.show}/>
            </Box>
          )) : (
            <Result
              status='404'
              title='404'
              subTitle='Missing required parameters: q'
              extra={(
                <Button type='primary' onClick={() => history.push('/')}>
                  Back Home
                </Button>
              )}
            />
          )}
        </Spin>
      </Content>
    </Wrapper>
  )
}

export default Search
