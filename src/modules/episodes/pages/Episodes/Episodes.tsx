import React, { FC, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import { Typography, Table } from 'antd'
import { Wrapper } from 'ui'

import { format } from 'date-fns'

import { Navigation } from 'src/components/navigation'
import { showDetailsNavItems } from 'lib/utils'

import { EpisodeType } from 'src/modules/episodes/types'
import { ShowType } from 'src/modules/shows/types'

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
  showId: string
}

interface EpisodesProps {
  getShowDetails: (id: string) => void
  getShowEpisodes: (id: string) => void
  details: ShowType
  episodes: EpisodeType[]
  loadingOfEpisodes: boolean
}

const Episodes: FC<EpisodesProps> = ({
  getShowDetails,
  getShowEpisodes,
  details,
  episodes,
  loadingOfEpisodes
}) => {
  const match = useRouteMatch<MatchParams>()
  const showId = match.params.showId

  const data = episodes.map((episode, idx) => ({
    key: idx + 1,
    id: episode.id,
    episode: `${episode.season}x${episode.number}`,
    airdate: format(new Date(episode.airdate), 'MMM dd, yyyy'),
    name: episode.name,
  }))

  useEffect(() => {
    getShowEpisodes(showId)
    getShowDetails(showId)
  }, [showId])

  return (
    <Wrapper>
      <Title level={2}>
        {details?.name} - Episode List
      </Title>

      <Navigation
        activeKey='episodes'
        navItems={showDetailsNavItems(showId)}
      />

      <Table
        columns={columns}
        dataSource={data}
        loading={loadingOfEpisodes}
      />
    </Wrapper>
  )
}

export default Episodes
