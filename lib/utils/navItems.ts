export const showDetailsNavItems = id => [
  {
    name: 'Main',
    key: 'main',
    url: `/shows/${id}`
  },
  {
    name: 'Episodes',
    key: 'episodes',
    url: `/shows/${id}/episodes`
  },
  {
    name: 'Seasons',
    key: 'seasons',
    url: `/shows/${id}/seasons`
  },
  {
    name: 'Cast',
    key: 'cast',
    url: `/shows/${id}/cast`
  },
]

export const seasonDetailsNavItems = id => [
  {
    name: 'Main',
    key: 'main',
    url: `/seasons/${id}`
  },
  {
    name: 'Episodes',
    key: 'episodes',
    url: `/seasons/${id}/episodes`
  },
]
