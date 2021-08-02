import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { RootState } from 'store/rootReducer'

import { moduleName as showsModule } from 'src/modules/shows/reducers'
import {
  getShowCast,
  getShowDetails,
  getShowSeasons,
  getShowEpisodes,
} from 'src/modules/shows/actions/shows'

import { ShowDetails } from 'src/modules/shows/pages'

const mapStateToProps = (state: RootState) => ({
  cast: state[showsModule].shows.cast,
  details: state[showsModule].shows.details,
  seasons: state[showsModule].shows.seasons,
  episodes: state[showsModule].shows.episodes,
  loadingOfCast: state[showsModule].shows.loadingOfCast,
  loadingOfDetails: state[showsModule].shows.loadingOfDetails,
  loadingOfSeasons: state[showsModule].shows.loadingOfSeasons,
  loadingOfEpisodes: state[showsModule].shows.loadingOfEpisodes,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getShowCast: id => dispatch(getShowCast(id)),
  getShowDetails: id => dispatch(getShowDetails(id)),
  getShowSeasons: id => dispatch(getShowSeasons(id)),
  getShowEpisodes: id => dispatch(getShowEpisodes(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetails)
