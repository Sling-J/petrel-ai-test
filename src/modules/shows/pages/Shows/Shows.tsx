import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { usePagination } from 'lib/hooks'

import { Spin, Typography, Pagination } from 'antd'

import { ShowsCard } from 'src/components/shows'
import { Wrapper, Content, Box } from 'ui'
import { styled } from 'src/ui/theme'

import { ShowType } from 'src/modules/shows/types'

const { Title } = Typography

const ShowsWrap = styled.div`
  .__shows-list {
    display: flex;
    flex-wrap: wrap;

    .__shows-list__item {
      width: 19%;
      margin-right: 13px;
      margin-bottom: 16px;

      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
`

interface ShowsProps {
  getShows: VoidFunction
  shows: ShowType[]
  loadingOfShows: false
}

const Shows: FC<ShowsProps> = ({
  getShows,
  shows,
  loadingOfShows
}) => {
  const [showsPerPage, setShowsPerPage] = useState(25)
  const [currentPage, setCurrentPage] = useState(1)
  const history = useHistory()

  const { list, total } = usePagination(shows, showsPerPage, currentPage)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    if (shows.length === 0) {
      getShows()
    }
  }, [])

  return (
    <ShowsWrap>
      <Wrapper>
        <Title level={2}>
          Shows
        </Title>

        <Content>
          <Spin spinning={loadingOfShows}>
            <Box mb='16px'>
              <Pagination
                total={total}
                onChange={paginate}
                pageSize={showsPerPage}
                current={currentPage}
                onShowSizeChange={(current, size) => {
                  setShowsPerPage(size)
                }}
              />
            </Box>

            <Box className='__shows-list'>
              {list.length !== 0 && list.map(show => (
                <Box className='__shows-list__item'>
                  <ShowsCard
                    width='100%'
                    title={show.name}
                    desc={show.network?.name}
                    imageUrl={show.image?.medium}
                    onClick={() => history.push(`/shows/${show.id}`)}
                  />
                </Box>
              ))}
            </Box>

            <Box mt='16px'>
              <Pagination
                total={total}
                onChange={paginate}
                pageSize={showsPerPage}
                current={currentPage}
                onShowSizeChange={(current, size) => {
                  setShowsPerPage(size)
                }}
              />
            </Box>
          </Spin>
        </Content>
      </Wrapper>
    </ShowsWrap>
  )
}

export default Shows
