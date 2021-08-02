import React, { FC, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import { Navigation } from 'src/components/navigation'
import { seasonDetailsNavItems } from 'lib/utils'

import { Typography, Table } from 'antd'
import { Wrapper } from 'ui'

import { format } from 'date-fns'

import { EpisodeType } from 'src/modules/episodes/types'
import { SeasonType } from 'src/modules/seasons/types'

const { Title } = Typography

const columns = [
  {
    title: 'Episode',
    dataIndex: 'episode',
    key: 'episode',
    width: 100
  },
  {
    title: 'Date',
    dataIndex: 'airdate',
    key: 'airdate',
    width: 200
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <Link to={`/episodes/${record.id}`}>{text}</Link>,
  },
]

interface MatchParams {
  seasonId: string
}

interface SeasonEpisodesProps {
  getSeasonDetails: (id: string) => void
  getSeasonEpisodes: (id: string) => void
  details: SeasonType
  episodes: EpisodeType[]
  loadingOfDetails: boolean
  loadingOfEpisodes: boolean
}

const SeasonEpisodes: FC<SeasonEpisodesProps> = ({
  getSeasonDetails,
  getSeasonEpisodes,
  details,
  episodes,
  loadingOfDetails,
  loadingOfEpisodes
}) => {
  const match = useRouteMatch<MatchParams>()
  const seasonId = match.params.seasonId

  const data = episodes.map((episode, idx) => ({
    key: idx + 1,
    id: episode.id,
    name: episode.name,
    episode: episode.number,
    airdate: format(new Date(episode.airdate), 'MMM dd, yyyy'),
  }))

  useEffect(() => {
    getSeasonDetails(seasonId)
    getSeasonEpisodes(seasonId)
  }, [])

  return (
    <Wrapper>
      <Title level={2}>
        Season {details?.number}
      </Title>

      <Navigation
        activeKey='episodes'
        navItems={seasonDetailsNavItems(seasonId)}
      />

      <Table
        loading={loadingOfDetails || loadingOfEpisodes}
        pagination={false}
        columns={columns}
        dataSource={data}
      />
    </Wrapper>
  )
}

export default SeasonEpisodes
