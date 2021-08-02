import React, { FC, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

import { Navigation } from 'src/components/navigation'
import { SeasonItem } from 'src/modules/seasons/components'
import { showDetailsNavItems } from 'lib/utils'

import { Spin, Typography } from 'antd'
import { Box, Content, Wrapper } from 'ui'

import { SeasonType } from 'src/modules/seasons/types'
import { ShowType } from 'src/modules/shows/types'

const { Title } = Typography

interface MatchParams {
  showId: string
}

interface SeasonsProps {
  getShowSeasons: (id: string) => void
  getShowDetails: (id: string) => void
  seasons: SeasonType[]
  details: ShowType
  loadingOfSeasons: boolean
}

const Seasons: FC<SeasonsProps> = ({
  getShowDetails,
  getShowSeasons,
  details,
  seasons,
  loadingOfSeasons
}) => {
  const match = useRouteMatch<MatchParams>()
  const showId = match.params.showId

  useEffect(() => {
    getShowSeasons(showId)
    getShowDetails(showId)
  }, [])

  return (
    <Wrapper>
      <Title level={2}>
        {details?.name} - Seasons
      </Title>

      <Navigation
        activeKey='seasons'
        navItems={showDetailsNavItems(showId)}
      />

      <Content>
        <Spin spinning={loadingOfSeasons}>
          {seasons.length !== 0 && seasons.map(season => (
            <Box key={season.id} mb='16px'>
              <SeasonItem season={season}/>
            </Box>
          ))}
        </Spin>
      </Content>
    </Wrapper>
  )
}

export default Seasons
