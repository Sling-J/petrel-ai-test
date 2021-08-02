import React, { FC } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Typography, Table, Button } from 'antd'

import { format } from 'date-fns'
import { Box } from 'ui'

import { EpisodeType } from 'src/modules/episodes/types'
import { ShowType } from 'src/modules/shows/types'

const { Title } = Typography

const columns = [
  {
    title: 'Episode Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <Link to={`/episodes/${record.id}`}>{text}</Link>
  },
  {
    title: 'Airdate',
    dataIndex: 'airdate',
    key: 'airdate',
  },
  {
    title: 'Trailer',
    dataIndex: 'trailer',
    key: 'trailer',
  },
]

interface PrevEpisodesProps {
  episodes: EpisodeType[]
  details: ShowType
}

const PrevEpisodes: FC<PrevEpisodesProps> = ({
  episodes,
  details
}) => {
  const history = useHistory()

  const data = episodes.slice(
    details.status === 'Ended'
      ? -3
      : -4,
    details.status === 'Ended'
      ? episodes.length
      : episodes.length - 1
  ).map((episode, idx) => ({
    key: idx + 1,
    id: episode.id,
    name: `${episode.season}x${episode.number}: ${episode.name}`,
    airdate: format(new Date(episode.airdate), 'MMM dd, yyyy'),
    trailer: ''
  })).reverse()

  return (
    <>
      <Title level={2}>
        Previous Episodes
      </Title>

      <Table columns={columns} dataSource={data} pagination={false}/>

      <Box mt='16px'>
        <Button type='primary' onClick={() => {
          history.push(`/shows/${details.id}/episodes`)
        }}>
          View full episode list »
        </Button>
      </Box>
    </>
  )
}

export default PrevEpisodes
