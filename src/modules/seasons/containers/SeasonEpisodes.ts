import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store/rootReducer'

import { moduleName as seasonsModule } from 'src/modules/seasons/reducers'
import {
  getSeasonDetails,
  getSeasonEpisodes,
} from 'src/modules/seasons/actions/seasons'

import { SeasonEpisodes } from 'src/modules/seasons/pages'

const mapStateToProps = (state: RootState) => ({
  details: state[seasonsModule].seasons.details,
  episodes: state[seasonsModule].seasons.episodes,
  loadingOfDetails: state[seasonsModule].seasons.loadingOfDetails,
  loadingOfEpisodes: state[seasonsModule].seasons.loadingOfEpisodes,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSeasonDetails: id => dispatch(getSeasonDetails(id)),
  getSeasonEpisodes: id => dispatch(getSeasonEpisodes(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SeasonEpisodes)
