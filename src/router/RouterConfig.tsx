import React from 'react'

import Home from 'src/modules/home/containers/Home'
import Cast from 'src/modules/cast/containers/Cast'
import Shows from 'src/modules/shows/containers/Shows'
import Search from 'src/modules/search/containers/Search'
import Seasons from 'src/modules/seasons/containers/Seasons'
import Episodes from 'src/modules/episodes/containers/Episodes'
import SeasonDetails from 'src/modules/seasons/containers/SeasonDetails'
import ShowDetails from 'src/modules/shows/containers/ShowDetails'
import SeasonEpisodes from 'src/modules/seasons/containers/SeasonEpisodes'
import EpisodeDetails from 'src/modules/episodes/containers/EpisodeDetails'

export const routes = [
  {
    path: '/',
    key: 'Home',
    exact: true,
    component: Home
  },
  {
    path: '/search',
    key: 'Search',
    exact: true,
    component: Search
  },
  {
    path: '/shows',
    key: 'Shows',
    exact: true,
    component: Shows
  },
  {
    path: '/shows/:showId',
    key: 'ShowDetails',
    exact: true,
    component: ShowDetails
  },
  {
    path: '/shows/:showId/cast',
    key: 'Cast',
    exact: true,
    component: Cast
  },
  {
    path: '/shows/:showId/episodes',
    key: 'Episodes',
    exact: true,
    component: Episodes
  },
  {
    path: '/shows/:showId/seasons',
    key: 'Episodes',
    exact: true,
    component: Seasons
  },
  {
    path: '/episodes/:episodeId',
    key: 'EpisodeDetails',
    exact: true,
    component: EpisodeDetails
  },
  {
    path: '/seasons/:seasonId',
    key: 'SeasonDetails',
    exact: true,
    component: SeasonDetails
  },
  {
    path: '/seasons/:seasonId/episodes',
    key: 'SeasonEpisodes',
    exact: true,
    component: SeasonEpisodes
  },
]
