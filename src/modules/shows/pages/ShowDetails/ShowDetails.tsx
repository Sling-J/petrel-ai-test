import React, { FC, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

import { Typography } from 'antd'
import { styled } from 'src/ui/theme'
import { Box, Wrapper } from 'ui'

import { Navigation } from 'src/components/navigation'
import {
  PrevEpisodes,
  PrevEpisode,
  MainInfo,
  CastList,
} from 'src/modules/shows/components'
import { showDetailsNavItems } from 'lib/utils'

import { CastType, ShowType, } from 'src/modules/shows/types'
import { EpisodeType } from 'src/modules/episodes/types'
import { SeasonType } from 'src/modules/seasons/types'

const { Title } = Typography

const ShowDetailWrap = styled.div`
  .__show-details-img {
    min-width: 205px;
    max-width: auto;
  }

  .__dangerously-added-text {
    p {
      line-height: 1.4;
    }
  }
`

interface MatchParams {
  showId: string
}

interface ShowDetailProps {
  getShowCast: (id: string) => void
  getShowDetails: (id: string) => void
  getShowSeasons: (id: string) => void
  getShowEpisodes: (id: string) => void
  cast: CastType[]
  details: ShowType
  seasons: SeasonType[]
  episodes: EpisodeType[]
  loadingOfCast: boolean
  loadingOfDetails: boolean
  loadingOfSeasons: boolean
  loadingOfEpisodes: boolean
}

const ShowDetails: FC<ShowDetailProps> = ({
  getShowCast,
  getShowDetails,
  getShowSeasons,
  getShowEpisodes,
  cast,
  details,
  seasons,
  episodes,
  loadingOfCast,
  loadingOfDetails,
  loadingOfSeasons,
  loadingOfEpisodes
}) => {
  const match = useRouteMatch<MatchParams>()
  const showId = match.params.showId

  useEffect(() => {
    getShowCast(showId)
    getShowDetails(showId)
    getShowSeasons(showId)
    getShowEpisodes(showId)
  }, [])

  return (
    <ShowDetailWrap>
      <Wrapper>
        <Title level={2}>
          {details?.name}
        </Title>

        <Navigation
          activeKey='main'
          navItems={showDetailsNavItems(showId)}
        />

        {details &&
        cast.length !== 0 &&
        seasons.length !== 0 &&
        episodes.length !== 0 && (
          <>
            <MainInfo
              details={details}
              seasons={seasons}
              loading={
                loadingOfDetails ||
                loadingOfCast ||
                loadingOfEpisodes ||
                loadingOfSeasons
              }
            />
            <Box mb='24px'>
              <PrevEpisode details={details} episodes={episodes}/>
            </Box>
            <Box mb='24px'>
              <PrevEpisodes details={details} episodes={episodes}/>
            </Box>
            <CastList showId={showId} cast={cast}/>
          </>
        )}
      </Wrapper>
    </ShowDetailWrap>
  )
}

export default ShowDetails
